import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoformComponent } from './shared/components/todoform/todoform.component';
import { TodolistComponent } from './shared/components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { StdformComponent } from './shared/components/stdform/stdform.component';
import { StdlistComponent } from './shared/components/stdlist/stdlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    StdformComponent,
    StdlistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
