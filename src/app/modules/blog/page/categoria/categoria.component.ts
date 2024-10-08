import { categoria } from './../../../../API.service';
import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { APIService, ListPostagemsQuery } from 'src/app/API.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../service/blog.service';
import { DatacustomPipe } from "../../components/datacustom.pipe";
import { CategoriasComponent } from "../../components/categorias/categorias.component";
import { MaisVistosPostsComponent } from "../../components/mais-vistos-posts/mais-vistos-posts.component";
import { TagsComponent } from "../../components/tags/tags.component";
import { GalleryComponent } from "../../components/gallery/gallery.component";
import { ArquivoComponent } from "../../components/arquivo/arquivo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, DatacustomPipe, CategoriasComponent, MaisVistosPostsComponent, TagsComponent, GalleryComponent, ArquivoComponent, CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  dataList: any[] = [];
  categoria: string | null= '';

  constructor(
    private api: APIService,
    private route: Router,
    private service: BlogService,
    private activatedRoute: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
    });

    this.categoria = this.service.getCategoria();
    this.getCategoria(this.categoria);

  }

  getCategoria(categoria: string){
    console.log(categoria);
    this.api.ListPostagemsCategoria(categoria).then((res: ListPostagemsQuery)=> {
      if (res) {
        console.log(res.items , 1);
        this.dataList = res.items;
        console.log(this.dataList);
      }
    }).catch((error)=>{
      console.log(error);
    })
  }

  onGoToSingle(data: any) {
    this.service.setId(data.blog);
    this.service.setPostagem(data)
    const titulo = data.title.replace(/\s+/g, '-');
    console.log(titulo);
    this.route.navigate(['/postagem', titulo]);
  }
}
