import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoRoleComponent } from './bo-role.component';

describe('BoRoleComponent', () => {
  let component: BoRoleComponent;
  let fixture: ComponentFixture<BoRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
