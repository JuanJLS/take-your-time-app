import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup | undefined;
  showPassword: boolean = false;
  errorMessageVisible: boolean = false;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    if (this.form) { return; }
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    this.auth.login(this.form?.get('email')?.value, this.form?.get('password')?.value)
      .subscribe(
        response => {
          const { user } = response;
          const { firstName, lastName } = user;
          const userName = firstName + ' ' + lastName;
          localStorage.setItem('user', userName);
          this.router.navigateByUrl("/home");
        },
        error => {
          setTimeout(
            () => this.showErrorMessage(), 3000,
            this.errorMessageVisible = true
          )
        }
      )
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  showErrorMessage() {
    this.errorMessageVisible = false;
  }
}
