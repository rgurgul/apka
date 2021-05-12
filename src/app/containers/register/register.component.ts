import { Api } from './../../utils/api';
import { CustomValidators } from './../../utils/custom-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor() {

    //this.getData();
    //this.getDataAsync();

  }
  async getDataAsync() {
    const resp = await fetch(Api.DATA_ITEMS)
    debugger;
  }
  getData() {
    const promise:Promise<any> = fetch(Api.DATA_ITEMS)
    debugger;
    promise.then((resp)=>{
      console.log('b');
    })
    console.log('a');
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w{4,8}$/)
      ]),
      birthDate: new FormControl(null, [
        Validators.required,
        CustomValidators.dateShouldBePassed
      ]),
      hobbies: new FormGroup({
        tv: new FormControl(null),
        netflix: new FormControl(null),
        yt: new FormControl(null)
      }, [
        CustomValidators.atLeastOneShouldBeSelected
      ])
    })
  }

}
