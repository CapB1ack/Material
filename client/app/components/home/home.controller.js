class HomeController {
  constructor($mdDialog) {
    'ngInject';

    this.$mdDialog = $mdDialog;
  }

  openModal() {
    this.$mdDialog.show({
      template:`<modal-dial></modal-dial>`,
      clickOutsideToClose: false
    })
  }
}

export default HomeController;
