import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "../interface/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpAdminService {

  constructor(private http: HttpClient) { }

  loginAdmin(loginUser: LoginUser){
    return this.http.post("http://localhost:8080/admin/login", loginUser)
  }

  deletePost(id: number){
    return this.http.delete(`http://localhost:8080/admin/posts/${id}`)
  }

}
