import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { HOST_URL } from "../help/configuration";
import { HeaderService } from "./header.service";

@Injectable()
export class OrderService {
  httpOption: any;
  constructor(private http: HttpClient, private cookiesService: CookieService) {
    this.httpOption = new HeaderService(this.cookiesService).httpOptionsAuth;
  }

  order(orders: any[]) {
    return this.http.post(`${HOST_URL}/order`, orders, this.httpOption);
  }

  getAllOrder () {
    return this.http.get(`${HOST_URL}/order`, this.httpOption);
  }

  deleteOrderHistory(id:any) {
    return this.http.post(
      `${HOST_URL}/order/delete?id=${id}`,
      { id },
      this.httpOption
    );
  }
}
