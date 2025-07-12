from flask_pymongo import PyMongo

mongo = PyMongo()

class Item(mongo.Document):
    title = mongo.StringField(required=True)
    description = mongo.StringField(required=True)
    category = mongo.StringField(required=True)
    size = mongo.StringField(required=True)
    condition = mongo.StringField(required=True)
    tags = mongo.ListField(mongo.StringField())
