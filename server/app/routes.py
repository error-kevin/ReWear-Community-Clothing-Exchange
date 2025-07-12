from flask import Blueprint, request, jsonify
from .models import insert_item, get_all_items
from . import mongo

main = Blueprint('main', __name__)

@main.route('/api/items', methods=['GET'])
def get_items():
    items = get_all_items(mongo)
    # Convert ObjectId to string for JSON serialization
    for item in items:
        item['_id'] = str(item['_id'])
    return jsonify(items), 200

@main.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    result = insert_item(mongo, data)
    return jsonify({"message": "Item added successfully", "id": str(result.inserted_id)}), 201
