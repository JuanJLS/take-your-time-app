import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TaskService } from "src/app/services/task.service";
import { UsersService } from "src/app/services/user.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userId: string = '';
    user: any;
    userDeleted: boolean = false;

    constructor(private usersService: UsersService, private route: ActivatedRoute, private tasksService: TaskService, private router: Router) { }

    getUser() {
        this.usersService.getUser(this.userId).subscribe(response => {
            this.user = response;
            this.user.WorkTimes.map((worktime: any) => {
                this.tasksService.findTaskById(worktime.taskId).then(response => {
                    Object.assign(worktime, { 'taskName': response });
                })
            })
        },
            error => alert('Error while retreiving the user')
        )
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.userId = params['id'];
            this.getUser()
        })
    }

    calculateWorktime(totalTime: number): string {
        const calculatedTime = totalTime * 100 / 40;
        return `width: ${calculatedTime}%`;
    }

    navigateToUpdateUser(userId: string, firstName: string, lastName: string, admin: boolean, email: string) {
        this.router.navigate([`/users/update/${userId}`],
            {
                queryParams: {
                    firstName: firstName,
                    lastName: lastName,
                    admin: admin,
                    email: email
                }
            });
    }

    deleteUser(userId: number) {
        const answer = window.confirm('Are you sure to delete this user?');
        if (answer) {
            this.usersService.deleteUser(userId).subscribe(response => {
                this.userDeleted = true;
            setTimeout(
                () => this.deleteUserAndRedirect(), 2000
            )
                
            },
                error => alert('Imposible to delete this User')
            )
        }
    }
    deleteUserAndRedirect() {
        this.userDeleted = false;
        this.router.navigate(['/users']);
    }
}  