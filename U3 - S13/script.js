// datos
//  if <= 300km = 250
//  if >300km & <= 1000km = 250 + 30 * cada kilometro
//  if > 1000 = 250 + (30 * cada kilometro recorrido despues de 300km) + (20 * cada kilometro recorrido despues de 1000)
//  21000 soles ( 300km hasta 1000km)
//  descuento de 10% si se paga más de 500 soles

let app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
  $scope.distance = 0;
  $scope.calcularTarifa = function () {
    if ($scope.distance <= 300) {
      return 250;
    } else if ($scope.distance <= 1000) {
      return 250 + 30 * ($scope.distance - 300);
    } else {
      return 250 + 30 * (1000 - 300) + 20 * ($scope.distance - 1000);
    }
  };
  $scope.descuento = function () {
    if ($scope.calcularTarifa() > 500) {
      return 0.1 * $scope.calcularTarifa();
    }
  };
});
