import { HeaderService } from './../services/header.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header = 'Welcome to binding header';
  isTrue = true;
  username: any = null;

  constructor(private authService: AuthService, private headerService:HeaderService) {

  }

  ngOnInit(): void {
    this.username = this.headerService.getUsername();

  }

  onClickLogout() {
    this.authService.logOut();

  }

  isShow() {
    return this.authService.isAuthenticated();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }


}
