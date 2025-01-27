import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { ListStudentComponent } from "./list-student/list-student.component";

@NgModule({
    declarations:[AppComponent,ListStudentComponent],
    imports:[BrowserModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}