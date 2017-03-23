'use strict';

describe('Title service test', function() {
  var titleService, rootScope, timeout, document;
  beforeEach(module('angular-ui-quick-start'));

  beforeEach(
    inject(function(TitleService, $rootScope, $timeout, $document) {
      titleService = TitleService;
      rootScope = $rootScope;
      timeout = $timeout;
      document = $document;
    })
  );

  it('should return default value', function() {
    expect(titleService.getTitle()).toBe('Angular UI Quick Start');
  });

  it('should update title', function() {
    spyOn(titleService, 'updateTitle');
    rootScope.$emit('$viewContentLoaded');
    timeout(function() {
      expect(titleService.updateTitle).toHaveBeenCalled();
    }, 300);
  });

  it('should return title', function() {
    var header = angular.element('<div class="page-header"><h3>foo</h3></div>');
    header.appendTo(document.find('body'));
    titleService.updateTitle();
    expect(titleService.getTitle()).toBe('foo - Angular UI Quick Start');
    header.remove();
  });

  it('should update title with default', function() {
    titleService.updateTitle();
    expect(titleService.getTitle()).toBe('Angular UI Quick Start');
  });
});
