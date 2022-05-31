import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
  })
  export class UserComponent implements OnInit {
    userId: string = '';
    user: any;
    constructor(private usersService: UsersService, private route: ActivatedRoute) { }

    getUser() {
        this.usersService.getUser(this.userId).subscribe( response => {
            this.user = response;
        },
        error => alert('Error while retreiving the user')
        )
    }

    ngOnInit() {
        this.route.params.subscribe(params =>{
            this.userId = params['id'];
            this.getUser()
        })
    }
  }  