import { core } from "@angular/compiler";
import {Component} from "@angular/core";
import { StudentListComponent } from "./student-list/student-list.component";



@Component({
    //template:"<h1>hello this is my project<h1>",
    templateUrl:"app.component.html",
    selector:"app-root",
    imports:[StudentListComponent]
    
  })

  
export class AppComponent{
    name:string="miri";
    age:number=18;
   

}
