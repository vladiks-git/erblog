import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../../service/http-service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../interfaces/interfaces";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  username: string;
  password: string
  formRegistration: FormGroup
  constructor(private httpServiceService: HttpServiceService,
              private router: Router) { }

  ngOnInit() {
    this.formRegistration = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  saveUser() {
    if(this.username.trim() && this.password.trim()){
      const newUser: User = {
        username: this.username,
        password: this.password
      }
      this.httpServiceService.saveUser(newUser).subscribe(()=>{

      })
    }
  }
}
