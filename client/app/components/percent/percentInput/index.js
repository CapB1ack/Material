import angular from 'angular';
import uiRouter from 'angular-ui-router';
import percentInputComponent from './percentInput.component';

let percentInputModule = angular.module('percentInput', [
  uiRouter
])

.component('percentInput', percentInputComponent)

.name;

export default percentInputModule;
