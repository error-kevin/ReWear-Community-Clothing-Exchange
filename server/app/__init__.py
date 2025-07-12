# __init__.py
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_socketio import SocketIO    
from dotenv import load_dotenv
import os
from flask_jwt_extended import JWTManager

load_dotenv()

mongo = PyMongo()
socketio = SocketIO(cors_allowed_origins="*")
jwt = JWTManager()

def create_app():
    """App factory that sets up Flask, PyMongo, and SocketIO."""
    app = Flask(__name__)

    app.config['MONGO_URI'] = os.environ.get(
        'MONGO_URI',
        'mongodb://localhost:27017/rewear'
    )
    
    app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'your_jwt_secret_key')  # Change this to a secure key

    mongo.init_app(app)
    socketio.init_app(app)
    jwt.init_app(app)  # Initialize JWT Manager

    from .routes import main as main_routes
    app.register_blueprint(main_routes)

    return app
