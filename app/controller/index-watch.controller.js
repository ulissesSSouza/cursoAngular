angular.module('pdApp')
    .controller('IndexWatchController', IndexWatchController);

IndexWatchController.$inject = ['$scope'];

function IndexWatchController($scope) {
    $scope.cor = '';
    $scope.styleDiv = {
        width: '150px',
        height: '150px'
    };

    $scope.$watch('cor', onWatchCor);
    $scope.disparaEvento = disparaEvento;

    function onWatchCor(valorNovo, valorAntigo) {
        if(valorNovo === valorAntigo){
            return;
        }

        $scope.styleDiv.backgroundColor = valorNovo;
    }

    function disparaEvento() {
        $scope.$emit('testeEnvioEvento',{valor:'Enviando evento'})
    }


}