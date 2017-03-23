(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .controller('ProfileController', ProfileController);
  function ProfileController(ProfileService, $uibModal, blockUI, ErrorHandler) {
    var vm = this;
    angular.extend(vm, {
      changeName: changeName,
      changePassword: changePassword
    });
    bootstrap();

    function bootstrap() {
      getUser();
    }

    function getUser() {
      blockUI.start();
      ProfileService.getUser().then(function(res) {
        blockUI.stop();
        vm.user = res.data;
      }).catch(ErrorHandler.handleError);
    }

    function changeName() {
      $uibModal.open({
        templateUrl: 'views/change-name-modal.html',
        resolve: {
          user: function() {
            return vm.user;
          }
        },
        controller: ChangeNameModalController,
        controllerAs: 'modal'
      });
    }

    function ChangeNameModalController($rootScope, $uibModalInstance, user, toastr) {
      var modal = this;
      angular.extend(modal, {
        user: user,
        save: function() {
          blockUI.start();
          ProfileService.saveUser(modal.user).then(function() {
            blockUI.stop();
            $uibModalInstance.close();
            toastr.success('Name updated successfully');
            $rootScope.$broadcast('user-changed', modal.user);
            getUser();
          }).catch(function(err) {
            toastr.error(err.message);
          });
        },
        close: function() {
          $uibModalInstance.close();
        }
      });
    }

    function changePassword() {
      $uibModal.open({
        templateUrl: 'views/change-password-modal.html',
        controller: ChangePasswordModalController,
        controllerAs: 'modal'
      });
    }

    function ChangePasswordModalController($uibModalInstance, toastr, PermissionService) {
      var modal = this;
      angular.extend(modal, {
        save: save,
        checkPassword: checkPassword,
        close: close
      });

      function checkPassword() {
        checkNewPassword();
      }

      function checkNewPassword() {
        modal.form.newPassword.$setValidity('different', modal.oldPassword !== modal.newPassword);
        modal.form.confirmPassword.$setValidity('match', modal.newPassword === modal.confirmPassword);
      }

      function close() {
        $uibModalInstance.close();
      }

      function save() {
        blockUI.start();
        ProfileService.changePassword({
          oldPassword: modal.oldPassword,
          newPassword: modal.newPassword
        }).then(function() {
          blockUI.stop();
          $uibModalInstance.close();
          toastr.success('Password updated successfully');
        }).catch(function(err) {
          blockUI.stop();
          if (err.status === PermissionService.UNAUTHORIZED) {
            toastr.error('Old password is incorrect');
          } else {
            toastr.error(err.message);
          }
        });
      }
    }
  }
}());
