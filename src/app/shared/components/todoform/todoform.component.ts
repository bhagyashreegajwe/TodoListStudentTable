import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('todoform') todoform!: NgForm
  @Output() postToDoItem : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  toDoAdd(){
    if(this.todoform.valid){
      let newToDoElement = this.todoform.value
      this.postToDoItem.emit(newToDoElement)
      this.todoform.reset()
    }
  }
}
