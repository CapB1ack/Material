function percentConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.percent', {
            url:'/percent',
            views:{
                "main@":{
                    component:'percent'
                }
            }
        })
}

export default percentConfig;