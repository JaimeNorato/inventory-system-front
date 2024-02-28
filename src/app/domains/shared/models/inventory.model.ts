export interface InventoryMovement {
  inventoryMovementId: string;
  productId: string;
  quantity: number;
  type: number;
  observation: string;
  date: Date;
}
