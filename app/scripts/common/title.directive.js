(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .directive('ssTitle', function(TitleService) {
      return {
        restrict: 'A',
        link: function(scope, element) {
          scope.$watch(TitleService.getTitle, function(n) {
            element.text(n);
          });
        }
      };
    });
}());
