const root = document.getElementById('root');

const form = document.createElement('form');
const inputC = document.createElement('input');
const inputA = document.createElement('input');
const boton = document.createElement('button');
root.append(form);
form.appendChild(inputC);
form.appendChild(inputA);
form.appendChild(boton);

boton.type = 'submit';
boton.textContent = 'enviar';
inputC.type = 'text';
inputC.placeholder = 'Categoría ';
inputC.id = 'category';
inputC.maxLength = '1';
inputA.placeholder = 'Años Servicio';
inputA.type = 'number';
inputA.id = 'years';

// let validCategories = ['A', 'B', 'C'];

document.getElementById('category').addEventListener('change', upperCase);
function upperCase() {
  let x = document.getElementById('category');
  x.value = x.value.toUpperCase();
  console.log(x.value);
}
document.getElementById('years').addEventListener('change', toNumber);
function toNumber() {
  let y = document.getElementById('years');
  y.value = +y.value;
  console.log(y.value);
}

let sueldo,
  boni,
  tot = 0;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  //CATEGORIA A
  if (inputC.value === 'A' && inputA.value >= 1 && inputA.value <= 3) {
    sueldo = inputA.value * 40;
    boni = sueldo * 0.15;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando A y rango de años entre 1-3');
  } else if (inputC.value === 'A' && inputA.value >= 4 && inputA.value <= 7) {
    sueldo = inputA.value * 40;
    boni = sueldo * 0.2;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando A y rango de años 4 - 7');
  } else if (inputC.value === 'A' && inputA.value >= 8 && inputA.value <= 12) {
    sueldo = inputA.value * 40;
    boni = sueldo * 0.3;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando A y rango de años 8 -12');
  } else if (inputC.value === 'A' && inputA.value >= 13) {
    sueldo = inputA.value * 40;
    boni = sueldo * 0.35;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando A y rango de años 13+');

    //CATEGORIA B
  } else if (inputC.value === 'B' && inputA.value >= 1 && inputA.value <= 3) {
    sueldo = inputA.value * 35;
    boni = sueldo * 0.15;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando B y rango de años 1 -3');
  } else if (inputC.value === 'B' && inputA.value >= 4 && inputA.value <= 7) {
    sueldo = inputA.value * 35;
    boni = sueldo * 0.2;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando B y rango de años 4 -7');
  } else if (inputC.value === 'B' && inputA.value >= 8 && inputA.value <= 12) {
    sueldo = inputA.value * 35;
    boni = sueldo * 0.3;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando B y rango de años 8-12');
  } else if (inputC.value === 'B' && inputA.value >= 13) {
    sueldo = inputA.value * 35;
    boni = sueldo * 0.35;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando B y rango de años 13+');

    // CATEGORIA C
  } else if (inputC.value === 'C' && inputA.value >= 0 && inputA.value <= 3) {
    sueldo = inputA.value * 30;
    boni = sueldo * 0.15;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando C y rango de años 1 -3');
  } else if (inputC.value === 'C' && inputA.value >= 4 && inputA.value <= 7) {
    sueldo = inputA.value * 30;
    boni = sueldo * 0.2;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando C y rango de años 4 - 7');
  } else if (inputC.value === 'C' && inputA.value >= 8 && inputA.value <= 12) {
    sueldo = inputA.value * 30;
    boni = sueldo * 0.3;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando C y rango de años 8 -12');
  } else if (inputC.value === 'C' && inputA.value >= 13) {
    sueldo = inputA.value * 30;
    boni = sueldo * 0.35;
    tot = sueldo + boni;
    console.log(tot);
    alert('funciona cuando mando C y rango de años 13+');
  }
});
