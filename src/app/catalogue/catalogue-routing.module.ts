import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogueRoutingModule {}
