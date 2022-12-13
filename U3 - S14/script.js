function Descuento(sueldoBruto) {
  if (sueldoBruto >= 501 && sueldoBruto <= 1000) {
    return (sueldoBruto * 2) / 100;
  } else if (sueldoBruto >= 1001 && sueldoBruto <= 4000) {
    return (sueldoBruto * 8) / 100;
  } else if (sueldoBruto >= 4001 && sueldoBruto <= 8000) {
    return (sueldoBruto * 15) / 100;
  } else if (sueldoBruto >= 8001 && sueldoBruto <= 10000) {
    return (sueldoBruto * 21) / 100;
  } else if (sueldoBruto > 10000) {
    return (sueldoBruto * 30) / 100;
  } else {
    return 0;
  }
}

var app = angular.module('myForm', []);
app.controller('myCtrl', function ($scope) {
  console.log($scope);
  $scope.calcular = function () {
    let sueldo = $scope.horas * $scope.tarifahora;
    let descuento = Descuento(sueldo);
    let sueldoneto = sueldo - descuento;
    if (descuento == 0) {
      descuento = '';
    } else {
      descuento = `tiene un descuento de S/ ${descuento}`;
    }
    $scope.resultado = `El empleado de código ${$scope.codigo} tiene un sueldo básico de ${sueldo}, ${descuento} y recibirá un sueldo neto de ${sueldoneto}`;
  };
});
