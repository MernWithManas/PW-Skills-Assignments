class college {
    constructor(student, course){
        this.student = student;
        this.course = course;
    }
}

class registration extends college {
    showCourse(student){
        console.log(`${student}'s course name: ${this.course}`);
    }
}

let gmCollege = new registration("Manas", "full stack");
gmCollege.showCourse("Manas");
