function AppConfig($locationProvider, $mdThemingProvider, $stateProvider) {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');

    $mdThemingProvider.definePalette('whitePalette', {
        '50': 'ffffff',
        '100': 'ffffff',
        '200': 'ffffff',
        '300': 'ffffff',
        '400': 'ffffff',
        '500': 'ffffff',
        '600': 'ffffff',
        '700': 'ffffff',
        '800': 'ffffff',
        '900': 'ffffff',
        'A100': 'ffffff',
        'A200': 'ffffff',
        'A400': 'ffffff',
        'A700': 'ffffff',
        'contrastDefaultColor': 'dark',
        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
        'contrastLightColors': undefined
    });

    $mdThemingProvider.definePalette('bluePalette', {
        '50': 'rgb(83, 130, 183)',
        '100': 'rgb(83, 130, 183)',
        '200': 'rgb(83, 130, 183)',
        '300': 'rgb(83, 130, 183)',
        '400': 'rgb(83, 130, 183)',
        '500': 'rgb(83, 130, 183)',
        '600': 'rgb(83, 130, 183)',
        '700': 'rgb(83, 130, 183)',
        '800': 'rgb(83, 130, 183)',
        '900': 'rgb(83, 130, 183)',
        'A100': 'rgb(83, 130, 183)',
        'A200': 'rgb(83, 130, 183)',
        'A400': 'rgb(83, 130, 183)',
        'A700': 'rgb(83, 130, 183)',
        'contrastDefaultColor': 'dark',
        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
        'contrastLightColors': undefined
    });

    $mdThemingProvider.theme('altTheme')
        .primaryPalette('whitePalette')
        .accentPalette('bluePalette');

    $mdThemingProvider.theme('primary')
        .primaryPalette('indigo')
        .accentPalette('purple');

    $mdThemingProvider.alwaysWatchTheme(true);

    $stateProvider
        .state('app', {
            url:'/testTask',
            component: 'app',
        })
}

export default AppConfig;
