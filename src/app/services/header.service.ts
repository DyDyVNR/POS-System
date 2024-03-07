import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HeaderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk',
    }),
    body: null,
    params: new HttpParams(),
  };

  httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `bearer ${this.cookieService.get('access_token')}`,
    }),
  };

  getUsername() {
    return localStorage.getItem('full_name');
  }

  constructor(private cookieService: CookieService) { }
}
