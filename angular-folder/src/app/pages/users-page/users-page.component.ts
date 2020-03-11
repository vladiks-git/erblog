import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from "../../service/http-service.service";
import {User} from "../../interfaces/interfaces";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private HttpService: HttpServiceService) {}

  users: User[] = [];
  ngOnInit() {
    this.HttpService.getAllUsers().subscribe(resp =>{
      this.users = resp;
      console.log(resp)
    })
  }

}
