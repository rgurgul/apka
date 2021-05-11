import { ItemModel, ItemsFiltersModel } from './../../utils/models';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

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

  filters: BehaviorSubject<ItemsFiltersModel> = new BehaviorSubject({
    itemsPerPage: 5,
    currentPage: 1
  });

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.filters.subscribe((value) => {
      this.fetchItems();
    })
  }

  updateFilters(ev) {
    this.filters.next({
      ...this.filters.value,
      ...ev
    })
  }

  private fetchItems() {
    this.itemsService.fetch(this.filters.value)
      .pipe(
        tap((resp) => console.log(resp)),
        map((resp) => resp.data)
      )
      .subscribe((data: ItemModel[]) => this.items = data);
  }

  gridAction({ action, id }) {

    switch (action) {
      case 'more':
        this.router.navigate(['items', id]);
        break;
      case 'remove':
        this.itemsService.remove(id).subscribe((resp) => {
          debugger;
        })
        break;

      default:
        break;
    }

  }

}
