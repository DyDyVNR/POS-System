import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-bo-form-item',
  templateUrl: './bo-form-item.component.html',
  styleUrls: ['./bo-form-item.component.scss'],
})
export class BoFormItemComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private itemService: ItemService
  ) {
    this.form = fb.group({
      title: new FormControl(null),
      price: new FormControl(null),
      image: new FormControl(null),
    });
  }

  onClickCancel(): void {
    this.router.navigate(['/bo-item']);
  }

  onSubmit(): void {
    this.itemService.addItem({
      title: this.form.value.title,
      pic: this.form.value.image,
      price: this.form.value.price,
    });
    console.log(this.form.value);

  }
}
