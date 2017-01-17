class DataService {

    constructor($resource) {
        'ngInject';
        this.$resource = $resource;
    }

    API() {
        //return this.$resource('http://0.0.0.0:3000/api/:type/:id',
        return this.$resource('/api/:type/:id',
            {type: '@type',id: '@id'},
            {
                update: {method: 'PUT', cache: false, isArray: false}
            });
    }
}


export default DataService;
