import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-bo-category',
  templateUrl: './bo-category.component.html',
  styleUrls: ['./bo-category.component.scss'],
})
export class BoCategoryComponent implements OnInit {
  modalRef?: BsModalRef;
  categories: any[] = [];
  loading = false;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  onClickAddNew() {
    this.router.navigate(['/bo-category/create']);
  }

  onClickDelete(id: any) {
    this.categoryService.deleteCategory(id).subscribe((result: any) => {
      this.getData();
    });
    this.modalRef?.hide();
    this.toastr.success('Delete Record', 'Successful');
  }

  onClickUpdate(id: any) {
    this.router.navigate([`/bo-category/edit/${id}`]);
  }

  getData() {
    this.loading = true;
    this.categoryService.getAllCategory().subscribe((result: any) => {
      this.categories = result;
      this.loading = false;
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
