import { CookieService } from 'ngx-cookie-service';
import { HeaderService } from './header.service';
import { HOST_URL } from './../help/configuration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable ()
export class RoleService {
  httpOption: any;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) {
    this.httpOption=new HeaderService(this.cookieService).httpOptionsAuth;
  }
  getAllRole() {
    return this.http.get(`${HOST_URL}/role`, this.httpOption);
  }
  createRole(role: any) {
    return this.http.post(`${HOST_URL}/role`, role, this.httpOption);
  }

  editRole(role: any) {
    return this.http.post(
      `${HOST_URL}/role/edit`,
      role,
      this.httpOption
    );
  }

  deleteRole(id: any) {
    return this.http.post(
      `${HOST_URL}/role/delete?id=${id}`,
      { id },
      this.httpOption
    );
  }
}
