import angular from 'angular';
import Home from './home/home';
import gpaModule from './gpa/';
import percentModule from './percent/'

let componentModule = angular.module('app.components', [
    Home,
    gpaModule,
    percentModule
])
    .name;
export default componentModule;
