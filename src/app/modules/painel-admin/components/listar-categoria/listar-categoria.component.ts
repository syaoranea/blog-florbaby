import { Component } from '@angular/core';
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";
import { CriarCategoriasComponent } from "../criar-categorias/criar-categorias.component";
import { APIService, DeleteCategoriaInput } from '../../../../API.service';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../../../shared/services/loading.service';

@Component({
  selector: 'app-listar-categoria',
  standalone: true,
  imports: [LoadingComponent, CriarCategoriasComponent, CommonModule],
  templateUrl: './listar-categoria.component.html',
  styleUrl: './listar-categoria.component.scss'
})
export class ListarCategoriaComponent {
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
    this.api.ListCategorias().then((res)=> {
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
    this.api.GetCategoria(id).then((res)=>{
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

  onDelete(id: DeleteCategoriaInput){
    this.loadingService.show();
    const idd = {
      id: id
    }
    console.log(idd);
    this.api.DeleteCategoria(idd as unknown as DeleteCategoriaInput);
    this.loadingService.hide();
    this.golist();
  }
}



