import angular from 'angular';
import commonServicesModule from './services/';
import commonDirectivesModule from './directives/';

let commonModule = angular.module('app.common', [
    commonServicesModule,
    commonDirectivesModule
])

    .name;

export default commonModule;
