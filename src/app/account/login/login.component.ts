import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { login, signInWithGoogle } from 'src/app/store/actions/authentication.actions';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { AuthServiceCog } from '../auth/services/auth.service';
import { SignInInput } from 'aws-amplify/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = '';
  returnUrl!: string;

  toast!: false;;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: UntypedFormBuilder,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private AuthenticationService: AuthenticationService,
  private auth: AuthServiceCog) {
    // redirect to home if already logged in
    // this.store.select(state => state.Authentication).subscribe(authState => {
    //   this.isLoggedIn = !!authState.user;
    //   this.currentUser = authState.user;
    // });

    if (this.AuthenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ['admin@themesbrand.com', [Validators.required]],
      password: ['123456', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }



  signInWithGoogle() {
    this.AuthenticationService.signInWithGoogle().then(user => {
      this.store.dispatch(signInWithGoogle({ user }));
    })
      .catch(error => {
        // Handle sign-out error
        console.error('Sign-out error:', error);
      });
  }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    const login: SignInInput = {
      username: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    // Login Api
    this.auth.signIn(login);
    this.router.navigate([''])
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
