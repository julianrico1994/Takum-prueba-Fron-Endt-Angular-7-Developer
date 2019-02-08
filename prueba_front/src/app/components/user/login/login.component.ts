import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  private user = {
    email: '',
    password: ''
  };
  public isError = false;

  ngOnInit() {
  }

  onLogin(form: NgForm) { 
    if (form.valid) {
      } else {
      }
  }

}
