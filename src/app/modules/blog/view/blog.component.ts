import { BlogService } from './../service/blog.service';
import { Component, Input } from '@angular/core';
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
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BlogRoutingModule } from '../blog-routing.module';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { LoadingService } from 'src/app/shared/services/loading.service';

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
    DatacustomPipe,
    RouterModule,
    LoadingComponent
],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  dataList: any[] = [];
  destaque: any[] = []

  constructor(
    private api: APIService,
    private route: Router,
    private service: BlogService,
    private gtmService: GoogleTagManagerService,
    private loadingService: LoadingService
  ) {  }

  ngOnInit(): void {
    this.golist();
    this.route.events.forEach(item => {
      if (item instanceof NavigationEnd) {
          const gtmTag = {
              event: 'page',
              pageName: item.url
          };

          this.gtmService.pushTag(gtmTag);
      }
  });
  }

  golist(){
    this.loadingService.show();
    this.api.ListPostagems().then((res: ListPostagemsQuery)=> {
      if (res && res.items) {
        console.log(res.items , 1);
        this.dataList = res.items;
        console.log(this.dataList);
        this.destaque = this.dataList.map(item => ({
          ...item,
          views: parseInt(item.views)
        })).sort((a, b) => b.views - a.views).slice(0, 5);

      }
    }).catch((error)=>{
      console.log(error);
    }).finally(()=>{
      this.loadingService.hide();
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
