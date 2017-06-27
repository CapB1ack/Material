import template from './dice.html';
import controller from './dice.controller';
import './dice.scss';

let diceComponent = {
    restrict: 'E',
    bindings: {num: '<'},
    template,
    controller
};

export default diceComponent;
