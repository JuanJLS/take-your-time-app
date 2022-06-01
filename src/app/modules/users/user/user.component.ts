import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
    tasksByUser: any;

    constructor(private usersService: UsersService, private route: ActivatedRoute, private tasksService: TaskService) { }

    getUser() {
        type Task = {createdAt: string; id: number; name: string; projectId: number; updatedAt: string;};
        this.usersService.getUser(this.userId).subscribe(response => {
            this.user = response;
            this.user.WorkTimes.map((worktime: any) => {
                this.tasksService.findTaskById(worktime.taskId).then(response => {
                    Object.assign(worktime, { 'taskName': response});
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

    filterTaskById(taskId: any) {
        // let returnedInfo;
        this.tasksService.findTaskById(taskId).then(response => {
            return response;
        },
            error => alert(error.message)
        )

        // return returnedInfo;
    }

    calculateWorktime(totalTime: number): string {
        const calculatedTime = totalTime * 100 / 160;
        return `width: ${calculatedTime}%`;
    }
}  