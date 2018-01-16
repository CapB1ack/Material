class PercentController {
  constructor() {
    this.data = [
        {name:'xx', percent: 0},
        {name:'yy', percent: 0}
    ];
    this.data_copy = [
        {name:'xx', percent: 0},
        {name:'yy', percent: 0}
    ];
    this.handleChange = (e) => {
        this.data_copy[e].percent = this.data[e].percent;
    };

    this.handleChangeInput = (e) => {
      console.log(this.data_copy[e].percent);
      if (!this.data_copy[e].percent) {
          this.data_copy[e].percent = this.data[e].percent;
      } else {
          this.data[e].percent = this.data_copy[e].percent;
      }
    }
  }
}

export default PercentController;
