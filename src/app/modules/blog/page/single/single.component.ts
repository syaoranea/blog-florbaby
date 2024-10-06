import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../service/blog.service';
import { APIService } from 'src/app/API.service';
import { DatacustomPipe } from "../../components/datacustom.pipe";

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule, DatacustomPipe],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss'
})
export class SingleComponent {
  id?: string ;
  titulo: string | null= '';
  dataBlog: any = {}
  dataPostagem: any = {}
  loading = true;
  constructor(private activatedRoute: ActivatedRoute, private service: BlogService,private api: APIService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.titulo = params.get('id');
    });
    this.id = this.service.getId();

    console.log(this.id)
    setTimeout(() => {
      if(this.id){
        this.api.GetBlog(this.id).then(res=>{
      console.log(res);
      this.dataBlog = res
    }).catch(error=>{
      console.log(error)
    })
      }
    ; console.log(this.dataBlog)
    this.loading = false;
    }, 2000);

    this.dataPostagem = this.service.getPostagem()

  }
}
