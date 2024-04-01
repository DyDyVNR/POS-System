import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input() order_item: any;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  onClickDelete(order_item: any): void {
    this.itemService.deleteListOrder(order_item);
    this.itemService.refreshListOrder.emit();
  }

  onDecrease(order_item: any): void {
    // this.clickDecrease.emit(order_item);
    this.itemService.decreaseItemOrder(order_item);
  }

  onIncrease(order_item: any): void {
    // this.clickIncrease.emit(order_item);
    this.itemService.increaseItemOrder(order_item);
  }
}
