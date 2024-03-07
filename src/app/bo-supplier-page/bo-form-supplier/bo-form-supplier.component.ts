import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-bo-form-supplier',
  templateUrl: './bo-form-supplier.component.html',
  styleUrls: ['./bo-form-supplier.component.scss'],
})
export class BoFormSupplierComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private supplierService: SupplierService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: new FormControl(null),
      phone: new FormControl(null),
      address: new FormControl(null),
    });
  }
  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.supplierService.getAllSupplier().subscribe((result: any) => {
        const supplier = result.find(
          (r: { id: any }) => r.id === this.route.snapshot.params['id']
        );
        this.form.patchValue({
          name: supplier.name,
          address: supplier.address,
          phone: supplier.phone,
        });
      });
    }
  }

  onSubmit() {
    if (this.route.snapshot.params['id']) {
      this.supplierService
        .editSupplier({
          id: this.route.snapshot.params['id'],
          name: this.form.value.name,
          phone: this.form.value.phone,
          address: this.form.value.address,
          createdDate: new Date(),
        })
        .subscribe((result: any) => {
          //
          if (result) {
            this.toastr.success('Update Supplier', 'Successful');
            this.router.navigate(['/bo-supplier']);
          } else {
            this.toastr.error('Update Supplier', 'Failed');
          }
        });
    } else {
      this.supplierService
        .createSupplier({
          name: this.form.value.name,
          phone: this.form.value.phone,
          address: this.form.value.address,
        })
        .subscribe((result: any) => {
          //
          if (result) {
            this.toastr.success('Create Supplier', 'Successful');
            this.router.navigate(['/bo-supplier']);
          } else {
            this.toastr.error('Create Supplier', 'Failed');
          }
        });
    }
  }

  onClickCancel() {
    this.router.navigate(['/bo-supplier']);
  }
}
