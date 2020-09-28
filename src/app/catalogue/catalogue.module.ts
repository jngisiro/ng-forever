import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SliderComponent } from './slider/slider.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CatalogueComponent,
    SliderComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, CatalogueRoutingModule, HttpClientModule],
})
export class CatalogueModule {}
