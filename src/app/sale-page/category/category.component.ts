import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: any[] = [{ id: 'All', name: 'All' }];
  @Output() clickCategory = new EventEmitter();

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((result: any) => {
      result.forEach((d: any) => {
        this.categories.push({ id: d.id, name: d.name });
      });
    });
  }

  onClickCategory(id: any): void {
    this.clickCategory.emit(id);
  }
}
