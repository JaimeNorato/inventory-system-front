import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private productService = inject(ProductService);

  ngOnInit() {
    console.log('List component initialized');
    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
