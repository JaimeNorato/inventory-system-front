import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {

  // product = signal<Product>();
  // private productService = inject(ProductService);

  // ngOnInit() {
  //   console.log('Show component initialized');
  //   this.productService.getProduct(1).subscribe({
  //     next: (product) => {
  //       console.log(product);
  //       this.product.set(product);
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     }
  //   });
  // }
}
