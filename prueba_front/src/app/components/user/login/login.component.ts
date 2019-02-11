import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private dataApi: DataApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  public user = {
    email: '',
    password: ''
  };
  public isError = false;

  ngOnInit() {
    if (this.authService.getCurrentUser() === null) {
      return;
    } else {
      this.router.navigate(['list-products']);
    }
  }

  onLogin(form: NgForm) {
    if (form.valid) {
      return this.authService
        .loginuser(this.user.email, this.user.password)
        .subscribe(
          data => {
            console.log(data);
            if (data.succes) {
              this.authService.setUser(data.name);
              this.authService.setToken(data.id);
              this.isError = false;
              this.router.navigate(['list-products']);
              location.reload();
            } else {
              this.onIsError();
            }
          },
          error => this.onIsError()
        );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }
}
