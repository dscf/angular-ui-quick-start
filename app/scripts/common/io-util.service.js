(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('IOUtil', function() {
      return {
        saveFile: saveFile,
        bufferarrayToJson: bufferarrayToJson
      };

      function bufferarrayToJson(data) {
        return JSON.parse(String.fromCharCode.apply(null, new Uint8Array(data)));
      }

      function saveFile(data, fileName) {
        var blob = new Blob([data], { type: 'application/octet-stream' });
        saveAs(blob, fileName);
      }
    });
}());
