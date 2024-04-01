import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { ItemComponent } from './item/item.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { ItemService } from './services/item.service';
import { RouterModule, Routes } from '@angular/router';
import { BoItemsComponent } from './bo-items/bo-items.component';
import { BoFormItemComponent } from './bo-form-item/bo-form-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'bo-item', component: BoItemsComponent },
  { path: 'bo-item/create', component: BoFormItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ListItemComponent,
    ListOrderComponent,
    ItemComponent,
    OrderItemComponent,
    BoItemsComponent,
    BoFormItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
