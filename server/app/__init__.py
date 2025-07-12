from flask import Flask
from flask_pymongo import PyMongo
from .routes import main as main_routes

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/rewear'
mongo = PyMongo(app)

app.register_blueprint(main_routes)

if __name__ == '__main__':
    app.run(debug=True)
