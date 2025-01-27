import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ListStudentComponent } from "./list-student/list-student.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";

@NgModule({
    declarations:[AppComponent,ListStudentComponent,StudentDetailsComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}