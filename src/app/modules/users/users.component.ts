import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = null;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.usersService.getUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.error(error.message)
      }
    );
  }

  navigateToUser(userId: string): void {
    console.log(userId)
    this.router.navigateByUrl(`/users/${userId}`);
  }
}
