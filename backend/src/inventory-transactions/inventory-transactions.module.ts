import { Module } from '@nestjs/common';
import { InventoryTransactionsService } from './inventory-transactions.service';
import { InventoryTransactionsController } from './inventory-transactions.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InventoryTransactionsController],
  providers: [InventoryTransactionsService],
})
export class InventoryTransactionsModule {}
