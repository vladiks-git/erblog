import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from "../../../service/http.service";
import {Router} from "@angular/router";
import {LoginUser} from "../../../interfaces/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(
    private auth: HttpService,
    private router: Router
  ) {}

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    if (this.form.invalid){
      return
    }
    const loginUser: LoginUser = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    console.log(loginUser)

    this.auth.login(loginUser).subscribe(resp => {
      console.log(resp)
      if (resp == true){
        this.form.reset()
        this.router.navigate(['/page'])
      } else {
        this.router.navigate(['/error'])
        this.form.reset()
      }
    })
  }
}
