import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFormCategoryComponent } from './bo-form-category.component';

describe('BoFormCategoryComponent', () => {
  let component: BoFormCategoryComponent;
  let fixture: ComponentFixture<BoFormCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoFormCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
