import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { IndexComponent } from './index/index.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TagsComponent } from './tags/tags.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PostagensComponent } from './postagens/postagens.component';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "ecommerce",
    component: EcommerceComponent
  },
  {
    path: "postagens",
    component: PostagensComponent
  },
  {
    path: "categorias",
    component: CategoriasComponent
  },
  {
    path: "galeria",
    component: GaleriaComponent
  },
  {
    path: "tags",
    component: TagsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
