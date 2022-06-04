import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  form: FormGroup | undefined;
  showPassword: boolean | undefined;
  passwordAreEquals: boolean = false;
  userCreated: boolean = false;

  constructor(private userService: UsersService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    if (this.form) { return; }
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      admin: [false, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  async createNewUser() {
    const body = {
      firstName: this.form?.get('firstName')?.value,
      lastName: this.form?.get('lastName')?.value,
      admin: this.form?.get('admin')?.value,
      email: this.form?.get('email')?.value,
      password: this.form?.get('password')?.value
    };

    this.userService.createUser(body).subscribe(
      response => {
          this.userCreated = true;
          setTimeout(
            () => this.createAndNavigate(), 2000,
          )
      },
      error => alert('Error while creating the user')
    );
  }
  passwordsAreEquals(password: any, confirmPassword: any): boolean {
    if (password === confirmPassword) {
      this.passwordAreEquals = true;
      return true;
    }
    return false;
  }

  createAndNavigate() {
    this.userCreated = false;
    this.router.navigateByUrl('/users')

  }
}
