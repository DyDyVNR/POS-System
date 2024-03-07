import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-bo-supplier',
  templateUrl: './bo-supplier.component.html',
  styleUrls: ['./bo-supplier.component.scss'],
})
export class BoSupplierComponent implements OnInit {
  modalRef?: BsModalRef;
  suppliers: any[] = [];
  loading = false;
  constructor(
    private router: Router,
    private supplierService: SupplierService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getData();
  }

  onClickAddNew(): void {
    this.router.navigate(['/bo-supplier/create']);
  }

  // onClickDelete(id: any): void {
  //   this.itemService.deleteItem(id).subscribe((result) => {
  //     this.getData();
  //   });
  //   this.modalRef?.hide();
  //   this.toastr.success("Delete record", "Successful")
  // }

  // onClickUpdate(id: any): void {
  //   this.router.navigate([`/bo-item/edit/${id}`]);
  // }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }

  onClickUpdate(id: any) {
    this.router.navigate([`/bo-supplier/edit/${id}`]);
  }

  onClickDelete(id: any) {
    this.supplierService.deleteSupplier(id).subscribe((result: any) => {
      if (result) {
        this.getData();
        this.modalRef?.hide();
      }
    });
  }

  getData() {
    this.loading = true;
    this.supplierService.getAllSupplier().subscribe((result: any) => {
      this.suppliers = result;
      this.loading = false;
    });
  }
}
