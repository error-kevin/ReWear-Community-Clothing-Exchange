def insert_item(mongo, item_data):
    return mongo.db.items.insert_one(item_data)

def get_all_items(mongo):
    return list(mongo.db.items.find())

def get_item_by_id(mongo, item_id):
    from bson.objectid import ObjectId
    return mongo.db.items.find_one({"_id": ObjectId(item_id)})

def update_item(mongo, item_id, update_data):
    from bson.objectid import ObjectId
    return mongo.db.items.update_one(
        {"_id": ObjectId(item_id)},
        {"$set": update_data}
    )

def delete_item(mongo, item_id):
    from bson.objectid import ObjectId
    return mongo.db.items.delete_one({"_id": ObjectId(item_id)})
