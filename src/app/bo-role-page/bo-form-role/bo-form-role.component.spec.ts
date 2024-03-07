import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoFormRoleComponent } from './bo-form-role.component';

describe('BoFormRoleComponent', () => {
  let component: BoFormRoleComponent;
  let fixture: ComponentFixture<BoFormRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoFormRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoFormRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
