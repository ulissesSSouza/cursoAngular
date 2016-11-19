angular.module('pdApp')
    .controller('CadastroBairroController', CadastroBairroController);

CadastroBairroController.$inject = ['$scope', 'AlertService'];

function CadastroBairroController($scope, AlertService) {
    $scope.entidade = {};
    $scope.listaBairros = [];


    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome Bairro', field: 'nomeBairro'},
            {name: 'Cidade', field: 'cidadeBairro'},
            {name: 'Estado', field: 'estadoBairro'},
            {
                name: 'Editar', field: 'editar',
                cellTemplate: 'app/template/grid/cell-template-editar.html',
                width: 60
            },
            {
                name: 'Excluir', field: 'excluir',
                cellTemplate: 'app/template/grid/cell-template-excluir.html',
                width: 70
            },
            {
                name: 'Visualizar', field: 'visualizar',
                cellTemplate: 'app/template/grid/cell-template-visualizar.html',
                width: 100
            }
        ],
        data: 'listaBairros',
        enableColumnMenus: false
    };

    function salvar() {
        if ($scope.bairroForm.$invalid) {
            $scope.bairroForm.nomeBairro.$setTouched();
            $scope.bairroForm.cidadeBairro.$setTouched();
            $scope.bairroForm.estadoBairro.$setTouched();
            AlertService.error('Formulário inválido');
            return;
        }
        $scope.listaBairros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso');
        limpar();

    }


    function limpar() {
        $scope.entidade = {};
        $scope.bairroForm.$setUntouched();
        angular.element('#nomeBairro').focus();
    }

    function excluir(linha) {
        var index = $scope.listaBairros.indexOf(linha);
        $scope.listaBairros.splice(index, 1);
    }

    function editar(linha) {
        var index = $scope.listaBairros.indexOf(linha);

    }


}