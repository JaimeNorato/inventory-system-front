import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { InventoryMovement } from '@shared/models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private http = inject(HttpClient)

  private urlBase = 'http://localhost:5186/api';
  private url = `${this.urlBase}/InventoryMovement`;

  constructor() { }

  getInventoryMovementsProduct(id: string) {
    return this.http.get<InventoryMovement[]>(`${this.url}/${id}`);
  }

  createInventoryMovementProduct(inventoryMovement: InventoryMovement) {
    return this.http.post(this.url, inventoryMovement);
  }

}
