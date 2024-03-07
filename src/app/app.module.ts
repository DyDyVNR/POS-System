import { BoRoleModule } from './bo-role-page/bo-role-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ItemService } from './services/item.service';
import { RouterModule, Routes } from '@angular/router';
import { BoItemsComponent } from './bo-item/bo-items/bo-items.component';
import { BoFormItemComponent } from './bo-item/bo-form-item/bo-form-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './sale-page/category/category.component';
import { CategoryService } from './services/category.service';
import { BoCategoryComponent } from './bo-category-page/bo-category/bo-category.component';
import { BoFormCategoryComponent } from './bo-category-page/bo-form-category/bo-form-category.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HeaderService } from './services/header.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SupplierService } from './services/supplier.service';
import { OrderService } from './services/order.service';
import { RoleService } from './services/role.service';
import { OrderHistoryComponent } from './order-history/order-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NotFoundPageComponent,
    OrderHistoryComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSkeletonLoaderModule,

  ],
  providers: [
    ItemService,
    CategoryService,
    AuthService,
    AuthGuardService,
    HeaderService,
    SupplierService,
    OrderService,
    RoleService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
