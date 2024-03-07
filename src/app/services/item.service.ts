import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HOST_URL } from '../help/configuration';
import { HeaderService } from './header.service';

@Injectable()
export class ItemService {
  items: any[] = [];

  list_order: any[] = [];

  totalPrice: any = 0;

  refreshListOrder = new EventEmitter();

  httpOption: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.httpOption = new HeaderService(this.cookieService).httpOptionsAuth;
  }

  getAllItem() {
    this.items = [];
    return this.http.get(`${HOST_URL}/item`, this.httpOption);
  }

  getListOrder() {
    return this.list_order;
  }

  clearListOrder() {
    this.list_order = [];
    this.totalPrice = 0;
  }

  addListOrder(item: any) {
    this.totalPrice = 0;
    const value = this.list_order.find((l) => l.id === item.id);
    if (value) {
      let index = this.list_order.indexOf(value);
      this.list_order[index] = { ...item, qty: value.qty + 1 };
    } else {
      this.list_order.push({ ...item, qty: 1 });
    }

    this.list_order.forEach((l) => {
      console.log(l);
      this.totalPrice += l.qty * l.price;
    });

    console.log(this.totalPrice);
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  deleteListOrder(item: any) {
    this.list_order = this.list_order.filter((l) => l.id !== item.id);
  }

  increaseItemOrder(item: any) {
    const value = this.list_order.find((l) => l.id === item.id);
    if (value) {
      let index = this.list_order.indexOf(value);
      this.list_order[index] = { ...item, qty: value.qty + 1 };
    }
  }

  decreaseItemOrder(item: any) {
    const value = this.list_order.find((l) => l.id === item.id);
    if (value && value.qty > 1) {
      let index = this.list_order.indexOf(value);
      this.list_order[index] = { ...item, qty: value.qty - 1 };
    }
  }

  addItem(item: any) {
    this.http
      .post(`${HOST_URL}/item`, item, this.httpOption)
      .toPromise()
      .then((result: any) => {
        console.log(result);
        this.router.navigate(['/bo-item']);
      });
  }

  editItem(item: any) {
    this.http
      .post(`${HOST_URL}/item/edit`, item, this.httpOption)
      .toPromise()
      .then((result: any) => {
        console.log(result);
        this.router.navigate(['/bo-item']);
      });
  }

  deleteItem(id: any) {
    return this.http.post(
      `${HOST_URL}/item/delete?id=${id}`,
      { id: id },
      this.httpOption
    );
  }
}
