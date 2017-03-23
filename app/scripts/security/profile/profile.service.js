(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('ProfileService', ProfileService);
  function ProfileService($q) {
    return {
      getUser: getUser,
      saveUser: saveUser,
      changePassword: changePassword,
    };
    function getUser() {
      var defer = $q.defer();
      defer.resolve({
        data: {
          firstName: 'John',
          lastName: 'Smith',
          email: 'john@test.com'
        }
      });
      return defer.promise;
    }

    function saveUser() {
      var defer = $q.defer();
      defer.resolve();
      return defer.promise;
    }

    function changePassword() {
      var defer = $q.defer();
      defer.resolve();
      return defer.promise;
    }
  }
}());
