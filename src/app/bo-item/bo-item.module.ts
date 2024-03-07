import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from '../services/auth-guard.service';
import { BoFormItemComponent } from './bo-form-item/bo-form-item.component';
import { BoItemsComponent } from './bo-items/bo-items.component';

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: BoItemsComponent,
  },
  {
    path: 'create',
    canActivate: [AuthGuardService],
    component: BoFormItemComponent,
  },
  {
    path: 'edit/:id',
    canActivate: [AuthGuardService],
    component: BoFormItemComponent,
  },
];

@NgModule({
  declarations: [BoItemsComponent, BoFormItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  exports: [BoItemsComponent, BoFormItemComponent],
  providers: [],
})
export class BoItemModule {}
