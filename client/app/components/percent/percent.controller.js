class PercentController {
    constructor($timeout) {
        'ngInject';

        this.data = [
            {"Name": "Item 1", "Percent": 0},
            {"Name": "Item 2", "Percent": 0},
            {"Name": "Item 3", "Percent": 0},
            {"Name": "Item 4", "Percent": 0},
            {"Name": "Item 5", "Percent": 0},
            {"Name": "Item 6", "Percent": 0}];
        this.checkSummary();
        this.$timeout = $timeout;
        this.old = angular.copy(this.data);
        this.amount = void 0;
        this.total = void 0;
    }

    sliderDown(index) {
        this.amount = this.data[index]['Percent'];
    }


    slider(index) {
        let delta = this.data[index]['Percent'] - (this.amount === void 0 ? this.old[index]['Percent'] : this.amount);
        delta = Math.round(delta * 100) / 100;
        // console.log(delta, this.data[index]['Percent'], this.amount);
        if (delta < 0) {
            this.smaller(index, delta)
        } else {
            this.bigger(index, delta)
        }
        this.data.map(el => el['Percent'] = Math.round(el['Percent'] * 100) / 100);
        this.data.map(el => {
            if (el['Percent'] < 0) {
                el['Percent'] = 0
            } else if (el['Percent'] > 100) {
                el['Percent'] = 100
            }
        });
        this.total = this.data.reduce((sum, cur) => sum += cur['Percent'], 0);
        if ((this.data[index]['Percent'] + 100 - this.total) > 0) {
            this.data[index]['Percent'] += 100 - this.total;
            this.total = 100;
        }
        if (this.data.some(el => el['Percent'] === 100)) {
            this.data.map(el => {
                el['Percent'] = el['Percent'] === 100 ? 100 : 0
            })
        }

    }

    checkInput (elem){
        console.log('check', elem);
        if (elem.value.length > 4) {
            elem.value = elem.value.slice(0,4);
        }
    }
    smaller(index, delta) {
        const smallerVal = Math.min(...this.data.filter((_, i) => i !== index).map(e => e['Percent']));
        const indexSmallest = this.data.findIndex(e => e['Percent'] === smallerVal);
        this.data[indexSmallest]['Percent'] += Math.abs(delta);
        this.amount += delta;
    }

    bigger(index, delta) {
        const biggestVal = Math.max(...this.data.filter((_, i) => i !== index).map(e => e['Percent']));
        const indexBiggest = this.data.findIndex(e => e['Percent'] === biggestVal);
        this.data[indexBiggest]['Percent'] -= delta;
        if (this.data[indexBiggest]['Percent'] < 0) {
            const am = -this.data[indexBiggest]['Percent'];
            this.data[indexBiggest]['Percent'] = 0;
            const distributeAmount = (unreleatedAmount, index) => {
                if (unreleatedAmount < 0.001) {return}
                const val = Math.max(...this.data.filter((_, i) => i !== index).map(e => e['Percent']));
                const indVal = this.data.findIndex(e => e['Percent'] === val);
                this.data[indVal]['Percent'] -= unreleatedAmount;
                if (this.data[indVal]['Percent'] < 0) {
                    unreleatedAmount = -this.data[indVal]['Percent'];
                    this.data[indVal]['Percent'] = 0;
                    distributeAmount(unreleatedAmount, index)
                }
            };
            distributeAmount(am, index);
        }
        this.amount += delta;
    }


    handleInputCh (e) {
        console.log('dddd', e);
    }

    handleMouseUp(index) {
        this.old = angular.copy(this.data);
        this.amount = this.data[index]['Percent']
    }

    checkSummary() {
        let delta = 100 - this.data.reduce((sum, cur) => sum += cur['Percent'], 0);
        if (delta < 0) {
            const biggestVal = Math.max(...this.data.map(e => e['Percent']));
            const indexBiggest = this.data.findIndex(e => e['Percent'] === biggestVal);
            this.data[indexBiggest]['Percent'] += delta
        }
        let i = 0;
        while (delta > 0) {
            let elDelta = 100 - this.data[i]['Percent'];
            while (elDelta > 0) {
                this.data[i]['Percent']++;
                elDelta--;
                delta--;
                if (delta === 0) {
                    return
                }
            }
            i++;
        }
    }
}

export default PercentController;
