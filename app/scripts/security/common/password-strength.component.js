(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .component('ssPwdStrength', {
      templateUrl: 'views/password-strength.component.html',
      bindings: {
        password: '<'
      },
      controller: function($scope) {
        var vm = this;
        $scope.$watch(function() {
          return vm.password;
        }, function(password) {
          var p = password, strength,
            strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            mediumRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

          if (strongRegex.test(p)) {
            strength = { value: 100, label: 'Strong', type: 'success' };
          } else if (mediumRegex.test(p)) {
            strength = { value: 66.6, label: 'Fair', type: 'warning' };
          } else {
            strength = { value: 33.3, label: 'Weak', type: 'danger' };
          }
          vm.strength = strength;
        });
      },
      controllerAs: 'vm'
    });
}());
