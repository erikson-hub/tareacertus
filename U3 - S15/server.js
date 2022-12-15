// LA FORMA COMUN USANDO NODE

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const nombre = 'Erikson';
const apellidos = 'Velasquez Rojas';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola mundo');
});

server.listen(port, hostname, () => {
  console.log(`el servidor se está ejecutando en http://${hostname}:${port}`);
  console.log(
    `El administrador del servidor es ${nombre} de apellidos ${apellidos}`
  );
});

// USANDO EXPRESS

// const express = require('express');

// const app = express();
// const port = 3000;
// const port2 = 8080;

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.get('/user', (req, res) => {
//   res.send('Vista del endpoint User');
// });
// app.listen(port, () => {
//   console.log(`El servidor está escuchando  en http://localhost:${port}`);
//   console.log(
//     `El resultado de una sumita entre los valores del puerto 1 : ${port} y puerto 2 : ${port2} es = ${
//       port + port2
//     }`
//   );
// });
