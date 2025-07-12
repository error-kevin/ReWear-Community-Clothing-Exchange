from werkzeug.security import generate_password_hash, check_password_hash
from bson.objectid import ObjectId

def insert_item(mongo, item_data): 
    return mongo.db.items.insert_one(item_data)

def get_all_items(mongo):
    return list(mongo.db.items.find())

def get_item_by_id(mongo, item_id):
    return mongo.db.items.find_one({"_id": ObjectId(item_id)})

def update_item(mongo, item_id, update_data):
    return mongo.db.items.update_one(
        {"_id": ObjectId(item_id)},
        {"$set": update_data}
    )

def delete_item(mongo, item_id):
    return mongo.db.items.delete_one({"_id": ObjectId(item_id)})

def insert_user(mongo, user_data):
    user_data['password'] = generate_password_hash(user_data['password'])
    return mongo.db.users.insert_one(user_data)

def find_user_by_username(mongo, username):
    return mongo.db.users.find_one({"username": username})

def check_user_password(stored_hash, entered_password):
    return check_password_hash(stored_hash, entered_password)
