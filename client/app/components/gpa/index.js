import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gpaComponent from './gpa.component';
import gpaConfig from './gpa.config';

let gpaModule = angular.module('gpa', [
  uiRouter
])

.component('gpa', gpaComponent)
.config(gpaConfig)
.name;

export default gpaModule;
