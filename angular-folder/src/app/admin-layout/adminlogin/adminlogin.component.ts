import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginUser} from "../../interface/interfaces";
import {HttpAdminService} from "../http-admin.service";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  form: FormGroup;
  isLogin: boolean;

  constructor(private adminHttp: HttpAdminService, private router: Router) { }

  ngOnInit(): void {
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

    this.adminHttp.loginAdmin(loginUser).subscribe(resp => {
      if(resp === true){
        this.router.navigate(['/admin/posts'])
        console.log('АДМИН УСПЕШНО ЗАЛОГИНИЛСЯ')
      }else {
        this.isLogin = false;
      }
    })
  }

}
