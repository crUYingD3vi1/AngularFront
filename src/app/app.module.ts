import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms"



import { AppComponent } from './app.component';
import { MainView} from "./index.component";
import { AuthView} from "./auth.component";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: "", component: MainView},
      {path: "auth", component: AuthView}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
