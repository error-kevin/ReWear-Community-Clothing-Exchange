from flask import Blueprint, request, jsonify
<<<<<<< Updated upstream
from bson.objectid import ObjectId
=======
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
>>>>>>> Stashed changes
from .models import (
    insert_item, get_all_items,
    insert_user, find_user_by_username, check_user_password
)
from . import mongo

main = Blueprint('main', __name__)

@main.route('/api/items', methods=['GET'])
def get_items():
    items = list(mongo.db.items.find({"status": "approve"}))
    for item in items:
        item['_id'] = str(item['_id'])
    return jsonify(items), 200

@main.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    data['status'] = 'pending'
    result = insert_item(mongo, data)
    return jsonify({"message": "Item added successfully", "id": str(result.inserted_id)}), 201

@main.route('/api/register', methods=['POST'])
def register_user():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if find_user_by_username(mongo, username):
        return jsonify({"error": "Username already exists"}), 400
    insert_user(mongo, {"username": username, "password": password})
    return jsonify({"message": "User registered successfully"}), 201

@main.route('/api/login', methods=['POST'])
def login_user():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user = find_user_by_username(mongo, username)
    if not user or not check_user_password(user['password'], password):
        return jsonify({"error": "Invalid username or password"}), 401
    
    # Create JWT token
    access_token = create_access_token(identity=str(user['_id']))
    return jsonify({"message": "Login successful", "access_token": access_token}), 200

@main.route('/api/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    current_user_id = get_jwt_identity()
    user = mongo.db.users.find_one({"_id": ObjectId(current_user_id)})
    if user:
        return jsonify({"username": user['username'], "points": user.get('points', 0)}), 200
    return jsonify({"error": "User not found"}), 404

@main.route('/api/admin/items/pending', methods=['GET'])
def get_pending_items():
    items = list(mongo.db.items.find({"status": "pending"}))
    for item in items:
        item['_id'] = str(item['_id'])
    return jsonify(items), 200

@main.route('/api/admin/item/<item_id>/moderate', methods=['PATCH'])
def moderate_item(item_id):
    action = request.json.get("action")
    if action not in ["approve", "reject"]:
        return jsonify({"error": "Invalid action"}), 400
    result = mongo.db.items.update_one(
        {"_id": ObjectId(item_id)},
        {"$set": {"status": action}}
    )
    if result.matched_count == 0:
        return jsonify({"error": "Item not found"}), 404
    return jsonify({"message": f"Item {action}d successfully"}), 200

@main.route('/api/admin/item/<item_id>', methods=['DELETE'])
def delete_item_admin(item_id):
    result = mongo.db.items.delete_one({"_id": ObjectId(item_id)})
    if result.deleted_count == 0:
        return jsonify({"error": "Item not found"}), 404
    return jsonify({"message": "Item deleted successfully"}), 200
