(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('PermissionService', PermissionService);

  function PermissionService($q) {
    var OK = 200, NOT_FOUND = 404, UNAUTHORIZED = 401, FORBIDDEN = 403;
    return {
      UNAUTHORIZED: UNAUTHORIZED,
      FORBIDDEN: FORBIDDEN,
      NOT_FOUND: NOT_FOUND,
      isLoggedIn: isLoggedIn,
      canAccessTableList: canAccessTableList,
      canCreateItem: canCreateItem,
      canEditItem: canEditItem
    };

    function isLoggedIn() {
      var defer = $q.defer();
      defer.resolve(OK);
      return defer.promise;
    }

    function canAccessTableList() {
      var defer = $q.defer();
      defer.resolve();
      return defer.promise;
    }

    function canCreateItem() {
      return true;
    }

    function canEditItem() {
      return true;
    }
  }
}());
