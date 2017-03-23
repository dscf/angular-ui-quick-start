(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('TitleService', function($document) {
      var title, baseTitle;
      baseTitle = 'Angular UI Quick Start';
      title = baseTitle;
      return {
        updateTitle: function() {
          //get header
          var text = $document.find('div.page-header h3').text();
          text = text.trim().replace(/\n\s+/, ' ');
          if (text && text !== '') {
            title = text + ' - ' + baseTitle;
          } else {
            title = baseTitle;
          }
        },
        getTitle: function() {
          return title;
        }
      };
    });
}());
