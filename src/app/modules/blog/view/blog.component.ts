import { Component } from '@angular/core';
import { CategoriasComponent } from '../components/categorias/categorias.component';
import { MaisVistosPostsComponent } from '../components/mais-vistos-posts/mais-vistos-posts.component';
import { TagsComponent } from '../components/tags/tags.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { ArquivoComponent } from '../components/arquivo/arquivo.component';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CategoriasComponent, MaisVistosPostsComponent, TagsComponent, GalleryComponent, ArquivoComponent, HeaderComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
