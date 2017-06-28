class GpaController {
    constructor(DataService) {
        'ngInject';
        this.DataService = DataService;
    }

    calcAvgGpa(){
        console.log('before:', this.data)
        const calcClassGra =  _class => _class.reduce((pr, cur) => ({gpa: +pr.gpa + +cur.gpa}), {gpa:0}).gpa / _class.length;
        this.totalGPA = this.data.reduce((r, c)=> r + +calcClassGra(c.childes), 0) / this.data.length
    }

    $onInit() {
        this.DataService.API().query({type: 'classes.json', id: ''}).$promise
            .then(responce => {this.data = responce; this.selectedClass = 0; this.calcAvgGpa()},
                error => console.log('error:', error)
            )
    }

    deleteGrade(index){
        this.data.splice(index, 1);
        this.calcAvgGpa();
    }

    addGrade(){
        if(this.data.findIndex(e=> e.grade === '') !== -1) return;
        this.data.push({
            "grade": "",
            "childes":[
            ]
        })
    }

    addStudent(){
        this.data[this.selectedClass].childes.push(this.newStudent);
        this.newStudent = { name: '', gpa: ''};
        this.calcAvgGpa();
    }

    removeStudent(index){
        console.log('remove index', index)
        this.data[this.selectedClass].childes.splice(index, 1);
        this.calcAvgGpa();
    }
}

export default GpaController;
