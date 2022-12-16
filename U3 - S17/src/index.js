const express = require('express');
const mongoose = require('mongoose');

//cors
const cors = require('cors');

require('dotenv').config();

const clientRoutes = require('./routes/client');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', clientRoutes);

// Rutas
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// MongoDB conection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('conectado a mongoDB atlas');
  })
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`El servidor se está escuchando en el puerto ${port}`);
});
