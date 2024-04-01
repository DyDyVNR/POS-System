import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ItemService {
  items: any[] = [];

  list_order: any[] = [];

  refreshListOrder = new EventEmitter();

  constructor(private http: HttpClient, private router: Router) {}

  getAllItem() {
    this.items = [];
    this.http
      .get(
        'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8080/item'
      )
      .toPromise()
      .then((result: any) => {
        result.data.forEach((r: any) => {
          this.items.push({
            id: r.id,
            title: r.title,
            pic: r.pic,
            price: r.price,
          });
        });
      });
    return this.items;
  }

  getListOrder() {
    return this.list_order;
  }

  addListOrder(item: any) {
    const value = this.list_order.find((l) => l.id === item.id);
    if (value) {
      let index = this.list_order.indexOf(value);
      this.list_order[index] = { ...item, qty: value.qty + 1 };
    } else {
      this.list_order.push({ ...item, qty: 1 });
    }
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
      .post(
        'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8080/item',
        item
      )
      .toPromise()
      .then((result: any) => {
        console.log(result);
        this.router.navigate(['/bo-item']);
      });
  }

  deleteItem(id: any) {
    this.http
      .post(
        'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8080/item/delete',
        {id: id}
      )
      .toPromise()
      .then((result: any) => {
        console.log(result);
      });
  }
}
