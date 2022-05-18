import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = null;

  constructor(private usersService: UsersService) { }

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
}
