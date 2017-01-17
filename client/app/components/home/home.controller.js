import tpl from './modalDial/modalDial.html';
import ctrl from './modalDial/modalDial.controller';

class HomeController {
  constructor($mdDialog, DataService) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.DataService = DataService;
  }

  $onInit(){
    this.DataService.API().query({type:'sports.json', id:''}).$promise
      .then((responce) => { this.sports = responce },
        (error) => { console.log('error:', error) }
      )

  }

  openModal(ev) {
    this.$mdDialog.show({
      controller: () => {
        return this
      },
      controllerAs:'$ctrl',
      bindToController: true,
      template: `<modal-dial sports-data="$ctrl.sports" class="md-dialog-container" style="height: 100%"></modal-dial>`,
      clickOutsideToClose: false,
      parent: angular.element(document.body),
      autoWrap: false,
      fullscreen: true,
      targetEvent: ev

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
