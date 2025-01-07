import { Post } from "../models/post.models";
import { createAction, props } from '@ngrx/store';


export const loadPosts = createAction('[Post] Load Posts', props<{ posts: Post[] }>());
export const addPost = createAction('[Post] Add', props<{ post: Post }>());
export const removePost = createAction('[Post] Remove', props<{ id: string }>());
export const setFilter = createAction('[Post] Set Filter', props<{ filter: string }>());