/**
 * A service for common confirmation dialog
 */
(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('Confirm', function($uibModal) {
      return {
        open: open
      };

      /**
       *
       * @param data {title:string, message:string, actionButton:string}
       * @returns modalInstance
       */
      function open(data) {
        return $uibModal.open(
          {
            templateUrl: 'views/confirm.service.html',
            controller: 'ConfirmController',
            controllerAs: 'vm',
            resolve: {
              data: {
                title: data.title,
                message: data.message,
                actionButton: data.actionButton,
                buttonType: data.buttonType,
              }
            }
          }
        );
      }
    })
    .controller('ConfirmController', ConfirmController);

  function ConfirmController($uibModalInstance, data) {
    var vm = this, buttonType;
    if (data.buttonType) {
      buttonType = 'btn-' + data.buttonType;
    } else {
      buttonType = 'btn-danger';
    }
    angular.extend(vm, {
      title: data.title,
      message: data.message,
      actionButton: data.actionButton || 'Ok',
      buttonType: buttonType,
      confirm: function() {
        $uibModalInstance.close();
      },
      cancel: function() {
        $uibModalInstance.dismiss();
      }
    });
  }
}());
