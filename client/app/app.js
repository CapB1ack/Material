import angular from 'angular';
import '../../node_modules/angular-material/angular-material.min.css';
import animate from 'angular-animate';
import aria from 'angular-aria';
import '../../bower_components/angular-messages/angular-messages.min';
import 'angular-resource';
import 'angular-material'

import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import Common from './common/';
import AppConfig from './app.config';

import 'normalize.css';

angular.module('app', [
    uiRouter,
    'ngMaterial',
    'ngResource',
    Components,
    Common
  ])


  .component('app', AppComponent)
  .config(AppConfig);
