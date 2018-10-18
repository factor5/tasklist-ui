import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@NgModule({
  declarations: [AppComponent, TasksComponent],
  imports: [BrowserModule, HttpModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
