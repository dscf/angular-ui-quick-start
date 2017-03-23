(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .controller('TableListController', TableListController);

  function TableListController(TableListService, $stateParams,
                                     $state, Confirm, toastr, blockUI,
                                     ErrorHandler) {
    //setup view model
    var vm, currentPage;
    vm = this;

    currentPage = $stateParams.currentPage || 1;
    angular.extend(vm, {
      pageSize: $stateParams.pageSize || 10,
      totalItems: 0,
      selectedItemId: undefined,
      filter: {
        name: $stateParams.name || undefined,
        users: getUsersFilter(),
        sortBy: $stateParams.sortBy || ''
      },
      changePageSize: changePageSize,
      pageChanged: pageChanged,
      remove: remove,
      updateSearch: updateSearch,
      getNumberOfActiveFilters: getNumberOfActiveFilters,
      clearFilter: clearFilter,
      canEdit: canEdit
    });

    bootstrap();

    //------ function definitions --------
    function bootstrap() {
      blockUI.start();
      TableListService.list(currentPage, vm.pageSize, vm.filter).then(handleBootstrapSuccess, ErrorHandler.handleError);
      vm.availableUsers = [{ name: 'John', email: 'john@test.com' }, { name: 'Mike', email: 'mike@test.com' }];
      vm.filterNumber = getNumberOfActiveFilters();
    }

    function getUsersFilter() {
      if ($stateParams.users) {
        if (typeof $stateParams.users === 'string') {
          return [$stateParams.users];
        } else if (angular.isArray($stateParams.users)) {
          return $stateParams.users;
        }
      } else {
        return [];
      }
    }

    function changePageSize(size) {
      vm.pageSize = size;
      pageChanged();
    }

    function pageChanged() {
      vm.selectedItemId = undefined;
      currentPage = vm.currentPage;
      blockUI.start();
      TableListService.list(vm.currentPage, vm.pageSize, vm.filter).then(updateList, ErrorHandler.handleError);
    }

    function reloadList() {
      pageChanged();
    }

    function getNumberOfActiveFilters() {
      var i = 0;
      for (var f in vm.filter) {
        var filter = vm.filter[f];
        if (angular.isArray(filter)) {
          if (filter.length > 0) {
            i++;
          }
        } else if (filter && filter !== '') {
          i++;
        }
      }
      return i;
    }

    function clearFilter() {
      for (var f in vm.filter) {
        vm.filter[f] = '';
      }
      updateSearch();
    }

    function updateSearch() {
      blockUI.start();
      vm.currentPage = 1;
      TableListService.list(vm.currentPage, vm.pageSize, vm.filter).then(updateList, ErrorHandler.handleError);
      vm.filterNumber = getNumberOfActiveFilters();
      vm.searchCollapsed = true;
    }

    function updateUrlParam() {
      var params = {};
      angular.extend(params, {
        currentPage: vm.currentPage,
        pageSize: vm.pageSize
      });

      if (vm.filter) {
        angular.extend(params, {
          name: vm.filter.name,
          url: vm.filter.url,
          scope: vm.filter.scope,
          source: vm.filter.source,
          users: vm.filter.users,
          sortBy: vm.filter.sortBy
        });
      }

      $state.go($state.current, params, {
        notify: false
      });
    }

    function handleBootstrapSuccess(res) {
      vm.currentPage = currentPage;
      updateList(res);
    }

    function updateList(res) {
      blockUI.stop();
      vm.list = res.data.list;
      vm.totalItems = res.data.total;
      updateUrlParam();
    }

    function remove(item) {
      if (!canEdit(item)) {
        return;
      }
      Confirm.open({
        message: 'Delete ' + item.name + ' ?',
        actionButton: 'Delete'
      }).result.then(function() {
        TableListService.remove(item.id).then(function() {
          toastr.success(item.name + ' has been deleted successfully');
          reloadList();
        }, ErrorHandler.handleError);
      });
    }

    function canEdit() {
      return true;
    }
  }
}());
