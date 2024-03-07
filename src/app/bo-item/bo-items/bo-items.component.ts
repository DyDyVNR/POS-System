import { SupplierService } from 'src/app/services/supplier.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-bo-items',
  templateUrl: './bo-items.component.html',
  styleUrls: ['./bo-items.component.scss'],
})
export class BoItemsComponent implements OnInit {
  modalRef?: BsModalRef;
  items: any[] = [];
  loading = false;
  suppliers: any[]=[];
  constructor(
    private router: Router,
    private itemService: ItemService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private supplierService: SupplierService,
  ) {}
  ngOnInit(): void {
    // this.getSupplier();
    this.getData();

  }

  onClickAddNew(): void {
    this.router.navigate(['/bo-item/create']);
  }

  onClickDelete(id: any): void {
    this.itemService.deleteItem(id).subscribe((result) => {
      this.getData();
    });
    this.modalRef?.hide();
    this.toastr.success("Delete record", "Successful")
  }

  onClickUpdate(id: any): void {
    this.router.navigate([`/bo-item/edit/${id}`]);
  }

  getData() {
    this.loading = true;
    this.itemService.getAllItem().subscribe((result: any) => {
      this.items = result;
      this.loading = false;
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  decline(): void {
    this.modalRef?.hide();
  }

//   getSupplier() {

//     this.supplierService.getAllSupplier().subscribe((result: any) => {
//       this.suppliers = result;

//   });
// }


}
