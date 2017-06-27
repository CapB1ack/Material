import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import dice from './dice/';
import homeConfig from './home.config';


let homeModule = angular.module('home', [
    uiRouter,
    dice
])


    .component('home', homeComponent)
    .config(homeConfig)
    .name;

export default homeModule;
