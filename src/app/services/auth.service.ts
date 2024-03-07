import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private cookiesService: CookieService, private router: Router) {}

  login(auth: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk',
      }),
      body: null,
      params: new HttpParams(),
    };

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', auth.username);
    body.set('password', auth.password);

    this.http
      .post(
        'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8082/oauth/token',
        body.toString(),
        httpOptions
      )
      .toPromise()
      .then((result: any) => {
        this.cookiesService.set('access_token', result.access_token);
        localStorage.setItem('full_name', result.full_name);
        this.router.navigate(['/sale']);
        // localStorage.setItem('access_token', result.access_token);
      });
  }

  isAuthenticated(): boolean {
    const accessToken = this.cookiesService.get('access_token');
    return !(accessToken === null || accessToken === '' || accessToken === undefined);
  }

  isAdmin():boolean {
    const accessToken = this.cookiesService.get('access_token');
    const full_name = localStorage.getItem('full_name');
    return !(accessToken === null || accessToken === '' || accessToken === undefined) && full_name=== "hello" ;
  }

  logOut() {
    this.cookiesService.deleteAll();
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
