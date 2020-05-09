import { Component, OnInit } from '@angular/core';
import {Post} from "../../interface/interfaces";
import {HttpService} from "../../service/http.service";
import {HttpAdminService} from "../http-admin.service";

@Component({
  selector: 'app-adminposts',
  templateUrl: './adminposts.component.html',
  styleUrls: ['./adminposts.component.css']
})
export class AdminpostsComponent implements OnInit {

  allPosts: Post [] = [];

  constructor(private httpService: HttpService,
              private adminHttp: HttpAdminService) { }

  ngOnInit() {
    this.httpService.getAllPosts().subscribe(resp =>{
      this.allPosts = resp
      this.allPosts.reverse()
    })
  }


  deletePost(id: number) {
    this.adminHttp.deletePost(id).subscribe((resp)=>{
      console.log(resp)
      this.httpService.getAllPosts().subscribe(resp=>{
        this.allPosts = resp
        this.allPosts.reverse()
      })
    })
  }
}
