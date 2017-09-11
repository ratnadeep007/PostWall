import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  posts: Post[];
  post: Post;
  name: string;
  email: string;
  data: string;

  constructor(private postService: PostService) { }

  addPost(){
    const newPost ={
      name: this.name,
      email: this.email,
      data: this.data
    }
    this.postService.addPost(newPost)
    .subscribe(post => {
      this.posts.push(post);
      this.postService.getPosts()
      .subscribe(posts =>
      this.posts = posts);
    });
  }

  deletePost(id:any){
    var posts = this.posts;
    this.postService.deletePost(id)
    .subscribe(data=>{
      if(data.n==1)
      {
        for(var i=0; i < posts.length; i++){
          if(posts[i]._id == id){
            posts.splice(i, 1);
          }
        }
      }
    });
  }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe(posts =>
    this.posts = posts);
  }

}
