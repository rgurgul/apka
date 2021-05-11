import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { GridComponent } from './components/grid/grid.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { ItemDetailsComponent } from './containers/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent,
    GridComponent,
    SearchComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
