import { Component } from '@angular/core';
import { APIService, DeleteGaleriaInput } from '../../../../API.service';
import { LoadingService } from '../../../../shared/services/loading.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";
import { CriarCategoriasComponent } from "../criar-categorias/criar-categorias.component";
import { CriarGaleriaComponent } from "../criar-galeria/criar-galeria.component";

@Component({
  selector: 'app-listar-galeria',
  standalone: true,
  imports: [CommonModule, LoadingComponent, CriarCategoriasComponent, CriarGaleriaComponent],
  templateUrl: './listar-galeria.component.html',
  styleUrl: './listar-galeria.component.scss'
})
export class ListarGaleriaComponent {
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

  onEdit(id: string){
    this.loadingService.show();
    this.loading = true;
    this.api.GetGaleria(id).then((res)=>{
      this.page = 'edit';
      this.dataEdit = res;
      console.log( this.dataEdit );
      this.loading = false;
      this.loadingService.hide();
    }).catch((error)=>{
      console.log(error);
      this.loading = false;
      this.loadingService.hide();
    })
  }

  onDelete(id: DeleteGaleriaInput){
    this.loadingService.show();
    const idd = {
      id: id
    }
    console.log(idd);
    this.api.DeleteGaleria(idd as unknown as DeleteGaleriaInput);

    this.loadingService.hide();
    this.golist();
  }
}
