import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../modules/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.models';
import { Store } from '@ngrx/store';
import { addPost, setFilter } from '../store/post.actions';
import { PostListComponent } from '../components/post-list/post-list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [MaterialModule,PostListComponent],
})
export class HomePage implements OnInit,OnDestroy {
  postForm!: FormGroup;
  private store=inject(Store);

  constructor() {}

  private _subscription: Subscription = new Subscription();
  private _fb=inject(FormBuilder);
  
  ngOnInit(): void {
    this.postForm = this._fb.group({
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onSubmit() {
    const post: Post = { id: Date.now().toString(), ...this.postForm.value };
    console.log(post);
    this.store.dispatch(addPost({ post }));
    this.postForm.reset();
  }

  isValidField(field: string): string {
    const validatedField = this.postForm.get(field);
    return !validatedField?.valid && validatedField?.touched
      ? 'is-invalid'
      : validatedField?.touched
      ? 'is-valid'
      : '';
  }
  onSearch(event: any) {
    const searchTerm = event.target.value || '';
    this.store.dispatch(setFilter({ filter: searchTerm }));
  }


}
