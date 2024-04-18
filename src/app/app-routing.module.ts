import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: "product-list",
    component: ProductsListComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/product-list",
    pathMatch: "full",
  }, 
  {
    path: "product/:id",
    component: ProductDetailsComponent
  },
  {
    path: "cart",
    component: ViewCartComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true, 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
