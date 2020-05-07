import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../../interface/interfaces";
import {HttpService} from "../../../service/http.service";

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
  isReg: boolean

  constructor(private httpService: HttpService, private router: Router) { }

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
      console.log(newUser)
      this.httpService.saveUser(newUser).subscribe((response)=>{
        if (response == null){
          this.isReg = true
        }
        if (response != null){
          this.isReg = false
        }
      })
    }
  }

}
