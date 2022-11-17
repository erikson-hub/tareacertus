// // ejercicio 1
// let importe = +prompt('ingrese el importe: ');
// if (importe >= 150) {
//   descuento = (12 / 100) * importe;
//   document.write(
//     'el importe es de ' + importe + 'y su descuento de ' + descuento
//   );
// } else {
//   document.write('el importe es menor de 150');
// }

// ejercicio 2

// let alumno = prompt('ingrese nombre de alumno: ');
// let notaparcial = +prompt('nota examen parcial : ');
// let notafinal = +prompt('nota examen final : ');
// let notapracticas = +prompt('nota promedio practicas : ');

// const promedio = (notaparcial + notafinal + notafinal + notapracticas) / 4;

// if (promedio > 10) {
//   document.write(
//     'el almuno ' + alumno + ' está aprobado con un promedio de: ' + promedio
//   );
// } else {
//   document.write('no hay nota aprobatoria');
// }

// // ejercicio 3

// // Elaborar un programa que permita ingresar el nombre del trabajador,
// // su sueldo básico y el número de hijos, se deberá mostrar su bonificación y el sueldo final.
// // Tenga en cuenta que la empresa está dando una bonificación del 7% del sueldo básico sólo en el caso el trabajador tuviese hijos.

// let trabajador = prompt('El nombre del trabajador: ');
// let sueldobasico = +prompt('Sueldo basico: ');
// let hijos = +prompt('Hijos: ');

// let bonificacion = (7 / 100) * sueldobasico;

// if (hijos > 0) {
//   sueldofinal = sueldobasico + bonificacion; // * hijos;
//   document.write(
//     trabajador +
//       ' tiene ' +
//       hijos +
//       ' hijos y un sueldo final de ' +
//       sueldofinal
//   );
// } else {
//   document.write('no tiene hijos');
// }

// // ejercicio 4
// // Construir un programa que permita ingresar un número,
// // si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.

// let numero = +prompt('ingrese un numero: ');
// if (numero > 500) {
//   let porcentaje = (18 / 100) * numero;
//   document.write(porcentaje);
// }

// // ejercicio 5
// // Crea una aplicación que pida un número y calcule su factorial
// // (El factorial de un número es el producto de todos los enteros entre 1 y el propio número
// //  y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)

// let numero = +prompt('ingrese un numero ');
// let r = 1;
// for (let i = numero; i > 0; i--) {
//   r *= i;
// }

// document.write('el factorial de ' + numero + ' es: ' + r);
