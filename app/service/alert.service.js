angular.module('pdApp')
    .service('AlertService', AlertService);

function AlertService(toastr) {

    this.success = success;
    this.error = error;
    this.info = info;
    this.warning = warning;

    function success(mensagem, titulo) {
        titulo = titulo || 'Ok';
        toastr.success(mensagem, titulo);
    }

    function error(mensagem,titulo) {
        titulo = titulo || 'Erro';
        toastr.error(mensagem, titulo);
    }

    function info(mensagem, titulo) {
        titulo = titulo || 'Info';
        toastr.info(mensagem, titulo);
    }

    function warning(mensagem,titulo) {
        titulo = titulo || 'Atençã';
        toastr.warning(mensagem, titulo);
    }
}