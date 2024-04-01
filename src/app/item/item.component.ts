import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: any;


  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {}

  onClickItem(item: any): void {
    this.itemService.addListOrder(item);
  }
}
