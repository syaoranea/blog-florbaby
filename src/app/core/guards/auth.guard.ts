import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Auth Services
import { AuthenticationService } from '../services/auth.service';
import { AuthfakeauthenticationService } from '../services/authfake.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private authFackservice: AuthfakeauthenticationService
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      console.log('AuthGuard#canActivate called, isAuthenticated:');
      try {
        if (environment.defaultauth === 'amplify') {
          const user = await this.authenticationService.getCurrentUser();
          if (user && user.username) {
            console.log("Usuário logado:", user.username);
            return true;
          } else {
            // Redireciona para a página de login se não estiver autenticado
            this.router.navigate(['/login']);
            return false;
          }
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        this.router.navigate(['/login']);
        return false;
      }
      return true
    }
  }
