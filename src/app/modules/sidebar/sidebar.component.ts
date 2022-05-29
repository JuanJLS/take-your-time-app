import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userName: any;
  userIsAdmin: boolean = false;
  
  constructor( private userService: UsersService) {}
  
  ngOnInit(): void {

    this.userService.getCurrentUser().subscribe(response => 
      this.userIsAdmin = response.admin);
    this.userService.getCurrentUser().subscribe(response => 
      this.userName = response.firstName);
  }



}
