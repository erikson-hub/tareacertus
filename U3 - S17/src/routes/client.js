const express = require('express');
const clientSchema = require('../models/client');

const router = express.Router();

// Create client
router.post('/clients', (req, res) => {
  const client = clientSchema(req.body);
  client
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get all clients
router.get('/clients', (req, res) => {
  clientSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Get ONE client
router.get('/clients/:id', (req, res) => {
  const { id } = req.params;
  clientSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Update client
router.put('/clients/:id', (req, res) => {
  const { id } = req.params;
  const {
    nomb_cliente,
    telefono,
    calle,
    numero,
    ciudad,
    estado,
    fecha_nacimiento,
  } = req.body;

  clientSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          nomb_cliente,
          telefono,
          calle,
          numero,
          ciudad,
          estado,
          fecha_nacimiento,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// DELETE client
router.delete('/clients/:id', (req, res) => {
  const { id } = req.params;
  clientSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
