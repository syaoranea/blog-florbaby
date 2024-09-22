import { Component } from '@angular/core';
import { CategoriasComponent } from '../components/categorias/categorias.component';
import { MaisVistosPostsComponent } from '../components/mais-vistos-posts/mais-vistos-posts.component';
import { TagsComponent } from '../components/tags/tags.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { ArquivoComponent } from '../components/arquivo/arquivo.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CategoriasComponent, MaisVistosPostsComponent, TagsComponent, GalleryComponent, ArquivoComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
