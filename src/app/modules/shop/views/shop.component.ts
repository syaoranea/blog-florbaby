import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { InstagramFeedComponent } from "../components/instagram-feed/instagram-feed.component";
import { APIService, ListPostagemsQuery } from 'src/app/API.service';
import { NavigationEnd, Router } from '@angular/router';
import { BlogService } from '../../blog/service/blog.service';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, InstagramFeedComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  dataBlog: any[] = [];
  dataBlogList: any[] = [];
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
        this.dataBlogList = res.items;
        this.dataBlog = this.dataBlogList.map(item => ({
          ...item,
          views: parseInt(item.views)
        })).sort((a, b) => b.views - a.views).slice(0, 3);

      }
    }).catch((error)=>{
      console.log(error);
    }).finally(()=>{
      this.loadingService.hide();
    })
  }
}
