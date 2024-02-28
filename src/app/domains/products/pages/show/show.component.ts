import { Component, Input, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import { InventoryMovement } from '@shared/models/inventory.model';
import { InventoryService } from '@shared/services/inventory.service';
import { ProductService } from '@shared/services/product.service';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  @Input() id?: string;

  inventories = signal<InventoryMovement[]>([]);
  product = signal<Product>({productId: '', name: '', stock: 0});
  private inventoryService = inject(InventoryService);
  private productService = inject(ProductService);

  ngOnInit() {
    console.log('Show component initialized');0
    if(this.id){
      console.log(this.id);
      this.productService.getProduct(this.id).subscribe({
        next: (product) => {
          console.log(product);
          this.product.set(product);
        },
        error: (error) => {
          console.error(error);
        }
      });
      this.inventoryService.getInventoryMovementsProduct(this.id).subscribe({
        next: (inventories) => {
          console.log(inventories);
          this.inventories.set(inventories);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
