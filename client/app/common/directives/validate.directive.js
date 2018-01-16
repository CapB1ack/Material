function inputValidate() {
    'ngInject';

    return {
        require: 'ngModel',
        link: function (scope, elem, attr, ngModel) {

            //For DOM -> model validation
            ngModel.$parsers.unshift(function (value) {
                console.log(value);
                var valid = /^\d+([.,]\d{0,2})?$/.test(value);
                ngModel.$setValidity('inputValidate', valid);
                return valid ? value : undefined;
            });

            //For model -> DOM validation
            // ngModel.$formatters.unshift(function (value) {
            //     ngModel.$setValidity('inputValidate', blacklist.indexOf(value) === -1);
            //     return value;
            // });
        }
    }
}

export default inputValidate;