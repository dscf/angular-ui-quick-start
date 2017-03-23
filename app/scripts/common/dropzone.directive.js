(function() {
  'use strict';
  angular.module('angular-ui-quick-start').directive('ssDropzone', function() {
    var config = {
      parallelUploads: 1,
      uploadMultiple: false,
      addRemoveLinks: true,
      createImageThumbnails: false,
      maxFiles: 1
    };

    return {
      restrict: 'E',
      template: '<div ng-transclude></div>',
      replace: true,
      transclude: true,
      scope: {
        config: '=',
        handlers: '=',
        acceptedFiles: '@'
      },
      link: function(scope, element) {
        var dropzone = new Dropzone(element[0], angular.extend(config, scope.config));
        if (scope.handlers) {
          Object.keys(scope.handlers).forEach(function(eventName) {
            dropzone.on(eventName, scope.handlers[eventName]);
          });
        }
        dropzone.options.acceptedFiles = scope.acceptedFiles;
        scope.dropzone = dropzone;
      }
    };
  });
}());
