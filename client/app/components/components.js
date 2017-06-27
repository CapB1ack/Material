import angular from 'angular';
import Home from './home/home';
import gpaModule from './gpa/'

let componentModule = angular.module('app.components', [
  Home,
    gpaModule
])

.name;

export default componentModule;
