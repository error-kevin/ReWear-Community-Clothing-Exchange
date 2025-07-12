from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask_socketio import SocketIO    
from dotenv import load_dotenv
import os


load_dotenv()

mongo = PyMongo()
socketio = SocketIO(cors_allowed_origins="*")   

def create_app():
    """App factory that sets up Flask, PyMongo, and SocketIO."""
    app = Flask(__name__)

    CORS(app)

    app.config['MONGO_URI'] = os.environ.get(
        'MONGO_URI',
        'mongodb://localhost:27017/rewear'
    )

    mongo.init_app(app)
    socketio.init_app(app)         

    from .routes import main as main_routes
    app.register_blueprint(main_routes)

    return app
