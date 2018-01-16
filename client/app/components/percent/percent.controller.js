class PercentController {
    constructor() {
        'ngInject';

        this.data = [{"Name": "Item 1", "Percent": 0}, {"Name": "Item 2", "Percent": 0}, {
            "Name": "Item 3",
            "Percent": 0
        }];
        this.checkSummary();
        this.old = angular.copy(this.data);
        this.amount = void 0;
        this.total = void 0;
    }

    sliderDown (index) {
        this.amount = this.data[index]['Percent'];
    }

    slider (index) {
        const delta = this.data[index]['Percent'] - (this.amount === void 0 ? this.old[index]['Percent'] : this.amount);
        if(delta < 0) {
            this.smaller(index, delta)
        }
    }

    smaller (index, delta) {
        const smallerVal = Math.min(...this.data.filter((_, i)=> i !== index).map(e=> e['Percent']));
        const indexSmallest = this.data.findIndex(e=> e['Percent'] === smallerVal);
        this.data[indexSmallest]['Percent'] += Math.abs(delta);
        this.amount += delta;
        this.total = this.data.reduce((sum, cur) => sum += cur['Percent'], 0)
    }

    checkSummary() {
        let delta = 100 - this.data.reduce((sum, cur) => sum += cur['Percent'], 0);
        let i = 0;
        while (delta > 0) {
            const elDelta = 100 - this.data[i]['Percent'];
            this.data[i]['Percent'] += elDelta;
            delta -= elDelta;
            i++;
        }
    }
}

export default PercentController;
