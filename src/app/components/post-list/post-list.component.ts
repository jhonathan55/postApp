import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Post } from '../../models/post.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadPosts, removePost } from '../../store/post.actions';
// import { selectPosts } from '../../store/post.list';
import { PostService } from '../../services/post.service';
import { selectFilteredPosts } from '../../store/post.list';
import { addIcons } from 'ionicons';
import { trashOutline} from 'ionicons/icons';
import { AlertController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  standalone: true,
  imports:[MaterialModule]
})
export class PostListComponent  implements OnInit {
  private postSvc=inject(PostService);
  posts$!: Observable<Post[]>;
  private store=inject(Store);
  private alertController = inject(AlertController);
  constructor() { 
    addIcons({ trashOutline });
  }

  ngOnInit() {
    // Cargar posts iniciales desde el servicio
    this.postSvc.getPosts().subscribe(posts => {
      this.store.dispatch(loadPosts({ posts }));
    });

    // Suscribirse al estado de NgRx para mostrar los posts
    this.posts$ = this.store.select(selectFilteredPosts);
  }

  async deletePost(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este post?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          cssClass: 'alert-button-delete',
          handler: () => {
            this.store.dispatch(removePost({ id }));
          },
        },
      ],
    });

    await alert.present();
  }
}
