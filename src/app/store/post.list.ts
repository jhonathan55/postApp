import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostState } from '../models/post-state.models';

// export const selectPostState = createFeatureSelector<PostState>('posts');

// export const selectPosts = createSelector(
//   selectPostState,
//   (state: PostState) => state.posts
// );

export const selectPostState = createFeatureSelector<PostState>('posts');

export const selectFilteredPosts = createSelector(
  selectPostState,
  (state: PostState) => {
    if (!state.filter) {
      return state.posts;
    }
    return state.posts.filter(post => 
      post.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  }
);