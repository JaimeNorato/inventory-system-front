import { Component, Input, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InventoryService } from '@shared/services/inventory.service';
import { InventoryMovement } from '@shared/models/inventory.model';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @Input() id?: string;

  product = signal<Product>({productId: '', name: '', stock: 0});
  private inventoryService = inject(InventoryService);
  private productService = inject(ProductService);

  quantityCtrl = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.min(1),
    ]
  });

  typeCtrl = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });

  observationCtrl = new FormControl("", {
    nonNullable: false,
    validators: []
  });

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Register component initialized');
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
    }
  }

  saveInventory() {
    console.log('Save inventory movement');
    if(this.quantityCtrl.valid && this.typeCtrl.valid && this.id){
      this.inventoryService.createInventoryMovementProduct(<InventoryMovement>{
        productId: this.id,
        quantity: parseInt(this.quantityCtrl.value),
        type: parseInt(this.typeCtrl.value),
        observation: this.observationCtrl.value,
      }).subscribe({
        next: (inventoryMovement) => {
          console.log(inventoryMovement);
          this.router.navigate(['/list']);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
