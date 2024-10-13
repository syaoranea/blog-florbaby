import { ContatoComponent } from './modules/contato/views/contato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

// Component
import { LayoutComponent } from './layouts/layout.component';
import { BlogComponent } from './modules/blog/view/blog.component';
import { SingleComponent } from './modules/blog/page/single/single.component';
import { CategoriaComponent } from './modules/blog/page/categoria/categoria.component';
import { SobreComponent } from './modules/sobre/view/sobre.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent,},
  { path: 'contato', component: ContatoComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'postagem/:id', component: SingleComponent },
  { path: 'categoria/:id', component: CategoriaComponent },
  { path: '', component: LayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'pages',loadChildren: () => import('./extraspages/extraspages.module').then(m => m.ExtraspagesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
