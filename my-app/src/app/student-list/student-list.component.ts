import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-list',
  imports:[CommonModule],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
   students: Student[]=[{id:1,name:"yakov"},{id:2,name:"shulamit"}];

   DeleteStudent(student:Student){
      let studentToDelete=this.students.indexOf(student);
      this.students.splice(studentToDelete,1);
   }
  // constructor(students: Student []){
  //   this.students=students;
  // }
  
}

