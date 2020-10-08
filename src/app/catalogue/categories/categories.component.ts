import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((response) => {
      console.log(response);
      this.categories = response;
    });
  }
}
