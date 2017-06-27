function homeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.home', {
            url:'/home',
            views:{
                "main@":{
                    component:'home'
                }
            }
        })
}

export default homeConfig;