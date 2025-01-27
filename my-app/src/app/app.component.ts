import { core } from "@angular/compiler";
import {Component} from "@angular/core";
import {ListStudentComponent} from './list-student/list-student.component'
import { StudentDetailsComponent } from "./student-details/student-details.component";


@Component({
    templateUrl:"app.component.html",
    selector:"app-root",
    imports:[ListStudentComponent]
    
  })

  
export class AppComponent{
    nameStudent:string="Yehudit";
    lastNameStudent:string="Swimmer"; 
}
