import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from '../services/auth-guard.service';
import { BoFormSupplierComponent } from './bo-form-supplier/bo-form-supplier.component';
import { BoSupplierComponent } from './bo-supplier/bo-supplier.component';

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: BoSupplierComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuardService],
    component: BoFormSupplierComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuardService],
    component: BoFormSupplierComponent,
  },
];

@NgModule({
  declarations: [BoSupplierComponent, BoFormSupplierComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  exports: [BoSupplierComponent, BoFormSupplierComponent],
  providers: [],
})
export class BoSupplierModule {}
