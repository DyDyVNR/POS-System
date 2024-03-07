import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit {
  list_order: any;
  totalPrice: any = 0;

  constructor(
    private itemService: ItemService,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {
    this.list_order = this.itemService.getListOrder();
    this.totalPrice = this.itemService.getTotalPrice();
    this.itemService.refreshListOrder.subscribe((s) => {
      this.list_order = this.itemService.getListOrder();
      this.totalPrice = this.itemService.getTotalPrice();
    });
  }

  ngOnInit(): void {}

  onClickOrder() {
    let orders: any[] = [];
    this.list_order.forEach((e: { id: any; qty: any }) => {
      orders.push({ item_id: e.id, qty: e.qty });
    });
    this.orderService.order(orders).subscribe((result: any) => {
      if (result) {
        this.toastr.success('Order', 'Successful');
        this.itemService.clearListOrder();
        this.itemService.refreshListOrder.emit();
      }
    });
  }
}
