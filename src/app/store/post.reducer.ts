import { createReducer, on } from '@ngrx/store';
import { initialState } from '../models/post-state.models';
import { addPost, loadPosts, removePost, setFilter } from './post.actions';

export const postReducer = createReducer(
    initialState,
    on(loadPosts, (state, { posts }) => ({
      ...state,
      posts: [...posts] // Reemplaza los posts con los cargados desde el servicio
    })),
    on(addPost, (state, { post }) => ({
      ...state,
      posts: [...state.posts, post]
    })),
    on(removePost, (state, { id }) => ({
      ...state,
      posts: state.posts.filter(post => post.id !== id)
    })),
    on(setFilter, (state, { filter }) => ({ ...state, filter }))
  );

  