import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { identity } from 'rxjs';
import { HOST_URL } from '../help/configuration';
import { HeaderService } from './header.service';

@Injectable()
export class CategoryService {
  httpOption: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookiesService: CookieService
  ) {
    this.httpOption = new HeaderService(cookiesService).httpOptionsAuth;
  }

  getAllCategory() {
    return this.http.get(`${HOST_URL}/category`, this.httpOption);
  }

  addCategory(category: any) {
    this.http
      .post(`${HOST_URL}/category`, category, this.httpOption)
      .toPromise()
      .then((result: any) => {
        console.log(result);
        this.router.navigate(['/bo-category']);
      });
  }

  editCategory(category: any) {
    this.http
      .post(`${HOST_URL}/category/edit`, category, this.httpOption)
      .toPromise()
      .then((result: any) => {
        console.log(result);
        this.router.navigate(['/bo-category']);
      });
  }

  deleteCategory(id: any) {
    return this.http.post(
      `${HOST_URL}/category/delete?id=${id}`,
      { id: id },
      this.httpOption
    );
  }
}
