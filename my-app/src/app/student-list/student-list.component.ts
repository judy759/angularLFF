import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from "../student-details/student-details.component";

@Component({
  selector: 'student-list',
  imports: [CommonModule, StudentDetailsComponent],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
   students: Student[]=[{id:1,name:"Yakov",grade:100},{id:2,name:"Shulamit",grade:80},{id:3,name:"Shoshana",grade:95}];
   
   selectedStudent: Student | undefined;


   DeleteStudent(student:Student){
      let studentToDelete=this.students.indexOf(student);
      this.students.splice(studentToDelete,1);
   }
   showDetails(studentToShow: Student){
      this.selectedStudent=studentToShow;
   }
   showNewStudent(){
    this.selectedStudent=new Student(3,"new student name");
    console.log("show new student");
    
   }
   addNewStudentToList(studentToAdd:Student){
    this.students.push(studentToAdd);
    console.log("addNewStudentToList")
    //this.selectedStudent=null;
    this.selectedStudent = undefined;
   }
  // constructor(students: Student []){
  //   this.students=students;
  // }
  
}

