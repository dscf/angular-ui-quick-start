(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .factory('TableListService', TableListService);

  function TableListService($q) {
    return {
      list: list,
      loadById: loadById,
      save: save,
      saveNew: saveNew,
      remove: remove
    };

    function remove() {
      var defer = $q.defer();
      defer.resolve();
      return defer.promise;
    }

    function list() {
      var defer = $q.defer(), date = new Date();
      defer.resolve({
        data: {
          list: [
            {
              id: 1,
              column1: 'test',
              column2: 'test',
              column3: 'test',
              name: 'foo',
              createdBy: 'John',
              updatedDate: date
            },
            {
              id: 2,
              column1: 'test',
              column2: 'test',
              column3: 'test',
              name: 'foo',
              createdBy: 'John',
              updatedDate: date
            },
            {
              id: 3,
              column1: 'test',
              column2: 'test',
              column3: 'test',
              name: 'foo',
              createdBy: 'John',
              updatedDate: date
            },
            {
              id: 4,
              column1: 'test',
              column2: 'test',
              column3: 'test',
              name: 'foo',
              createdBy: 'John',
              updatedDate: date
            },
            {
              id: 5,
              column1: 'test',
              column2: 'test',
              column3: 'test',
              name: 'foo',
              createdBy: 'John',
              updatedDate: date
            }
          ],
          total: 50
        }
      });
      return defer.promise;
    }

    function loadById() {
      var defer = $q.defer();
      defer.resolve({
        data: {
          id: 1,
          property1: '1',
          property2: '1',
          name: 'foo',
          createdBy: 'John',
          updatedDate: new Date()
        }
      });
      return defer.promise;
    }

    function save() {
      var defer = $q.defer();
      defer.resolve();
      return defer.promise;
    }

    function saveNew() {
      var defer = $q.defer();
      defer.resolve();
      return defer.promise;
    }
  }
}());
