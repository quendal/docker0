from flask import Flask
import os

app = Flask(__name__)

@app.route('/')
def hello():
    container_id = os.getenv('HOSTNAME', 'unknown')
    return "Hello World! My container ID is: {}\n".format(container_id)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
