import { CORSInterceptor } from './utils/http.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { GridComponent } from './components/grid/grid.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ItemDetailsComponent } from './containers/item-details/item-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    WorkersComponent,
    GridComponent,
    SearchComponent,
    ItemDetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CORSInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
