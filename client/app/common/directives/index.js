import angular from 'angular';
import diceRotate from './diceRotate.directive';

let commonDirectivesModule = angular.module('app.common.directives', [])
    .directive('diceRotate', diceRotate)
    .name;

export default commonDirectivesModule;
