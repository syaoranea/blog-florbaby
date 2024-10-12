import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser, getCurrentUser, signOut, fetchAuthSession, AuthTokens, signIn, SignInInput } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceCog {
  constructor(private router: Router) { }

  async getCurrentUser(): Promise<AuthUser> {
    return await getCurrentUser();
  }

  async getCurrentSession(): Promise<AuthTokens | undefined> {
    return (await fetchAuthSession()).tokens;
  }

  async getCurrentUserFullName(): Promise<string | undefined> {
    let cognitoToken = await (await fetchAuthSession()).tokens;
    return cognitoToken?.idToken?.payload['name']?.toString();
  }

/*   async signIn(login: any): Promise<void> {
    console.log(login)
    try {
      signIn(login);
     // this.saveToken(user.signInUserSession.idToken.jwtToken);
      //console.log("Login successful");
    } catch (error) {
      console.error("Error signing in", error);
      throw error;
    }
  } */

  async signIn(email: SignInInput): Promise<void> {

    try {
      const user = await signIn(email);
     // this.saveToken(user.signInUserSession.idToken.jwtToken);
      console.log("Login successful");
      this.router.navigate([''])
    } catch (error) {
      console.error("Error signing in", error);
      throw error;
    }
  }


  signOut() {
    signOut();
  }

  saveToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('userToken');
  }

}
