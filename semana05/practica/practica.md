# Tareas con Docker

1. Crear una red llamada
   1. Nombre: red_interna
   2. Segmento de red: 10.17.0.0/16
2. Crear un contenedor de docker:
   1. imagen: mongo
   2. Conectar a la red: 10.17
   3. puertos
      1. Puerto host: 27017
      2. Puerto contenedor: 27017
   4. variables:
      1. -e MONGO_INITDB_ROOT_USERNAME=root
      2. -e MONGO_INITDB_ROOT_PASSWORD=123456
   5. Volumen
      1. mongo_data:/data/db

# Conectar código con conetenedor

1. Crear directorio de proyecto
```bash
mkdir -p backend/producto
cd backend/producto
```

2.  Iniciar proyecto node
```bash
npm init -y
npm install express cors mongoose 
```

3. Configurar proyecto node, en archivo package.json
   1. Agregar en la sección "scripts" del archivo package.json:
```json
"scripts": {
    "dev": "node index.js"
  },
```

4. Crear el archivo index.js con el código:

```js

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
const mongoURI = `mongodb://${mongoUser}:${mongoPass}@localhost:27017/admin`;

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

```