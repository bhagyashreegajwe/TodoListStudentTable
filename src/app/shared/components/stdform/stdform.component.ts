import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/std.interface';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('stdForm') stdForm!: NgForm
  @Output() postTable : EventEmitter<Istd> = new EventEmitter<Istd>()

  onClickAdd(){
    if(this.stdForm.valid){
      let newTableData = this.stdForm.value
      this.postTable.emit(newTableData)
      this.stdForm.reset()
    }
  }

}
