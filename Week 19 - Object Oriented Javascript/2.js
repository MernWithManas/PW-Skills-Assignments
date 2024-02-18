class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    showCourses(){
        console.log(`${this.name}'s enrolled courses: ${course}`);
    }
}

class Admission extends Student{
    constructor(course){
        super();
        this.course = course;
    }

    enrollStudent(student){
        console.log(`${student.name} has been enrolled.`);
    }
    assignCourse(student, course){
        console.log(`${student.name} has enrolled in ${course}.`);
    }
}

const admissionOffice = new Admission();

const rollNo1 = new Student(`Manas`, `manas@pw.live`);
const rollNo2 = new Student(`Sanam`, `Sanam@pw.live`);

admissionOffice.enrollStudent(rollNo1);
admissionOffice.enrollStudent(rollNo2);

admissionOffice.assignCourse(rollNo1, `Full Stack Web Developement`);
admissionOffice.assignCourse(rollNo2, `Data Science Masters`);

rollNo1.showCourses();
rollNo2.showCourses();

admissionOffice.showEnrolledStudents();

// const admissionOffice = new admission();

// const RollNo1 = new student(`Manas`, `Manas@pw.live`);
// const RollNo2 = new student(`Sanam`, `Sanam@pw.live`);

// admissionOffice.enrollStudent(RollNo1);
// admissionOffice.enrollStudent(RollNo2);

// admissionOffice.assignCourse(RollNo1, `Full Stack Web Dev.`);
// admissionOffice.assignCourse(RollNo2, `Data Science Masters`);

// RollNo1.showCourses();
// RollNo2.showCourses();

// admissionOffice.showEnrolledStudents();