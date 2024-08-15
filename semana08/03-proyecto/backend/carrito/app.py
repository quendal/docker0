from flask import Flask, jsonify
from flask_cors import CORS # Importa el paquete CORS

app = Flask(__name__)
CORS(app) # Usa el paquete CORS

@app.route('/cart', methods=['GET'])
def get_cart():
    cart = {
        'items': [
            {'id': 1, 'name': 'Product 1', 'quantity': 2, 'price': 20},
            {'id': 2, 'name': 'Product 2', 'quantity': 1, 'price': 20}
        ],
        'total': 50
    }
    return jsonify(cart)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
    
