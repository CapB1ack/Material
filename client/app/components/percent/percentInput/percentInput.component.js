import template from './percentInput.html';
import controller from './percentInput.controller';
import './percentInput.scss';

let percentInputComponent = {
  restrict: 'E',
  bindings: {
    index: '<',
      data: '<',
      onUpdate: '&'
  },
  template,
  controller
};

export default percentInputComponent;
