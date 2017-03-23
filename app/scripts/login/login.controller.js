(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .controller('LoginController', LoginController);

  function LoginController($state, LoginService, ErrorHandler) {
    var vm;
    vm = this;

    bootstrap();

    function bootstrap() {
      angular.extend(vm, {
        login: login
      });
    }

    function login() {
      ErrorHandler.clearAlerts();
      if (!vm.userName) {
        vm.form.userName.$setDirty();
      }
      if (!vm.password) {
        vm.form.password.$setDirty();
      }
      if (vm.form.$invalid) {
        return;
      }
      LoginService.login(vm.userName, vm.password)
        .then(function() {
          $state.go('main.dashboard');
        }).catch(ErrorHandler.handleError);
    }
  }
}());
