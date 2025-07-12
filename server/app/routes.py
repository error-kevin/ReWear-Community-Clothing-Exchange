from flask import Blueprint, request, jsonify
from .models import insert_item, get_all_items
from . import mongo, socketio  

main = Blueprint('main', __name__)

# GET all items
@main.route('/api/items', methods=['GET'])
def get_items():
    items = get_all_items(mongo)
    for item in items:
        item['_id'] = str(item['_id'])  # Convert ObjectId to string for JSON
    return jsonify(items), 200

# POST a new item
@main.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    result = insert_item(mongo, data)

    # Add the new item's ID to the data dictionary
    data['_id'] = str(result.inserted_id)

    # ✅ Emit real-time update to all connected clients
    socketio.emit('new_item', data)

    return jsonify({"message": "Item added successfully", "id": str(result.inserted_id)}), 201


# ✅ Test route to confirm everything is working
@main.route('/')
def home():
    return "✅ Home route is working"
