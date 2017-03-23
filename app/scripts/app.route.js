(function() {
  'use strict';
  angular
    .module('angular-ui-quick-start')
    .config(function($stateProvider, $urlRouterProvider) {
      var previousState = function($state) {
        return {
          name: $state.current.name,
          params: $state.params,
          url: $state.href($state.current.name, $state.params)
        };
      };

      $urlRouterProvider
        .when('/', '/login')
        .when('', '/login')
        .otherwise('/404');
      $stateProvider
        .state('main', {
          url: '/app',
          templateUrl: 'views/main.html',
          abstract: true
        })
        .state('main.dashboard', {
          url: '/dashboard',
          templateUrl: 'views/dashboard.html',
          resolve: {
            permission: function(PermissionService) {
              return PermissionService.isLoggedIn();
            }
          }
        })
        .state('main.table-list', {
          url: '/list?pageSize&currentPage&name',
          templateUrl: 'views/table-list.html',
          controller: 'TableListController as vm',
          resolve: {
            permission: function(PermissionService) {
              return PermissionService.canAccessTableList();
            }
          }
        })
        .state('main.item-edit', {
          url: '/library/:id/edit',
          templateUrl: 'views/item-edit.html',
          controller: 'ItemEditController as vm',
          resolve: {
            PreviousState: previousState,
            permission: function(PermissionService) {
              return PermissionService.canEditItem();
            }
          }
        })
        .state('main.item-add', {
          url: '/add',
          templateUrl: 'views/item-add.html',
          controller: 'ItemAddController as vm',
          resolve: {
            PreviousState: previousState,
            permission: function(PermissionService) {
              return PermissionService.canCreateItem();
            }
          }
        })
        .state('main.profile', {
          url: '/profile',
          templateUrl: 'views/profile.html',
          controller: 'ProfileController as vm',
          resolve: {
            permission: function(PermissionService) {
              return PermissionService.isLoggedIn();
            }
          }
        })
        .state('login', {
          url: '/login?lang',
          templateUrl: 'views/login.html',
          controller: 'LoginController as vm'
        })
        .state('404', {
          url: '/404',
          templateUrl: 'views/404.html',
          resolve: {
            permission: function(PermissionService) {
              return PermissionService.isLoggedIn();
            }
          }
        })
        .state('403', {
          url: '/403',
          templateUrl: 'views/403.html',
          resolve: {
            permission: function(PermissionService) {
              return PermissionService.isLoggedIn();
            }
          }
        });
    });
}());
