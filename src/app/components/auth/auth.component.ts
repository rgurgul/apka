import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logIn(form: NgForm) {
    if (form.valid) {
      this.authService.logIn(form.value);
    } else {
      console.warn('form invalid');
    }
  }

  logOut(){
    this.authService.logOut();
  }

}
