import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../../service/http.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Post} from "../../../interface/interfaces";

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  constructor(private httpService: HttpService, private activeRouter: ActivatedRoute) { }

  post: Post

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params: Params) =>{
      this.httpService.getPostById(params.id).subscribe(resp =>{
       this.post = resp
     })
    })
  }

}
