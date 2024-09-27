import { Component } from '@angular/core';
import { LoadingService } from '../../../../shared/services/loading.service';
import { APIService } from '../../../../API.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  data: any[] = [];
  dataEdit: any;
  loading = true;
  page: string= 'table';

  constructor(
    private api: APIService,
    private loadingService: LoadingService
  ) {  }

  ngOnInit(): void {
    this.golist();

  }

  golist(){
    this.loadingService.show();
    this.api.ListGalerias().then((res)=> {

      if (res.items) {
        console.log(res.items);
        this.data = res.items;  // Atribuir apenas a parte 'items' do resultado
      }
      this.loading = false;
      this.loadingService.hide();
    }).catch((error)=>{
      console.log(error)
      this.loading = false;
      this.loadingService.hide();
    })
  }
}
