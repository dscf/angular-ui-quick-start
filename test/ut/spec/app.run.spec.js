'use strict';
describe('App run test', function() {
  var scope, state;

  beforeEach(module('angular-ui-quick-start'));

  beforeEach(
    inject(function($rootScope, $state, $q, PermissionService) {
      scope = $rootScope;
      state = $state;
      var defer = $q.defer();
      defer.resolve();
      spyOn(PermissionService, 'isLoggedIn').and.returnValue(defer.promise);
    })
  );

  it('should go to login if session is unauthorized', function() {
    scope.$emit('$stateChangeError', 1, 2, 3, 4, 401);
    scope.$digest();
    expect(state.current.name).toBe('login');
  });

  it('should go to 403 if session is forbidden', function() {
    scope.$emit('$stateChangeError', 1, 2, 3, 4, 403);
    scope.$digest();
    expect(state.current.name).toBe('403');
  });
});
