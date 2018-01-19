function inputValidate() {
    'ngInject';

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {

            //model -> view
            ngModel.$formatters.push(function(modelValue) {
                return modelValue / 100;
            });

            //view -> model
            ngModel.$parsers.push(function(viewValue) {
                viewValue = viewValue.replace(',', '.');
                return viewValue * 100;
            });
        }
    }
}

export default inputValidate;