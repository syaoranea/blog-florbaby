import { Component } from '@angular/core';
import { CriarTagComponent } from "../criar-tag/criar-tag.component";
import { APIService, DeleteTagsInput } from '../../../../API.service';
import { LoadingService } from '../../../../shared/services/loading.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-listar-tag',
  standalone: true,
  imports: [CriarTagComponent, CommonModule, LoadingComponent],
  templateUrl: './listar-tag.component.html',
  styleUrl: './listar-tag.component.scss'
})
export class ListarTagComponent {
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
    this.api.ListTags().then((res)=> {
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
    this.api.GetTags(id).then((res)=>{
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

  onDelete(id: DeleteTagsInput){
    this.loadingService.show();
    const idd = {
      id: id
    }
    console.log(idd);
    this.api.DeleteTags(idd as unknown as DeleteTagsInput);
    this.loadingService.hide();
    this.golist();
  }
}
