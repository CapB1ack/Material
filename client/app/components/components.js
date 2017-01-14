import angular from 'angular';
import Home from './home/home';
import modalDialComponent from './home/modalDial/modalDial.component';

let componentModule = angular.module('app.components', [
  Home
])

.component('modalDial', modalDialComponent)
.name;

export default componentModule;
