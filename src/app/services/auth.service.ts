import { Api } from './../utils/api';
import { HttpClient } from '@angular/common/http';
import { AuthServiceInterface, HttpResponseModel } from './../utils/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

  private _access: boolean;
  public get access(): boolean {
    return this._access;
  }

  constructor(
    private http: HttpClient
  ) {
    this.logged();
  }
  logged(): void {
    this.http.get(Api.AUTH_IS_LOGGED).subscribe((resp: HttpResponseModel) => {
      if(resp.error) {

      } else {
        this._access = true;
      }
    })
  }
  logIn(value: { username: any; password: any; }): void {
    this.http.post(Api.AUTH_LOGIN, value).subscribe((resp: HttpResponseModel) => {
      localStorage.setItem('token', resp.accessToken);
      this._access = true;
    })
  }
  logOut(): void {
    this._access = false;
    localStorage.removeItem('token');
  }
}
