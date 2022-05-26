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
    console.log(this.form);
  }

  login(): void {
    this.auth.login(this.form?.get('email')?.value, this.form?.get('password')?.value)
      .subscribe(
        response => {
          console.log(response);
          const { user } = response;
          const { firstName, lastName } = user;
          const userName = firstName + ' ' + lastName;
          localStorage.setItem('user', userName);
          this.router.navigateByUrl("/home");
        },
        error => {
          //Use a modal
          console.error(error)
        }
      )
  }
}
