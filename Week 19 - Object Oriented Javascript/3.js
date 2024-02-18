class Admission {
    constructor() {
      this.students = [];
    }
  
    assignCourse(student, course) {
      student.course = course; // Assign course to the student
      console.log(`${student.name} has enrolled in ${course}`);
    }
  }
  
  class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    
    showCourses() {
      if (this.course) {
        console.log(`${this.name}'s enrolled course: ${this.course}`);
      } else {
        console.log(`${this.name} is not enrolled in any courses.`);
      }
    }
  }
  
  const admissionOffice = new Admission();
  const student1 = new Student('Alice', 'alice@example.com');
  
  // Enroll the student and assign a course
  admissionOffice.assignCourse(student1, 'Science');
  
  // Display the enrolled course for the student
  student1.showCourses(); // Outputs: Alice's enrolled course: Science