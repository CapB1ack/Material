/**
 * @ngdoc class
 * @name ModalDialController
 *
 * @description
 * controller for modal window wizard's activity.
 */

class ModalDialController {
  constructor($mdDialog, $mdMedia, DataService) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.DataService = DataService;
    this.$mdMedia = $mdMedia;
  }

  $onInit(){
      /**
       * description: Loading data for toolbar;
       * @data: Array[];
       */
    this.DataService.API().query({type:'toolbar.json', id:''}).$promise
      .then((responce) => { this.toolbars = responce },
        (error) => { console.log('error:', error) }
      )
  }

  cancel() {
    this.$mdDialog.cancel();
  };

  answer(answer) {
    this.$mdDialog.hide(answer);
  };
}

export default ModalDialController;
