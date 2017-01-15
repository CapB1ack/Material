import tpl from './modalDial/modalDial.html';
import ctrl from './modalDial/modalDial.controller';

class HomeController {
  constructor($mdDialog) {
    'ngInject';

    this.$mdDialog = $mdDialog;
  }

  openModal() {
    this.$mdDialog.show({
      template: tpl,
      controller: ctrl,
      controllerAs:'$ctrl',
      bindToController: true,
      clickOutsideToClose: false,
      parent: angular.element(document.body),
      autoWrap: true

    })
      .then((answer) =>{
        this.status = 'В модальном окне выбрано: "' + answer + '".';
      }, () => {
        this.status = 'Диалог отменен.';
      });
  }

  getData(data){
    this.data=data;
  }
}

export default HomeController;
