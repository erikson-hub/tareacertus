// Primer ejercicio

let varones = +prompt('ingrese cantidad de varones: ');
let mujeres = +prompt('ingrese cantidad de mujeres: ');

let total = varones + mujeres;

let porcentajevarones = (varones / total) * 100;
let porcentajemujeres = (mujeres / total) * 100;
document.write('el porcentaje de varones es ' + porcentajevarones + '%');
document.write('<br/>');
document.write('el porcentaje de mujeres es ' + porcentajemujeres + '%');

// segundo ejercicio

let montoinversion = +prompt('ingrese monto de inversion: ');

let inversionLaMar = (35 / 100) * montoinversion;
let inversionaAbancay = (25 / 100) * montoinversion;
let inversion28Julio = (10 / 100) * montoinversion;
let inversionAviacion = (15 / 100) * montoinversion;
let inversionTacna = (15 / 100) * montoinversion;

document.write(inversionLaMar + 'soles');
document.write('<br/>');
document.write(inversionaAbancay + 'soles');
document.write('<br/>');
document.write(inversion28Julio + 'soles');
document.write('<br/>');
document.write(inversionAviacion + 'soles');
document.write('<br/>');
document.write(inversionTacna + 'soles');

//terrcer ejercicio

let entradasgeneral = +prompt('ingrese entradas general: ');
let entradasmayores = +prompt('ingrese entradas mayoes: ');
let entradasmenores = +prompt('ingrese entradas menores: ');

let preciogeneral = 150;
let preciomayores = 50;
let preciomenores = 80;

const totalrecaudado = (a, b) => {
  return a * b;
};

let finalrecaudado =
  totalrecaudado(entradasgeneral, preciogeneral) +
  totalrecaudado(entradasmayores, preciomayores) +
  totalrecaudado(entradasmenores, preciomenores);
document.write(
  'total recaudado general ' + totalrecaudado(entradasgeneral, preciogeneral)
);
document.write('<br/>');
document.write(
  'total recaudado mayores ' + totalrecaudado(entradasmayores, preciomayores)
);
document.write('<br/>');
document.write(
  'total recaudado menores ' + totalrecaudado(entradasmenores, preciomenores)
);
document.write('<br/>');
document.write('total recaudado en conjunto ' + finalrecaudado);
