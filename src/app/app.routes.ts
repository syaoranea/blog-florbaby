import { Routes } from '@angular/router';
import { PainelAdminComponent } from './modules/painel-admin/view/painel-admin.component';
import { BlogComponent } from './modules/blog/view/blog.component';
import { LoginComponent } from './modules/login/views/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {path: 'blog', component: BlogComponent},
  {path: 'admin', component: PainelAdminComponent},
  {path: 'login', component: LoginComponent},

];
