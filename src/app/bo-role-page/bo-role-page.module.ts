import { BoFormRoleComponent } from './bo-form-role/bo-form-role.component';
import { BoRoleComponent } from './bo-role/bo-role.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from '../services/auth-guard.service';


const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: BoRoleComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuardService],
    component: BoFormRoleComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuardService],
    component: BoFormRoleComponent,
  },
];

@NgModule({
  declarations: [BoRoleComponent, BoFormRoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  exports: [BoRoleComponent, BoFormRoleComponent],
  providers: [],
})
export class BoRoleModule {}
