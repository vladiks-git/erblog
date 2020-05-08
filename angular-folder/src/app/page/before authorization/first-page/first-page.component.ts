import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginUser} from "../../../interface/interfaces";
import {HttpService} from "../../../service/http.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  form: FormGroup
  isLogin: boolean

  constructor(
    private auth: HttpService,
    private router: Router
  ) { }

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
        this.router.navigate(['/feed'])
      } else {
          this.isLogin = false
        this.form.reset()
      }
    })
  }

}
