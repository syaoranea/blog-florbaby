import { Component, OnInit } from '@angular/core';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-angular';

I18n.putVocabularies(translations);
I18n.setLanguage('pt');
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CriarPostagemComponent } from '../components/criar-postagem/criar-postagem.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { AuthService } from '../../../shared/services/auth.service';
import { CriarCategoriasComponent } from "../components/criar-categorias/criar-categorias.component";
import { CriarGaleriaComponent } from "../components/criar-galeria/criar-galeria.component";
import { CriarTagComponent } from "../components/criar-tag/criar-tag.component";



@Component({
  selector: 'app-painel-admin',
  standalone: true,
  imports: [
    HeaderComponent,
    AmplifyAuthenticatorModule,
    CriarPostagemComponent,
    CommonModule,
    CriarCategoriasComponent,
    CriarGaleriaComponent,
    CriarTagComponent
],
  templateUrl: './painel-admin.component.html',
  styleUrl: './painel-admin.component.css'
})

export class PainelAdminComponent implements OnInit{
  constructor(
    private auth: AuthService,
    public authenticator: AuthenticatorService,
    private router: Router
  ){}
  nome: any;
  pageActive = 'Dashboard';
  async ngOnInit(): Promise <void>{
    const session  = await this.auth.getCurrentUser();
    this.nome = session.username;
  }

  sigout() {
    this.authenticator.signOut();
    this.router.navigate(['/login'])
  }

  pageChange(page: string) {

    this.pageActive = page;
    console.log(this.pageActive);
  }

}
