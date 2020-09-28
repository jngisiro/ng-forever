import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';
import categories from '../../services/categories';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  popularProducts: Product[];
  newProducts: Product[];
  topRatedProducts: Product[];
  categories = categories;
  loading = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
        this.popularProducts = response.slice(0, 4);
        this.newProducts = response.slice(4, 8);
        this.topRatedProducts = response.slice(9, 13);
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}
