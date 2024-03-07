import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoCategoryComponent } from './bo-category.component';

describe('BoCategoryComponent', () => {
  let component: BoCategoryComponent;
  let fixture: ComponentFixture<BoCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
