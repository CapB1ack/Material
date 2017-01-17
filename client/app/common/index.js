import angular from 'angular';
import commonServicesModule from './services/';

let commonModule = angular.module('app.common', [
  commonServicesModule,
])

.name;

export default commonModule;
