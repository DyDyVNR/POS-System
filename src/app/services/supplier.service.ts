import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HOST_URL } from '../help/configuration';
import { HeaderService } from './header.service';

@Injectable()
export class SupplierService {
  httpOption: any;

  constructor(
    private http: HttpClient,
    private cookiesService: CookieService,
    private router: Router
  ) {
    this.httpOption = new HeaderService(this.cookiesService).httpOptionsAuth;
  }

  getAllSupplier() {
    return this.http.get(`${HOST_URL}/supplier`, this.httpOption);
  }

  createSupplier(supplier: any) {
    return this.http.post(`${HOST_URL}/supplier`, supplier, this.httpOption);
  }

  editSupplier(supplier: any) {
    return this.http.post(
      `${HOST_URL}/supplier/edit`,
      supplier,
      this.httpOption
    );
  }

  deleteSupplier(id: any) {
    return this.http.post(
      `${HOST_URL}/supplier/delete?id=${id}`,
      { id },
      this.httpOption
    );
  }
}
