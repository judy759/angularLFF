import { core } from "@angular/compiler";
import {Component} from "@angular/core";



@Component({
    //template:"<h1>hello this is my project<h1>",
    templateUrl:"app.component.html",
    selector:"app-root"
  })

  
export class AppComponent{
    name:string="miri";
    age:number=18;
   

}
