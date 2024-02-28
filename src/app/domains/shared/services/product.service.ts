import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  private urlBase = 'http://localhost:5186/api';
  private url = `${this.urlBase}/Product`;

  constructor() { }

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.url, product);
  }
}
