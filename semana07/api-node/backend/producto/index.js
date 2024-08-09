// librerias
const express = require('express');
const mongoose = require('mongoose');

//inicializar express
const app = express();
//variables
const PORT = 3002;

// Conexión a MongoDB
const mongoUser = 'root';
const mongoPass = '123456';
const mongoURI = `mongodb://${mongoUser}:${mongoPass}@mongo:27017/admin`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

//acá se define el esquma del producto
const ProductSchema = new mongoose.Schema({
name: String,
price: Number,
description: String
});

const Product = mongoose.model('Product', ProductSchema);

// Endpoints o rutas: GET /products
app.get('/products', async (req, res) => {
try {
//consulta producto
const products = await Product.find();
//retorn resultado
res.json(products);
} catch (error) {
res.status(500).json({ message: error.message });
}
});




// Iniciar el servidor
app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});
