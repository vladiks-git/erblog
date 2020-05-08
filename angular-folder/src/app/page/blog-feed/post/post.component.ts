import { Component, OnInit } from '@angular/core';
import {Post} from "../../../interface/interfaces";
import {HttpService} from "../../../service/http.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  allPosts: Post [] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAllPosts().subscribe(resp =>{
      this.allPosts = resp
      this.allPosts.reverse()
    })
  }

}
