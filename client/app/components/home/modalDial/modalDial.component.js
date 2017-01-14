import template from './modalDial.html';
import controller from './modalDial.controller';
import './modalDial.scss';

let modalDialComponent = {
  restrict: 'E',
  bindings: {
    onData: '&'
  },
  template,
  controller
};

export default modalDialComponent;
