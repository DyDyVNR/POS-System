import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss'],
})
export class ListOrderComponent implements OnInit {
  list_order: any;

  constructor(private itemService: ItemService) {
    this.list_order = this.itemService.getListOrder();
    this.itemService.refreshListOrder.subscribe((s) => {
      this.list_order = this.itemService.getListOrder();
    });
  }

  ngOnInit(): void {}
}
