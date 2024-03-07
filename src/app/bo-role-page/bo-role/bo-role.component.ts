import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../../services/role.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-bo-role',
  templateUrl: './bo-role.component.html',
  styleUrls: ['./bo-role.component.scss']
})
export class BoRoleComponent implements OnInit {
  roles: any [] =[];
  modalRef?: BsModalRef;
  loading = false;

  constructor(
    private roleService: RoleService,
    private router: Router,
    private modalService: BsModalService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {
    this.loading = true;
    this.roleService.getAllRole().subscribe((result: any) => {
      this.roles = result;
      this.loading = false;
    });
  }

  onClickAddNew() {
    this.router.navigate(['/bo-role/create']);
  }

  onClickDelete(id: any) {
    this.roleService.deleteRole(id).subscribe((result: any) => {
      this.getRole();
    });
    this.modalRef?.hide();
    this.toastr.success('Delete Record', 'Successful');
  }

  onClickUpdate(id: any) {
    this.router.navigate([`/bo-role/edit/${id}`]);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }

}
