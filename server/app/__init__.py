from flask import Flask
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

# ✅ Load environment variables
load_dotenv()

# ✅ Create PyMongo instance globally (but don't attach yet)
mongo = PyMongo()

def create_app():
    app = Flask(__name__)

    # ✅ Set Mongo URI from .env (or fallback to local)
    app.config['MONGO_URI'] = os.environ.get('MONGO_URI', 'mongodb://localhost:27017/rewear')

    # ✅ Attach Mongo to app
    mongo.init_app(app)

    # ✅ Import and register your routes
    from .routes import main as main_routes
    app.register_blueprint(main_routes)

    return app
