import { Component } from '@angular/core';
import { CategoriasComponent } from '../components/categorias/categorias.component';
import { MaisVistosPostsComponent } from '../components/mais-vistos-posts/mais-vistos-posts.component';
import { TagsComponent } from '../components/tags/tags.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { ArquivoComponent } from '../components/arquivo/arquivo.component';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { APIService, ListPostagemsQuery } from 'src/app/API.service';
import { DatacustomPipe } from '../components/datacustom.pipe';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CategoriasComponent,
    MaisVistosPostsComponent,
    TagsComponent,
    GalleryComponent,
    ArquivoComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    DatacustomPipe
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  dataList: any[] = [];


  constructor(
    private api: APIService,
  ) {  }

  ngOnInit(): void {
    this.golist();
  }

  golist(){
    this.api.ListPostagems().then((res: ListPostagemsQuery)=> {
      if (res) {
        console.log(res.items , 1);
        this.dataList = res.items;
        console.log(this.dataList)  // Atribuir apenas a parte 'items' do resultado
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

}
