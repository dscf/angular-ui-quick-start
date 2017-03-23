(function() {
  'use strict';
  angular
    .module('angular-ui-quick-start')
    .config(function(toastrConfig) {
      angular.extend(toastrConfig, {
        maxOpened: 1,
        newestOnTop: true,
        closeButton: true,
        positionClass: 'toast-top-center',
        timeOut: 2000,
        autoDismiss: true
      });
    })
    .config(function(blockUIConfig) {
      blockUIConfig.autoBlock = false;
      blockUIConfig.autoInjectBodyBlock = false;
      blockUIConfig.templateUrl = 'views/block-ui-template.html';
    })
    .config(function($uibModalProvider) {
      $uibModalProvider.options.animation = false;
    });
}());
