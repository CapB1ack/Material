function diceRotate() {
    'ngInject';

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            let speed = 0.1;
            let scale = 1;
            let degrees = 0;
            const transformer = () => {
                let rScale = `scale(${scale})`;
                let r = `rotate(${degrees}deg)`;
                element.css({
                    '-moz-transform': `${r} ${rScale}`,
                    '-webkit-transform': `${r} ${rScale}`,
                    '-o-transform': `${r} ${rScale}`,
                    '-ms-transform': `${r} ${rScale}`,
                    'transition': `all linear ${speed}s`
                });
            };
            scope.$watch(attrs.speed, newSpeed => speed = newSpeed);
            scope.$watch(attrs.scale, newScale => {
                scale = newScale !== void 0 ? newScale : scale;
                transformer();
            });
            scope.$watch(attrs.degrees, newDegrees => {
                degrees = newDegrees !== void 0 ? newDegrees : degrees;
                transformer();
            });

        }
    }
}
export default diceRotate;