function AppConfig($locationProvider, $mdThemingProvider) {
  'ngInject';
  $locationProvider.html5Mode(true).hashPrefix('!');
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple') // specify primary color, all
  // other color intentions will be inherited
  // from default
  $mdThemingProvider.alwaysWatchTheme(true);
}

export default AppConfig;
