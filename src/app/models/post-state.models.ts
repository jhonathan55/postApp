import { Post } from "./post.models";

export interface PostState {
    posts: Post[];
    filter: string;
  }
  
  export const initialState: PostState = {
    posts: [],
    filter: ''
  };
