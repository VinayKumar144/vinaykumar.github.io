import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../../services/login-service.service'

//ClientForm: FormGroup;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  ClientForm: any = FormGroup;
  isAuth:any;
  constructor(private router: Router, private loginS: LoginServiceService, public form: FormBuilder) { }

  ngOnInit() {
    this.ClientForm = this.form.group({
      username: ['', []],
      password: ['', []],
    });
  }

  redirectTo = (formData: { value: any; }) => {
    const reqBody = formData.value
    this.loginS.isLogin(reqBody).subscribe((resData: any) => {
      const { data, statuscode,token } = resData
      if (statuscode == 200) {
        localStorage.setItem("isAuth", data[0].Session);
        localStorage.setItem("isSession", token);
        this.router.navigate([''], {});
      } else {
        this.isAuth = true
      }
    });
  }
}