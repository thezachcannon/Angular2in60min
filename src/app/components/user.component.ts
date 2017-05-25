import { Component } from '@angular/core';
import {PostsService} from '../services/post.service';
@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  providers: [PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Zach Cannon';
    this.email = 'zcannon@dmp.com';
    this.address = {
      street: '114 Walnut Ave',
      city: 'Rogersville',
      state: 'MO'
    }
    this.hobbies = ['Sports', 'Video Games']
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {this.posts = posts});

  }

  toggleHobbies() {
    if (this.showHobbies) {
      this.showHobbies = false
    }
    else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby.value);
    hobby.value = '';
  }

  deleteHobby(index: number){
    this.hobbies.splice(index, 1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
interface Post {
  id: number;
  title: string;
  body: string;
}
