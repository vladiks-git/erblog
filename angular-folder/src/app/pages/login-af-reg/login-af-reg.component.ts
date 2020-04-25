import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginUser, User} from "../../interfaces/interfaces";
import {Router} from "@angular/router";
import {HttpService} from "../../service/http.service";

@Component({
  selector: 'app-login-af-reg',
  templateUrl: './login-af-reg.component.html',
  styleUrls: ['./login-af-reg.component.scss']
})

export class LoginAfRegComponent implements OnInit{

  form: FormGroup

  constructor(
    private auth: HttpService,
    private router: Router
  ) {
  }

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
    const user: LoginUser = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.auth.login().subscribe((resp) => {
      console.log(resp)
      if (resp == true){
        this.form.reset()
        this.router.navigate([''])
      } else {
        this.router.navigate([''])
      }
    })
  }
}
