(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .directive('ssScrollTop', function($document) {
      var offsetTop = 500;
      return {
        restrict: 'E',
        templateUrl: 'views/scroll-top.directive.html',
        link: function(scope, element) {
          var scrolling;
          scrolling = false;
          element.hide();

          $(window).scroll(function() {
            if (!scrolling) {
              if ($(window).scrollTop() > offsetTop) {
                element.show();
              } else {
                element.hide();
              }
            }
          });

          scope.top = function() {
            scrolling = true;
            element.hide();
            $document.duScrollTo(0, 0, 200).then(function() {
              scrolling = false;
            });
          };

          scope.$on('$destroy', function() {
            $(window).unbind('scroll');
          });
        }
      };
    });
}());
