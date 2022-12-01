let students = [
  {
    codigo: '1001',
    nombre: 'Alberto',
    apellido: 'Gonzales',
    profile_picture: 'https://randomuser.me/api/portraits/men/54.jpg',
    email: '',
  },
  {
    codigo: '1102',
    nombre: 'Yadira',
    apellido: 'Sanchez',
    profile_picture: 'https://randomuser.me/api/portraits/women/60.jpg',
    email: '',
  },
  {
    codigo: '1203',
    nombre: 'Carol',
    apellido: 'Martinez',
    profile_picture: 'https://randomuser.me/api/portraits/women/62.jpg',
    email: '',
  },
  {
    codigo: '1042',
    nombre: 'Junior',
    apellido: 'Prieto',
    profile_picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    email: '',
  },
  {
    codigo: '1025',
    nombre: 'Pedro',
    apellido: 'Ampuero',
    profile_picture: 'https://randomuser.me/api/portraits/men/48.jpg',
    email: '',
  },
  {
    codigo: '1018',
    nombre: 'Ines',
    apellido: 'Valencia',
    profile_picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    email: '',
  },
  {
    codigo: '1104',
    nombre: 'Anita',
    apellido: 'Quispe',
    profile_picture: 'https://randomuser.me/api/portraits/women/35.jpg',
    email: '',
  },
  {
    codigo: '1246',
    nombre: 'Armando',
    apellido: 'Paredes',
    profile_picture: 'https://randomuser.me/api/portraits/men/64.jpg',
    email: '',
  },
];

// 1. Crear una funcion que ordene a los estudiantes en funcion de su codigo, nombre o apellido
function orderedArrayOfObjectsByParam(array, param) {
  const validParams = Object.keys(array[0]);
  if (validParams.includes(param)) {
    if (typeof array[0][param] === 'number') {
      return array.sort((a, b) => a[param] - b[param]);
    } else {
      return array.sort((a, b) => a[param].localeCompare(b[param]));
    }
  } else {
    console.log(
      ` porfavor utilice uno de los parametros válidos: ${validParams.join(
        '-'
      )}`
    );
  }
}
// 2. Crear una funcion que genere un correo electronico en base a el nombre y apellido del alumno.
// Ejemplo: Andres Perez -> aperez@mtpecertus.com
// La funcion debe verificar que no existan dos personas con el mismo email.En caso asi sea se agregara
// un numero al nombre del correo.
// Ejemplo: Anita Perez -> aperez2@mtpecertus.com

function generarCorrero(array) {
  for (const object of array) {
    object.email = `${object.nombre.charAt(0)}${
      object.apellido
    }@mtpecertus.com`.toLocaleLowerCase();

    console.log(object);
  }
}
// 3. Crear una funcion que permita crear un nuevo alumno pidiendo los datos a traves de un prompt al
// usuario. OJO: Recuerda que el correo es autogenerado. El profile_picture debe ser llenado con la api
// https://randomuser.me/api/portraits/{gender}/{number}.jpg. Para efectos del ejercicio, dos personas
// podrian compartir la misma foto de perfil.

function addNewElement(arreglo) {
  let attributes = Object.keys(arreglo[0]);
  let newElement = {};
  for (const index in attributes) {
    newElement[attributes[index]] = prompt(`ingrese el ${attributes[index]}`);
  }
  arreglo.push(newElement);
  return arreglo;
}
// 4. Crea un input text para ingresar parametros de busqueda de alumnos y que renderice la informacion
// del alumno al hacer submit en el boton de "buscar".
function buscarAlumno(parametro, valor) {
  let busqueda = students.filter((student) => student[parametro] === valor); // Array
  let respuesta;
  if (busqueda.length === 0) {
    respuesta = 'No se encontraron registros';
  } else if (busqueda.length === 1) {
    respuesta = Object.entries(busqueda[0]); // {nombre: "Julio", apellido: "Martinez"} => [[nombre, "Julio"], [apellido, "martinez"]]
  } else {
    respuesta =
      'Son muchos registros por favor utilice otro parametro de busqueda';
  }
  return respuesta;
}

const root = document.getElementById('root');
const inputParametro = document.createElement('input');
const inputValor = document.createElement('input');
const button = document.createElement('button');
const respuesta = document.createElement('p');
button.textContent = 'Buscar';
root.append(inputParametro, inputValor, button, respuesta);

button.addEventListener('click', () => {
  respuesta.textContent = buscarAlumno(inputParametro.value, inputValor.value);
});

// 5. FETCHING DATA: crear una funcion asincrona para pedir informacion a la api de pokemon.
// https://pokeapi.co/api/v2/generation/1/

async function fetchAPI() {
  let url = 'https://pokeapi.co/api/v2/generation/1';
  let response = await fetch(url);
  let data = await response.json();
  data.pokemon_species.forEach((element) => {
    console.log(element.name);
  });
  return data;
}

// 5. FETCHING DATA: crear una funcion asincrona para pedir informacion a la api de pokemon.
// https://pokeapi.co/api/v2/generation/1/

// async function pedirYMostrar(num){
//     let response = await fetch(`https://pokeapi.co/api/v2/generation/${num}/`)
//     let data = await response.json()
//     data.pokemon_species.forEach((element) => {
//         console.log(element)
//     })
//     return data
// }

const BASE_URL = 'https://the-one-api.dev/v2/';
const BOOK = 'book';
const QUOTES = 'quotes';
const CHARACTERS = 'characters';

async function requestBooks() {
  let response = await fetch(`${BASE_URL}${BOOK}`, {
    method: 'GET',
    headers: `token: ${token}`,
  });
  let data = await response.json();
  console.log(data);
}

async function requestQuotes() {
  let response = await fetch(`${BASE_URL}${QUOTES}`, {
    method: 'GET',
    headers: `token: ${token}`,
  });
  let data = await response.json();
  console.log(data);
}

async function requestCharacters() {
  let response = await fetch(`${BASE_URL}${CHARACTERS}`, {
    method: 'GET',
    headers: `token: ${token}`,
  });
  let data = await response.json();
  console.log(data);
}

// 6. Crear una lista de pokemons del objeto pokemon_species y renderizarlos en pantalla

// 7. Usando la informacion obtenida de la API, haz una funcion asincrona que pida las fotos de los pokemons
// y los renderice en la pantalla.
