angular.module('pdApp')
    .controller('CadastroCarroController', CadastroCarroController);

CadastroCarroController.$inject = ['$scope', 'AlertService', '$filter'];

function CadastroCarroController($scope, AlertService, $filter) {
    $scope.entidade = {};
    $scope.listaCarros = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome do Carro', field: 'nomeCarro'},
            {name: 'Cor', field: 'corCarro', width: 130},
            {
                name: 'Data de Lançamento', field: 'dataLancamento',
                cellTemplate: 'app/template/grid/cell-template-date.html',
                width: 150
            },
            {
                name: '', field: 'excluir',
                cellTemplate: 'app/template/grid/cell-template-excluir.html',
                width: 40
            }
        ],
        data: 'listaCarros',
        enableColumnMenus: false
    };

    function salvar() {
        if ($scope.carroForm.$invalid) {
            $scope.carroForm.nomeCarro.$setTouched();
            $scope.carroForm.corCarro.$setTouched();
            AlertService.error('Formulário inválido');
            return;
        }
        $scope.entidade.nomeCarro = $filter('maiusculo')($scope.entidade.nomeCarro);
        $scope.listaCarros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso');
        limpar();

    }

    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();
        angular.element('#nomeCarro').focus();
    }

    function excluir(linha) {
        var index = $scope.listaCarros.indexOf(linha);
        $scope.listaCarros.splice(index, 1);
    }
}