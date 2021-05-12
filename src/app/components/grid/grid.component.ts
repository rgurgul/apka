import { ItemModel } from './../../utils/models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() data: any[];
  @Input() columnsSettings: any[];
  @Output() gridEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onAction(action, id) {
    this.gridEvent.emit({ action, id });
  }

}
