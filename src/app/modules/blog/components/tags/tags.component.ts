import { Component } from '@angular/core';
import { APIService } from '../../../../API.service';
import { LoadingService } from '../../../../shared/services/loading.service';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  data: any[] = [];
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

    this.api.ListTags().then((res)=> {
      if (res.items) {
        console.log(res.items);
        this.data = res.items;  // Atribuir apenas a parte 'items' do resultado
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  goToCategoria(value: string){
    this.service.setCategoria(value);
    const categoria = value.replace(/\s+/g, '-');
    this.router.navigate(['/categoria', categoria])
  }
}
