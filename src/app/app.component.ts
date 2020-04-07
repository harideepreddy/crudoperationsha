import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//my task start

posts :any={};

  private url = "http://localhost:8080/practiceday1/add1?username=harideep&password=1234";
  
constructor(private http: Http){
             http.get(this.url)
               .subscribe(response => {
                 this.posts = response.json();
                //  this.data = JSON.stringify(this.posts);
               })
}

//my task end
// posts :any[];
//   private url = "https://jsonplaceholder.typicode.com/posts";
// constructor(private http: Http){
//              http.get(this.url)
//                .subscribe(response => {
//                  this.posts = response.json();
//                })
// }
// public createPost(temp){
//     let post: any = {title: temp.value}
//     this.http.post(this.url,JSON.stringify(post))
//     .subscribe(response =>{
//       post.id = response.json().id;
//       this.posts.splice(0,0,post)
//       console.log(response.json());
//     })
// }
// public updateInfo(post){
//        this.http.patch(this.url + '/' + post.id,JSON.stringify(post))
//        .subscribe(response => {
//          console.log(response);
//        })
// }
// public deleteInfo(post){
//       this.http.delete(this.url + '/' + post.id)
//       .subscribe(response =>{
//          let index = this.posts.indexOf(post);
//          this.posts.splice(index,1);
//       })
// }
}
