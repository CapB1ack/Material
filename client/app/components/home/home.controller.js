/**
 * @ngdoc class
 * @name HomeController
 *
 * @description
 * controller home component; using one-way data flow;
 */

class HomeController {
    constructor($mdDialog, DataService) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.DataService = DataService;
        this.rotateAngle = 0;


    }

    $onInit() {
        this.DataService.API().query({type: 'sports.json', id: ''}).$promise
            .then((responce) => {
                    this.sports = responce
                },
                (error) => {
                    console.log('error:', error)
                }
            )

    }

    addNew() {
        this.topDice = void 0;
        this.botDice = void 0;
        this.adding = true;

    }
    diceSelected(dice) {
        this.selectedDice = dice;
    }

    onSelectListDice(ev){
        console.log('select ev:', ev)
    }

    onSelectListDice(index) {
        if(this.selectedDice === void 0) return;
        this.selectedDice === 'top' ? this.topDice = index : this.botDice = index;
        this.selectedDice = void 0;
    }

    rotate(ang) {
        this.rotateAngle += ang;
        console.log(this.rotateAngle)
    };
}

export default HomeController;
