import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(private router: Router, private session: SessionsService ) { }

  ngOnInit(): void {
  }

  logout(){
    this.session.clearAuthToken();
    this.router.navigateByUrl("/login");
  }

}
