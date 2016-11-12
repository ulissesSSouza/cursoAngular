angular.module('pdApp')
    .controller('CadastroCarroController', CadastroCarroController);

function CadastroCarroController($scope,AlertService,$filter) {
    $scope.entidade = {};
    $scope.listaCarros = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;

    function salvar() {
        if($scope.carroForm.$invalid){
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
}