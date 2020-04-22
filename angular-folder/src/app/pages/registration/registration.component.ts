import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/interfaces";
import {HttpService} from "../../service/http.service";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string
  surname: string
  email: string
  password: string
  form: FormGroup

  constructor(private HttpService: HttpService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20)
      ]),
      surname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      /*confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        MyValidators.checkPassword
      ])*/
    })
  }

  saveUser(){

  }

  submit() {
    if (this.name.trim() &&
      this.surname.trim() &&
      this.email.trim() &&
      this.password.trim()
    ){
      const newUser: User = {
        username: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password
      }
      this.HttpService.saveUser(newUser).subscribe(()=>{
        console.log('New user: ' + newUser)
      })
    }
  }
}
