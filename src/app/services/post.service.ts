import { Injectable } from '@angular/core';
import { Post } from '../models/post.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  post: Post[] = [
    {
      id: '1',
      name: 'Post 1',
      description: 'Description 1'
    },
    {
      id: '2',
      name: 'Post 2',
      description: 'Description 2'
    },
    
  ];

  getPosts():Observable<Post[]> {
    return of(this.post);
  }
}
