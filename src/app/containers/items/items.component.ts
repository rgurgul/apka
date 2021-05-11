import { ItemModel } from './../../utils/models';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: ItemModel[];
  colSettings = [
    { key: 'title' },
    { key: 'price', type: 'input' },
    { key: 'imgSrc', type: 'image' },
    { type: 'button', text: 'remove' },
    { type: 'button', text: 'more' }
  ];

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemsService.fetch().subscribe((resp) => {
      this.items = resp.data;
    })
  }

  gridAction({ action, id }) {

    switch (action) {
      case 'more':
        this.router.navigate(['items', id]);
        break;

      default:
        break;
    }

  }

}
