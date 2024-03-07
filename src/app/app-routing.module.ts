import { BoRoleComponent } from './bo-role-page/bo-role/bo-role.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [{ path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent },
{
  path: 'sale',
  loadChildren: () =>
    import('./sale-page/sale-page.module').then((m) => m.SaleModule),
},
{
  path: 'bo-item',
  loadChildren: () =>
    import('./bo-item/bo-item.module').then((m) => m.BoItemModule),
},
{
  path: 'bo-category',
  loadChildren: () =>
    import('./bo-category-page/bo-category-page.module').then(
      (m) => m.BoCategoryModule
    ),
},
{
  path: 'bo-supplier',
  loadChildren: () =>
    import('./bo-supplier-page/bo-supplier-page.module').then(
      (m) => m.BoSupplierModule
    ),
},
{
  path: 'bo-role',
  loadChildren: () =>
  import('./bo-role-page/bo-role-page.module').then(
    (m) => m.BoRoleModule
  ),
},
{
  path: 'bo-history',
  component: OrderHistoryComponent,
},
{
  path: '404',
  component: NotFoundPageComponent,
},
{
  path: '**',
  redirectTo: '/404',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
