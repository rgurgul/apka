import { ItemDetailsComponent } from './containers/item-details/item-details.component';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'workers', component: WorkersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
