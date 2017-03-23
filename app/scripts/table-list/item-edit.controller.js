(function() {
  'use strict';
  angular.module('angular-ui-quick-start')
    .controller('ItemEditController', ItemEditController);

  function ItemEditController($state, $stateParams, TableListService, PreviousState, toastr, blockUI, ErrorHandler) {
    var vm, id, successfulMsg;

    vm = this;
    successfulMsg = ' edited successfully';
    id = $stateParams.id;

    angular.extend(vm, {
      save: save,
      backToList: backToList
    });

    bootstrap();

    //------------ function definitions ----------------
    function bootstrap() {
      if (id) {
        TableListService.loadById(id).then(function(res) {
          vm.item = res.data;
        }, ErrorHandler.handleError);
      }
    }

    function save() {
      blockUI.start();
      TableListService.save(
      ).then(saveSuccessful, ErrorHandler.handleError);
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
