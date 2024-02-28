import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  private productService = inject(ProductService);

  nameCtrl = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });
  stockCtrl = new FormControl("",{
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.min(0),
    ]
  });

  constructor(private router: Router) { }

  saveProduct() {
    console.log('Save product');
    if(this.nameCtrl.valid && this.stockCtrl.valid){
      this.productService.createProduct(<Product>{
        name: this.nameCtrl.value,
        stock: parseInt(this.stockCtrl.value)
      }).subscribe({
        next: (product) => {
          console.log(product);
          this.router.navigate(['/list']);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
