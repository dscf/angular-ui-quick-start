'use strict';
describe('Scroll top directives test', function() {
  var element, scope, compile;

  beforeEach(module('angular-ui-quick-start'));

  beforeEach(
    inject(function($rootScope, $compile) {
      compile = $compile;
      scope = $rootScope.$new();
      element = '<ss-scroll-top></ss-scroll-top>';
      element = $compile(element)(scope);
      scope.$digest();
    })
  );

  it('should be invisible by default', function() {
    expect(element.css('display')).toEqual('none');
  });

  it('should be invisible after return to top', function() {
    element.show();
    expect(element.css('display')).toEqual('');
    scope.top();
    expect(element.css('display')).toEqual('none');
  });

  it('should unbind handler when destroy', function() {
    var foo = false;
    $(window).scroll(function() {
      foo = true;
    });
    $(window).scroll();
    expect(foo).toBe(true);
    foo = false;
    scope.$destroy();
    $(window).scroll();
    expect(foo).toBe(false);
  });
});
