import angular from 'angular';
import '../../node_modules/angular-material/angular-material.min.css';
import animate from 'angular-animate';
import aria from 'angular-aria';
import '../../bower_components/angular-messages/angular-messages.min';
import 'angular-material'

import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    'ngMaterial',
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
