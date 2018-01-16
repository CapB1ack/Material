import angular from 'angular';
import uiRouter from 'angular-ui-router';
import percentComponent from './percent.component';
import percentConfig from './percent.config';

let percentModule = angular.module('percent', [
    uiRouter
])

    .component('percent', percentComponent)
    .config(percentConfig)
    .name;

export default percentModule;
