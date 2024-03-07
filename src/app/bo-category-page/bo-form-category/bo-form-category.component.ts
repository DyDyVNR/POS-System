import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-bo-form-category',
  templateUrl: './bo-form-category.component.html',
  styleUrls: ['./bo-form-category.component.scss'],
})
export class BoFormCategoryComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService,
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
      this.categoryService.getAllCategory().subscribe((result: any) => {
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
      this.categoryService.editCategory({
        id: this.route.snapshot.params['id'],
        name: this.form.value.name,
        description: this.form.value.description,
      });
      this.toastr.success('Edit Record', 'Successful');
    } else {
      this.categoryService.addCategory({
        name: this.form.value.name,
        description: this.form.value.description,
      });
      this.toastr.success('Create Record', 'Successful');
    }
  }

  onClickCancel() {
    this.router.navigate(['/bo-category']);
  }
}
