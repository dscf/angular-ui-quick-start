(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .directive('ssLoginBackground', function() {
      return {
        restrict: 'A',
        link: function(scope, element) {
          //randomly change the background image
          var random, style;
          random = Math.floor(Math.random() * 3) + 1;
          style = element.css('background').replace(/(.*)\d(\.jpg.*)/, '$1' + random + '$2');
          element.css('background', style);
        }
      };
    });
}());
