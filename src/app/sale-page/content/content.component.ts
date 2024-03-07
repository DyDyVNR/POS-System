import { HeaderService } from './../../services/header.service';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  list_order: any[] = [];

  constructor(private itemService: ItemService) {
    this.list_order = this.itemService.getListOrder();
  }

  ngOnInit(): void {

  }
}
