import { Api } from './../utils/api';
import { HttpClient } from '@angular/common/http';
import { HttpServiceModel } from './../utils/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersService implements HttpServiceModel {

  constructor(
    private http: HttpClient
  ) { }

  fetch(filters?: { [key: string]: any; }): Observable<any> {
    return this.http.get(Api.DATA_WORKERS)
  }
  get(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  add(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  update(item: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
