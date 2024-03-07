import { AuthService } from './../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  modalRef?: BsModalRef;
  history_order: any[] = [];
  loading = false;
  constructor(
    private router: Router,
    private orderService: OrderService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {}
  ngOnInit(): void {
    this.getData();
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


  onClickDelete(id: any):void {
    this.orderService.deleteOrderHistory(id).subscribe((result: any) => {
      if (result) {
        this.getData();
        this.modalRef?.hide();
      }
    });
  }

  getData() {
    this.loading = true;
    this.orderService.getAllOrder().subscribe((result: any) => {
      this.history_order = result;
      this.loading = false;
    });
  }

  onClickClear() {

  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
