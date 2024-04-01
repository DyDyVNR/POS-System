import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "../services/item.service";

@Component({
  selector: 'app-bo-items',
  templateUrl: './bo-items.component.html',
  styleUrls: ['./bo-items.component.scss']
})
export class BoItemsComponent implements OnInit {
  items: any[] = [];
  constructor(private router: Router, private itemService: ItemService) {

  }
  ngOnInit(): void {
    this.items = this.itemService.getAllItem();
  }

  onClickAddNew(): void {
    this.router.navigate(['/bo-item/create']);
  }

  onClickDelete(id: any): void {
    console.log(id);
    this.itemService.deleteItem(id);
  }

  onClickUpdate(id: any): void {
    // call service update
  }
}
