import template from './modalDial.html';
import controller from './modalDial.controller';
import './modalDial.scss';

let modalDialComponent = {
  restrict: 'E',
  bindings: {
    sportsData: '<'
  },
  template,
  controller
};

export default modalDialComponent;
