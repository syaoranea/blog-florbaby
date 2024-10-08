import { Component, Input } from '@angular/core';
import { APIService } from '../../../../API.service';
import { LoadingService } from '../../../../shared/services/loading.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BlogService } from '../../service/blog.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  @Input() data: any[] = [];
  loading = true;

  constructor(
    private api: APIService,
    private loadingService: LoadingService,
    private router: Router,
    private service: BlogService
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

  goToCategoria(value: string){
    this.service.setCategoria(value);
    const categoria = value.replace(/\s+/g, '-');
    this.router.navigate(['/categoria', categoria])
  }

}
