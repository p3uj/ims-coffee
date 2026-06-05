import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePurchaseOrderItemDto {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  purchaseOrderId!: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  ingredientId!: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  quantity!: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  unitCost!: number;
}
