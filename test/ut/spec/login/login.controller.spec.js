'use strict';

describe('Login Controller test', function() {
  var ctrl, scope, loginService, mockForm;

  beforeEach(module('angular-ui-quick-start'));

  beforeEach(function() {

    loginService = {
      login: function() {
      }
    };
    mockForm = {
      $invalid: false
    };

    module(function($provide) {
      $provide.value('LoginService', loginService);
    });
  });
  beforeEach(
    inject(function($controller, $rootScope, $state, $stateParams, $q) {
      var defer = $q.defer();
      defer.resolve({ data: { token: 1 } });
      spyOn(loginService, 'login').and.returnValue(defer.promise);
      scope = $rootScope.$new();
      ctrl = $controller('LoginController', {
        $scope: scope,
        $state: $state,
        $stateParams: $stateParams
      });
      ctrl.form = mockForm;
    })
  );

  it('should login', function() {
    ctrl.userName = 'john';
    ctrl.password = '123456';
    ctrl.login();
    expect(loginService.login).toHaveBeenCalledWith('john', '123456');
    scope.$digest();
  });
});
