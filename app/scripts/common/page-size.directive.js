(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .directive('ssPageSize', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/page-size.directive.html',
        scope: {
          currentSize: '=',
          changeSize: '&onSizeChange'
        },
        link: function(scope, element) {
          var currentSelected = element.find('button.btn-primary');
          if (currentSelected.text() !== scope.currentSize) {
            //set the page size according to state param
            element.find('button').each(function() {
              if ($(this).text() === scope.currentSize) {
                $(this).removeClass('btn-default').addClass('btn-primary');
                currentSelected.removeClass('btn-primary').addClass('btn-default');
              }
            });
          }

          //change the style when click the button
          element.find('button').on('click', function() {
            element.find('button.btn-primary').removeClass('btn-primary').addClass('btn-default');
            $(this).addClass('btn-primary');
          });
        }
      };
    });
}());
