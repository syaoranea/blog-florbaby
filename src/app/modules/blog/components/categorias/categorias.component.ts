import { Component } from '@angular/core';
import { APIService } from '../../../../API.service';
import { LoadingService } from '../../../../shared/services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  data: any[] = [];
  loading = true;

  constructor(
    private api: APIService,
    private loadingService: LoadingService
  ) {  }

  ngOnInit(): void {


    this.golist();

  }

  golist(){
   this.loadingService.show();
    this.api.ListCategorias().then((res)=> {
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
