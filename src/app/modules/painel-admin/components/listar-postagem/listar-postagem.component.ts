import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APIService, DeletePostagemInput, ListPostagemsQuery, Postagem } from '../../../../API.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';
import { CriarPostagemComponent } from "../criar-postagem/criar-postagem.component";
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";
import { LoadingService } from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-listar-postagem',
  standalone: true,
  imports: [CommonModule, CriarPostagemComponent, LoadingComponent],
  templateUrl: './listar-postagem.component.html',
  styleUrl: './listar-postagem.component.scss'
})
export class ListarPostagemComponent implements OnInit{

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
    this.api.ListPostagems().then((res)=> {
      this.page = 'table';
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

  onEdit(id: any){
    this.loadingService.show();
    this.loading = true;
    this.api.GetPostagem(id).then((res)=>{
      this.page = 'edit';
      this.dataEdit = res;
      this.loading = false;
      this.loadingService.hide();
    }).catch((error)=>{
      console.log(error);
      this.loading = false;
      this.loadingService.hide();
    })
  }

  onDelete(id: DeletePostagemInput){
    this.loadingService.show();
    const idd = {
      id: id
    }
    console.log(idd);
    this.api.DeletePostagem(idd as unknown as DeletePostagemInput);
    this.loadingService.hide();
    this.golist();
  }
}

