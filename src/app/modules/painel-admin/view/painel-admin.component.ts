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
const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_appsync_graphqlEndpoint": "https://3lsvr2zq5bac5ppnlrrppcuznu.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-tgvyk5n3f5gj3kuvnr4ewuil2q",
  "aws_cognito_identity_pool_id": "us-east-1:19dc490a-30f4-4730-8ad1-36794b9b1126",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_EQmYuk4Mp",
  "aws_user_pools_web_client_id": "2n2929fvfk3r6plvn6ns2j0qdp",
  "oauth": {
    "redirectSignIn": "http://localhost:4200/admin",  // Your redirect URL after login
    "redirectSignOut": "http://localhost:4200/login",
    "responseType": "code" // Your redirect URL after logout
  },
  "aws_cognito_username_attributes": [],
  "aws_cognito_social_providers": [

  ],
  "aws_cognito_signup_attributes": [
      "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
};

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
