import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'list-student',
  imports: [CommonModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  students = [
    { name: 'שירה כהן', age: 20, course: 'מדעי המחשב' },
    { name: 'נועה לוי', age: 21, course: 'מתמטיקה' },
    { name: 'דניאל ישראלי', age: 22, course: 'פיזיקה' },
    { name: 'איילת פרידמן', age: 23, course: 'כימיה' }
  ];

  removeStudent(index: number) {
    this.students.splice(index, 1);
  }
}
