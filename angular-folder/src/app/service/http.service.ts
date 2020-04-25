import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient) {}

  saveUser (user: User){
    return this.http.post<User>("http://localhost:8080/registration",user)
  }

 login(){
   return this.http.get("http://localhost:8080/login")
 }
}
