import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import categories from 'src/app/services/categories';
import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[];
  categories = categories;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onClick(id: string) {
    this.router.navigate(['product', id]);
  }
}
