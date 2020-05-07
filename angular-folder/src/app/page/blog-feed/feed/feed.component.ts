import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../interface/interfaces";
import {HttpService} from "../../../service/http.service";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  form: FormGroup;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(){
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
  }

  submit(){
    if (this.form.invalid){
      return
    }

    const post: Post = {
      title: this.form.value.title,
      text: this.form.value.text,
      author: this.form.value.author,
      /*date: new Date()*/
    }
    this.http.savePost(post).subscribe(resp =>{
      console.log(post)
    })
    this.router.navigate(['/feed/'])
  }
}
