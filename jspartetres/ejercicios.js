// ejercicio 1 , añadir una función para restar 2 numeros
let multipli = function (x, y) {
  return x * y;
};
let expon = function (x, y) {
  return Math.pow(x, y);
};
let suma = function (x, y) {
  return x + y;
};

//funcion para restar 2 numeros
let resta = (x, y) => {
  return x - y;
};

var result = multipli(5, 2);
alert(result);

result = suma(3, 4);
alert(result);

result = resta(10, 5);
alert(result);

// ejercicio 2

let pasarFarenheit = (grado) => {
  return (Farenheit = grado * 1.8 + 32);
};

var result = pasarFarenheit(22);
alert(result);

// pasar de farenheit a celcius
let pasarCelcius = (grado) => {
  return (Celcius = (grado - 32) * 0.5);
};

var result = pasarCelcius(20);
alert(result);

// ejercicio 3

let numerouno = +prompt('ingrese primer numero: ');
let numerodos = +prompt('ingrese segundo numero: ');

let sumar = (x, y) => {
  alert(x + y);
};
// alert(sumar(numerouno, numerodos));
sumar(numerouno, numerodos);
