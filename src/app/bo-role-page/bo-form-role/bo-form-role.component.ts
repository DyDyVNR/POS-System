import { RoleService } from './../../services/role.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bo-form-role',
  templateUrl: './bo-form-role.component.html',
  styleUrls: ['./bo-form-role.component.scss']
})
export class BoFormRoleComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.form = fb.group({
      name: new FormControl(null),
      description: new FormControl(null),
    });
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.roleService.getAllRole().subscribe((result: any) => {
        const category = result.find(
          (c: { id: any }) => c.id === this.route.snapshot.params['id']
        );
        this.form.patchValue({
          name: category.name,
          description: category.description,
        });
      });
    }
  }

  onSubmit() {
    if (this.route.snapshot.params['id']) {
      this.roleService.editRole({
        id: this.route.snapshot.params['id'],
        name: this.form.value.name,
        description: this.form.value.description,
      }).subscribe();
      this.toastr.success('Edit Record', 'Successful');
    } else {
      this.roleService.createRole({
        name: this.form.value.name,
        description: this.form.value.description,
      }).subscribe();

      this.toastr.success('Create Record', 'Successful');
    }this.router.navigate(['/bo-role']);
  }

  onClickCancel() {
    this.router.navigate(['/bo-role']);
  }

}
