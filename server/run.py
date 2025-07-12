from app import create_app

app = create_app()

print("✅ Running ReWear Flask server...")

if __name__ == '__main__':
    app.run(debug=True)
