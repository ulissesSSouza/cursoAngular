angular.module('pdApp')
    .controller('CadastroCarroController', CadastroCarroController);

CadastroCarroController.$inject = ['$scope', 'AlertService','$rootScope','$state'];

function CadastroCarroController($scope, AlertService,$rootScope,$state) {
    var index = 0;

    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;
    $scope.visualizar = visualizar;

    iniciar();

    function iniciar(){
        if(!$rootScope.listaBairros){
            $rootScope.listaBairros = [];
        }
        $scope.listaBairros = $rootScope.listaBairros;
    }

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

        if($scope.entidade.id == null) {
            $scope.entidade.id = index++;
            $scope.listaBairros.push($scope.entidade);
        }
        else {
            for(i in $scope.listaBairros) {
                if($scope.listaBairros[i].id == $scope.entidade.id) {
                    $scope.listaBairros[i] = $scope.entidade;
                }
            }
        }
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
        $scope.entidade = angular.copy(linha);
    }

    function visualizar(linha) {
        $rootScope.entidade = angular.copy(linha);
        $state.go('visualizarBairro');
    }


}