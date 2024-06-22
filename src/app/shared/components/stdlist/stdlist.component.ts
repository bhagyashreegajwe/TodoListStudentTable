import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/std.interface';

@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.scss']
})
export class StdlistComponent implements OnInit {

  @Input() getStdTable !: Array<Istd>
  constructor() { }

  ngOnInit(): void {
  }

}
