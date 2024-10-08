import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/API.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { BlogService } from '../../service/blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mais-vistos-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mais-vistos-posts.component.html',
  styleUrl: './mais-vistos-posts.component.css'
})
export class MaisVistosPostsComponent {
  @Input() destaque: any[] = [];
  constructor(
    private api: APIService,
    private loadingService: LoadingService,
    private router: Router,
    private service: BlogService
  ) {  }

  ngOnInit(): void {

  }



  goToCategoria(value: string){
    this.service.setCategoria(value);
    const categoria = value.replace(/\s+/g, '-');
    this.router.navigate(['/categoria', categoria])
  }

  goToPostagem(postagem: any){
    this.service.setId(postagem.blog);
    this.service.setPostagem(postagem);
    const titulo = postagem.title.replace(/\s+/g, '-');
    console.log(titulo);
    this.router.navigate(['/postagem', titulo]);
  }

}
