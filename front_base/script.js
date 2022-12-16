// obtener la lista de clientes
function getClients() {
  fetch('http://localhost:3000/api/clients')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// obtener un cliente por id
function getClient(id) {
  fetch(`http://localhost:3000/api/clients/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
