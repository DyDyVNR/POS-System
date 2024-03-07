import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from '../services/auth-guard.service';
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderItemComponent } from './order-item/order-item.component';

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: ContentComponent,
  },
];

@NgModule({
  declarations: [
    ContentComponent,
    CategoryComponent,
    ItemComponent,
    ListItemComponent,
    ListOrderComponent,
    OrderItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
  ],
  exports: [
    ContentComponent,
    CategoryComponent,
    ItemComponent,
    ListItemComponent,
    ListOrderComponent,
    OrderItemComponent,
  ],
  providers: [],
})
export class SaleModule {}
