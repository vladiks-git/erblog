import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../../service/http-service.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../interfaces/interfaces";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  formLogin: FormGroup

  constructor(private httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    if(this.username.trim() && this.password.trim()){
      const loginUser: User = {
        username: this.username,
        password: this.password
      }
      this.httpServiceService.login(loginUser).subscribe(resp=>{
        console.log(resp)
      })
    }
  }
}
