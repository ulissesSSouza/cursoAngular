angular.module('pdApp')
    .controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = 'Ulisses';
    $scope.ola = ola;


    function ola() {
        alert('Olá');
    }
}