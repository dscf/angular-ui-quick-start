'use strict';
describe('Title directives test', function() {
  var element, scope, compile, service, title;
  service = {
    getTitle: function() {
      return title;
    }
  };
  beforeEach(module('angular-ui-quick-start'));

  beforeEach(function() {
    module(function($provide) {
      $provide.value('TitleService', service);
    });
  });

  beforeEach(
    inject(function($rootScope, $compile) {
      compile = $compile;
      scope = $rootScope.$new();
      element = '<title ss-title>Angular UI Quick Start' +
        '' +
        '' +
        '</title>';
      element = $compile(element)(scope);
      scope.$digest();
    })
  );

  it('should get default title', function() {
    expect(element.text()).toBe('Angular UI Quick Start');
  });

  it('should change title when function returns new value', function() {
    title = 'foo';
    scope.$apply();
    expect(element.text()).toBe('foo');
  });
});
