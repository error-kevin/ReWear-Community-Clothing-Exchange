from app import create_app, socketio  # ✅ Import socketio too

app = create_app()

print("✅ Running ReWear Flask + SocketIO server...")

if __name__ == '__main__':
    socketio.run(app, debug=True)  # ✅ Use socketio to run the server
