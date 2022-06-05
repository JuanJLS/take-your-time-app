import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  toggled = false;
  user: any;

  constructor(private router: Router, private session: SessionsService, private userService: UsersService ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  logout(){
    const confirmLogOut = confirm("Do you want to Log-Out?")
    if(confirmLogOut){
      this.router.navigateByUrl("/login");
      this.session.clearAuthToken();
    }
  }

  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(
      response => this.user = response
    );
  }

}
