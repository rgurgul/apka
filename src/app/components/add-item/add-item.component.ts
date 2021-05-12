import { ItemModel } from './../../utils/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Output() newItem = new EventEmitter();

  constructor(
    private modalService: NgbModal
  ) { }

  open(content) {
    this.modalService.open(content);
  }

  onSubmit(item: ItemModel) {
    this.newItem.emit(item);
    this.modalService.dismissAll();
  }

  ngOnInit(): void {
  }

}
