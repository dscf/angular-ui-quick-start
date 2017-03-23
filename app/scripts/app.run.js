(function() {
  'use strict';
  angular
    .module('angular-ui-quick-start')
    .run(function($rootScope, ErrorHandler, TitleService, $timeout, $state, PermissionService, blockUI, $uibModalStack) {
      $rootScope.$on('$stateChangeStart', function() {
        $uibModalStack.dismissAll();
        blockUI.stop();
        //clear error on state change
        ErrorHandler.clearAlerts();
      });

      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error === PermissionService.UNAUTHORIZED) {
          $state.go('login');
        } else if (error === PermissionService.FORBIDDEN) {
          $state.go('403');
        }
      });

      $rootScope.$on('$viewContentLoaded', function() {
        $timeout(TitleService.updateTitle, 200);
      });
    });
}());
