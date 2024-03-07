import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';
import { CategoryService } from '../../services/category.service';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-bo-form-item',
  templateUrl: './bo-form-item.component.html',
  styleUrls: ['./bo-form-item.component.scss'],
})
export class BoFormItemComponent implements OnInit {
  form: FormGroup;
  categories: any[] = [];
  suppliers: any[] = [];



  constructor(
    private router: Router,
    private fb: FormBuilder,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private supplierService: SupplierService
  ) {
    this.form = fb.group({
      title: new FormControl(null),
      price: new FormControl(null),
      image: new FormControl(null),
      category: new FormControl(null),
      isStock: new FormControl(null),
      stock: new FormControl(null),
      supplier: new FormControl(null),
    });
  }
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((result: any) => {
      this.categories = result;
    });

    this.supplierService.getAllSupplier().subscribe((result: any) => {
      this.suppliers = result;
    });

    if (this.route.snapshot.params['id']) {
      this.itemService.getAllItem().subscribe((result: any) => {
        const item = result.find(
          (d: { id: any }) => d.id === this.route.snapshot.params['id']
        );
        if (item !== undefined) {
          this.form.patchValue({
            title: item.title,
            image: item.pic,
            price: item.price,
            category: item.category_id,
            isStock: item.is_stock,
            stock: item.stock,
            supplier: item.supplier,

          });
        }
      });


    }
  }

  isStocked () {
    return this.form.value.isStock;
  }
  onClickCancel(): void {
    this.router.navigate(['/bo-item']);
  }

  onSubmit(): void {
    if (this.route.snapshot.params['id']) {
      this.itemService.editItem({
        id: this.route.snapshot.params['id'],
        title: this.form.value.title,
        pic: this.form.value.image,
        price: this.form.value.price,
        category_id: this.form.value.category,
        is_stock: this.form.value.isStock,
        stock: Number(this.form.value.stock),
        supplier_id: this.form.value.supplier,
      });
    } else {
      this.itemService.addItem({
        title: this.form.value.title,
        pic: this.form.value.image,
        price: this.form.value.price,
        category_id: this.form.value.category,
        is_stock: this.form.value.isStock,
        stock: Number(this.form.value.stock),
        supplier_id: this.form.value.supplier,
      });
      console.log(this.form.value);
    }
  }
}
