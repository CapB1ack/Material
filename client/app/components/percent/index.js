import angular from 'angular';
import uiRouter from 'angular-ui-router';
import percentComponent from './percent.component';
import percentConfig from './percent.config';
import percentInput from './percentInput/'

let percentModule = angular.module('percent', [
    uiRouter,
    percentInput
])

    .component('percent', percentComponent)
    .config(percentConfig)
    .name;

export default percentModule;
