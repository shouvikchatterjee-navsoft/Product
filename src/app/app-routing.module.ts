import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'product-list',
    pathMatch:'full'
  },
  {
    path:'add',
    component:AddEditProductComponent
  },
  {
    path:'edit/:id',
    component:AddEditProductComponent
  },
  {
    path:'product-list',
    component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
