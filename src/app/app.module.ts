import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SummarizePipe } from './summarize.pipe';

@NgModule({
  declarations: [AppComponent, ProductDetailsComponent, SummarizePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CatalogueModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
