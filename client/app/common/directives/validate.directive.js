function inputValidate() {
    'ngInject';

    return {
        require: "?ngModel",
        scope: true,
        template: "<input ng-model='value' type='text' ng-change='onChange()'>",
        link: function(scope, element, attrs, ngModel){
            if (!ngModel) {
                console.log('return');
                return
            }
            scope.back = scope.value;

            scope.onChange = function(val, old){
                if (/^\d+([.,]\d{0,2})?$/.test(scope.value)) {
                    console.log('valid', scope.value, val, old);
                    scope.value = scope.value.replace(',', '.');
                    scope.back = scope.value
                    ngModel.$setViewValue(+scope.value);
                } else {
                    scope.value = scope.back
                    ngModel.$setViewValue(+scope.value);
                }
            };

            ngModel.$render = function(){
                console.log('$render', scope.value, ngModel.$modelValue);
                // ngModel.$modelValue = +ngModel.$modelValue.toFixed(2)
                scope.value = ngModel.$modelValue;
            };
        }
    }
}

export default inputValidate;