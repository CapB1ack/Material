class PercentInputController {
    constructor($element) {
        'ngInject';

        this.localInput = void 0;
        this.localInput_old = void 0;
        this._$element = $element;
    }

    $onInit() {
        // console.log(this.index, this.data);
        this.localInput = this.data;
        this.localInput_old = this.data;
    }

    $onChanges({data}) {
        const {currentValue, previousValue} = data;
        this.localInput = currentValue;
        this.localInput_old = currentValue;
        // console.log(currentValue, previousValue);
    }
    handleArrowClick (dir) {
        if ((!dir && this.localInput -1 < 0) || (dir && this.localInput + 1 > 10000)) {return}
        this.onUpdate({
            index: this.index,
            value: dir ? this.localInput + 1 : this.localInput - 1
        })
    }
    handleArrowClickInt (dir) {
        if ((!dir && this.localInput -100 < 0) || (dir && this.localInput + 100 > 10000)) {return}
        this.onUpdate({
            index: this.index,
            value: dir ? this.localInput + 100 : this.localInput - 100
        })
    }

    hanldeLocalChange() {
        const rawValue = `${this._$element[0].querySelector('input').value}`.replace(',', '.');
        if (rawValue.includes('.')) {
            const [int, dec] = `${rawValue}`.split('.');
            if (dec.length > 2) {
                this.localInput = this.localInput_old;
                return
            }
        }
        if (isNaN(this.localInput) || this.localInput > 10000) {
            this.localInput = this.localInput_old
        }
        else {
            this.localInput_old = this.localInput;
            this.onUpdate({
                index: this.index,
                value: this.localInput
            })
        }
    }
}

export default PercentInputController;
