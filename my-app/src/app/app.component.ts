import { core } from "@angular/compiler";
import {Component} from "@angular/core";
import {ListStudentComponent} from './list-student/list-student.component'


@Component({
    templateUrl:"app.component.html",
    selector:"app-root",
    imports:[ListStudentComponent]
    
  })

  
export class AppComponent{
    nameStudent:string="Yehudit";
    lastNameStudent:string="Swimmer"; 
}
