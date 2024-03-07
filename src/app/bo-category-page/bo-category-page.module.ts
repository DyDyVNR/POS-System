import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from '../services/auth-guard.service';
import { BoCategoryComponent } from './bo-category/bo-category.component';
import { BoFormCategoryComponent } from './bo-form-category/bo-form-category.component';

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: BoCategoryComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuardService],
    component: BoFormCategoryComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuardService],
    component: BoFormCategoryComponent,
  },
];

@NgModule({
  declarations: [BoCategoryComponent, BoFormCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  exports: [BoCategoryComponent, BoFormCategoryComponent],
  providers: [],
})
export class BoCategoryModule {}
