import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  items: any[] = [];
  itemsFilter: any[] = [];
  loading = false;

  constructor(private itemService: ItemService) {
    this.loading = true;
    this.itemService.getAllItem().subscribe((result: any) => {
      this.items = result;
      this.itemsFilter = result;
      this.loading = false;
    });
  }

  ngOnInit(): void {}

  onClickCategory($event: any) {
    if ($event === 'All') {
      this.itemsFilter = this.items;
    } else {
      this.itemsFilter = this.items.filter((i) => i.category_id === $event);
    }
  }
}
