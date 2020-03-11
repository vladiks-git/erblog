import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  saveUser(user: User){
    return this.http.post<User>("http://localhost:8080/registration",user)
  }

  getAllUsers(){
    return this.http.get<User[]>("http://localhost:8080/users")
  }
}
