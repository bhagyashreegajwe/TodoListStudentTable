import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  @Input() getToDoList !: Array<Itodo>
  
  constructor() { }

  ngOnInit(): void {
  }
}
