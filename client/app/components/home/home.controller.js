class HomeController {
  constructor($mdDialog) {
    'ngInject';

    this.$mdDialog = $mdDialog;
  }

  openModal() {
    this.$mdDialog.show({
      template:`<modal-dial on-data="$ctrl.getData(data)"></modal-dial>`,
      clickOutsideToClose: false
    })
  }

  getData(data){
    this.data=data;
  }
}

export default HomeController;
