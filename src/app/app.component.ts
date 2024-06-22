import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Itodo } from './shared/models/todo.interface';
import { Istd } from './shared/models/std.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDoTask';

  todoArr: Array<Itodo> = [
    // {
    //   todoitem : 'HTML'
    // }
  ]

  stdArr : Array<Istd> = [
    // {
    //   fname: "Joe",
    //   lname: "Doe",
    //   contact: "1234567890",
    //   email: "joedoe@gmail.com"
    // }
  ]

  postTableData(data: Istd){
    this.stdArr.push(data)
  }

  postToDo(todo: Itodo){
    this.todoArr.unshift(todo)
  }
}
