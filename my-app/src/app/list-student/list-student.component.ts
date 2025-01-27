import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
@Component({
  selector: 'list-student',
  imports: [CommonModule,StudentDetailsComponent],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  students = [
    { name: 'שירה כהן', age: 20, course: 'מדעי המחשב', passed: true },
    { name: 'נועה לוי', age: 21, course: 'מתמטיקה', passed: false },
    { name: 'דניאל ישראלי', age: 22, course: 'פיזיקה', passed: true },
    { name: 'איילת פרידמן', age: 23, course: 'כימיה', passed: false }
  ];

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
  selectedStudent: any = null;

  addStudent(name: string, age: number, course: string) {
    this.students.push({
      name,
      age,
      course,
      passed: false
    });
  }

  selectStudent(student: any) {
    this.selectedStudent = student;
  }
}
