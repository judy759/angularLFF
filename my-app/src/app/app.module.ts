import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
//import { Student } from "./student.model";
import { StudentListComponent } from "./student-list/student-list.component";

@NgModule({
    declarations:[AppComponent,StudentListComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}