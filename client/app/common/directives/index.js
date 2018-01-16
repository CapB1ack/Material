import angular from 'angular';
import diceRotate from './diceRotate.directive';
import inputValidate from './validate.directive';

let commonDirectivesModule = angular.module('app.common.directives', [])
    .directive('diceRotate', diceRotate)
    .directive('inputValidate', inputValidate)
    .name;

export default commonDirectivesModule;
