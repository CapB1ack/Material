function gpaConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.gpa', {
            url:'/gpa',
            views:{
                "main@":{
                    component:'gpa'
                }
            }
        })
}

export default gpaConfig;