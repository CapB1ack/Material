import angular from 'angular';

import DataService from './data.service';

let commonServicesModule = angular.module('app.common.services', [])
  .service('DataService', DataService)
  .name;

export default commonServicesModule;
