(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .controller('ItemAddController', ItemAddController);

  function ItemAddController($state, TableListService, PreviousState, toastr, $scope, blockUI,
                             ErrorHandler) {
    var vm, successfulMsg;

    vm = this;
    successfulMsg = ' created successfully';

    angular.extend(vm, {
      saveNew: saveNew,
      backToList: backToList,
      item: {
        fileId: null,
        property1: '1',
        property2: 1
      },
      sendingFile: sendingFile,
      uploadSuccessful: uploadSuccessful,
      uploadFailed: uploadFailed,
      removeFile: removeFile,
      dzConfig: {
        url: '/upload'
      }
    });

    function sendingFile(file, xhr, formData) {
      formData.append('fileName', vm.item.name);
    }

    function removeFile(file) {
      ErrorHandler.clearAlerts();
      if (file.accepted) {
        vm.form.fileId.$setDirty();
      }
      $scope.$digest();
    }

    function uploadSuccessful() {
      $scope.$digest();
    }

    function uploadFailed(file, error) {
      ErrorHandler.handleError(error);
      vm.form.fileId.$setDirty();
      $scope.$digest();
    }

    function saveNew() {
      blockUI.start();
      TableListService.saveNew().then(saveSuccessful, ErrorHandler.handleError);
    }

    function saveSuccessful() {
      blockUI.stop();
      toastr.success(vm.item.name + successfulMsg);
      backToList();
    }

    function backToList() {
      if (PreviousState.name !== '') {
        $state.go(PreviousState.name, PreviousState.params);
      } else {
        $state.go('main.table-list');
      }
    }
  }
}());
