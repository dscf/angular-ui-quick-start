(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .directive('ssSrefActive', function($state) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          //get the attrs value
          updateClass(attrs.ssSrefActive);
          var offFn = scope.$on('$stateChangeSuccess', function() {
            updateClass(attrs.ssSrefActive);
          });
          scope.$on('$destroy', function() {
            offFn();
          });

          function updateClass(url) {
            if (!!~$state.current.url.indexOf(url)) {
              //current url is considered as active
              element.addClass('active');
            } else {
              element.removeClass('active');
            }
          }
        }
      };
    });
}());
