(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('LoginService', LoginService);

  function LoginService($q) {
    return {
      login: login
    };
    function login() {
      var defer = $q.defer();
      defer.resolve();
      return defer.promise;
    }
  }
}());
