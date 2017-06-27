import angular from 'angular';
import uiRouter from 'angular-ui-router';
import diceComponent from './dice.component';

let diceModule = angular.module('dice', [
  uiRouter
])

.component('dice', diceComponent)

.name;

export default diceModule;
