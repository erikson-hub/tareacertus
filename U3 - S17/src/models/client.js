const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  nomb_cliente: {
    type: 'string',
    required: true,
  },
  telefono: {
    type: 'number',
    required: true,
  },
  ciudad: {
    type: 'string',
    required: true,
  },
  calle: {
    type: 'string',
    required: true,
  },
  numero: {
    type: 'number',
    required: true,
  },
  estado: {
    type: 'string',
    required: true,
  },
  fecha_nacimiento: {
    type: 'string',
    required: true,
  },
});
module.exports = mongoose.model('Client', clientSchema);
