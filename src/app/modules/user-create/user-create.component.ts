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
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async createNewUser() {
    const body = {
      firstName: this.form?.get('firstName')?.value,
      lastName: this.form?.get('lastName')?.value,
      admin: this.form?.get('admin')?.value,
      email: this.form?.get('email')?.value,
      password: this.form?.get('password')?.value
    };
    console.log('Creating new user Result: ' + body.firstName, body.lastName, body.admin, body.email, body.password);
    //Hay que suscribirse para que funcione.
    this.userService.createUser(body).subscribe(
      //lógica de lo que se quiere hacer cuando ha ido bien la creación. 
      response =>  this.router.navigateByUrl('/users') ,
      error => alert('Error while creating the user') 
    );

    // console.log('Creating new user Response: ' + JSON.stringify(response));
  }

}
