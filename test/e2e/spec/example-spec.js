'use strict';
describe('login page', function() {
  it('tests login with wrong credentials', function() {
    browser.get('http://localhost:9000/index.html#/login');
    var loginButton = browser.findElement(by.tagName('button')),
      userName = browser.findElement(by.id('user-name')),
      password = browser.findElement(by.id('password'));
    userName.clear();
    userName.sendKeys('foo');
    password.clear();
    password.sendKeys('bar');
    loginButton.click();
    expect(browser.getLocationAbsUrl()).toBe('/app/dashboard');
  });
});
