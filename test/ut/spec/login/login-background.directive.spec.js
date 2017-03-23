'use strict';
describe('Login background directive directives test', function() {
  var element, scope, compile;

  beforeEach(module('angular-ui-quick-start'));

  beforeEach(
    inject(function($rootScope, $compile) {
      compile = $compile;
      scope = $rootScope.$new();

      element = '<div ss-login-background style="background: url(image1.jpg)"></div>';
      element = $compile(element)(scope);
      scope.$digest();
    })
  );

  it('should get the background image', function() {
    var background = element.css('background');
    expect(background).not.toBe(undefined);
    expect(Number(background.match(/image(\d)\.jpg/)[1]));
  });

  it('should get random number ', function() {
    var background = element.css('background');
    expect(background.match(/image(\d)\.jpg/)).not.toBe(null);
  });
});
