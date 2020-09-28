import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Product } from './product';

interface ProductResponse {
  data: {
    products: Product[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<ProductResponse>(
        'https://forever-products.herokuapp.com/api/v1/products',
        {
          responseType: 'json',
        }
      )
      .pipe(pluck('data', 'products'));
  }

  getProduct(id) {
    return this.http
      .get<{ data: { product: Product } }>(
        'https://forever-products.herokuapp.com/api/v1/products/' + id,
        { responseType: 'json' }
      )
      .pipe(pluck('data', 'product'));
  }

  getProductsByCategory(_category: string) {
    let category = '';
    switch (_category) {
      case 'aloe-drinks':
        category = '5f3eb5f3d6382109acfc29d3';
        break;

      case 'nutritionals':
        category = '5f3eb57dd6382109acfc29d2';
        break;

      case 'weight-management':
        category = '5f3eb65ad6382109acfc29d4';
        break;

      case 'bee-products':
        category = '5f3eb676d6382109acfc29d5';
        break;

      case 'personal-and-skincare':
        category = '5f3eb696d6382109acfc29d6';
        break;

      case 'infinite-living':
        category = '5f3eb6a8d6382109acfc29d7';
        break;
      default:
        category = '';
        break;
    }

    return this.http.get(
      'https://forever-products.herokuapp.com/api/v1/products/?category=' +
        category,
      { responseType: 'json' }
    );
  }
}
