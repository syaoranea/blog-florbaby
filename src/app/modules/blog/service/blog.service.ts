import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  id: string = '';
  dataPostagem: any[] = [];
  dataPost: any = {};
  categoria: string = '';
  constructor() { }

  getId(){
    return this.id;
  }

  setId(id: string){
    this.id = id;
  }

  getPostagem(){
    return this.dataPostagem
  }

  setPostagem(value: any[]){
    this.dataPostagem = value;
  }

  getCategoria(){
    return this.categoria;
  }

  setCategoria(value: string){
    this.categoria = value;
  }



}
