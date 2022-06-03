import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TaskService } from "src/app/services/task.service";
import { UsersService } from "src/app/services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user-update.component.html',
    styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
    userId: string = '';
    firstName: string = '';
    lastName: string = '';
    admin: boolean = false;
    email: any;

    form: FormGroup | undefined;

    constructor(private usersService: UsersService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private tasksService: TaskService) { }

    initForms(): void {
        if (this.form) { return; }
        this.form = this.fb.group({
            firstName: [this.firstName, [Validators.required]],
            lastName: [this.lastName, [Validators.required]],
            admin: [this.admin, [Validators.required]],
            email: [this.email, [Validators.required]]
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
        })
        this.route.queryParams.subscribe(params => {
            this.firstName = params['firstName']
            this.lastName = params['lastName']
            this.admin = params['admin']
            this.email = params['email']
        })
        this.initForms();
    }

    updateUser() {
        this.usersService.updateUser({
            'id': this.userId,
            'firstName': this.form?.get('firstName')?.value,
            'lastName': this.form?.get('lastName')?.value,
            'admin': this.form?.get('admin')?.value,
            'email': this.form?.get('email')?.value
        }).subscribe(
            response => this.router.navigateByUrl('/users'),
            error => alert('Error while updating the user')
        );
    }
}  