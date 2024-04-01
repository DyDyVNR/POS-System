import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  items: any = [];

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getAllItem();
  }

  ngOnInit(): void {}
}
