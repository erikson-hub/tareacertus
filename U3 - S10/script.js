class estudiante {
  constructor(id, nombre, nota1, nota2, nota3, nota4) {
    this.id = id;
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
  }
  promedio() {
    return (
      this.nota1 * 0.15 +
      this.nota2 * 0.2 +
      this.nota3 * 0.25 +
      this.nota4 * 0.4
    );
  }
  condicion() {
    if (this.promedio() >= 12) {
      return 'aprobó';
    } else {
      return 'no aprobó';
    }
  }
  obsequio() {
    if (this.promedio() >= 17) {
      return 'aprobó y se ganó una mochila';
    } else {
      return 'no ganó nada';
    }
  }
}

let alumno = new estudiante('9', 'Erik', '15', '18', '10', '05');
console.log(alumno);
console.log(alumno.promedio());
console.log(alumno.condicion());
console.log(alumno.obsequio());
