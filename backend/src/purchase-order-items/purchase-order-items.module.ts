import { Module } from '@nestjs/common';
import { PurchaseOrderItemsService } from './purchase-order-items.service';
import { PurchaseOrderItemsController } from './purchase-order-items.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseOrderItemsController],
  providers: [PurchaseOrderItemsService],
})
export class PurchaseOrderItemsModule {}
