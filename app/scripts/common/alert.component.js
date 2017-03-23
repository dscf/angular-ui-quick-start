(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .component('ssAlert', {
      templateUrl: 'views/alert.component.html',
      controller: AlertComponentController
    });
  function AlertComponentController(ErrorHandler) {
    var vm = this;
    angular.extend(vm, {
      alerts: ErrorHandler.getAlerts(),
      closeAlert: closeAlert
    });
    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    }
  }
}());
