from flask import Blueprint, request, jsonify
from .models import Item

main = Blueprint('main', __name__)

@main.route('/api/items', methods=['GET'])
def get_items():
    items = Item.objects()
    return jsonify(items), 200

@main.route('/api/items', methods=['POST'])
def add_item():
    data = request.json
    item = Item(**data)
    item.save()
    return jsonify(item), 201
