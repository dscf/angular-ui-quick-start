(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .directive('ssAuthCheckEnable', AuthCheck);
  function AuthCheck(PermissionService) {
    return {
      restrict: 'A',
      scope: true,
      link: link
    };

    function link(scope, element, attrs) {
      var fn = attrs.ssAuthCheckEnable;
      if (fn && PermissionService[fn] && angular.isFunction(PermissionService[fn])) {
        PermissionService[fn]().catch(function() {
          element.prop('disabled', true);
          element.addClass('disabled');
        });
      }
    }
  }
}());
