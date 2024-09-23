import { Component, OnInit } from '@angular/core';
/* import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { AuthService } from '../../../../shared/services/auth.service';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-angular';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CriarPostagemComponent } from "../../components/criar-postagem/criar-postagem.component";

I18n.putVocabularies(translations);
I18n.setLanguage('pt'); */
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CriarPostagemComponent } from '../components/criar-postagem/criar-postagem.component';


// Amplify.configure(awsmobile);
@Component({
  selector: 'app-painel-admin',
  standalone: true,
  imports: [
/*     HeaderComponent,
    AmplifyAuthenticatorModule, */
    CriarPostagemComponent,
    CommonModule],
  templateUrl: './painel-admin.component.html',
  styleUrl: './painel-admin.component.css'
})

export class PainelAdminComponent implements OnInit{
  constructor(
  /*   private auth: AuthService,
    public authenticator: AuthenticatorService, */
    private router: Router
  ){}
  nome: any;
  pageActive = 'Dashboard';
  async ngOnInit(): Promise <void>{
    /* const session  = await this.auth.getCurrentUser();
    this.nome = session.username; */
  }

  sigout() {
    /* this.authenticator.signOut(); */
    this.router.navigate(['/login'])
  }

  pageChange(page: string) {
    this.pageActive = page
  }

}
