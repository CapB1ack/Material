class ModalDialController {
  constructor($mdDialog, $mdMedia,$mdTheming, DataService) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.DataService = DataService;
    this.$mdMedia = $mdMedia;

    $mdTheming.generateTheme('altTheme');

    this.ActivityType = false;
    this.ActivityKind = false;
    this.ActivityKindSwitch = false;
    this.act_p = 1;
  }

  $onInit(){
    this.DataService.API().query({type:'toolbar.json', id:''}).$promise
      .then((responce) => { this.toolbars = responce },
        (error) => { console.log('error:', error) }
      )
  }

  sendData(data) {
    this.onData({data: data})
  }

  move(direction) {
    direction ? this.act_p++ : this.act_p--;

  }

  showActivityType(sport, categories, direction = undefined) {
    direction ? this.act_p++ : this.act_p--;
    this.sel_sport = sport;
    this.sel_cat = categories;
    this.ActivityType = true;
  }

  showActivityKind(item, direction = undefined) {
    direction ? this.act_p++ : this.act_p--;
    this.ActivityKind = true;
    this.sel_kind = item;
    console.log('-->>', this.sel_cat, '-', this.sel_sport,'-', this.sel_kind)
  }

  hide() {
    this.$mdDialog.hide();
  };

  cancel() {
    this.$mdDialog.cancel();
  };

  answer(answer) {
    this.$mdDialog.hide(answer);
  };
}

export default ModalDialController;
