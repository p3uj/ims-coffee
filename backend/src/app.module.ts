import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { MeasurementUnitsModule } from './measurement-units/measurement-units.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';

@Module({
  imports: [DatabaseModule, RolesModule, UsersModule, SuppliersModule, MeasurementUnitsModule, IngredientsModule, PurchaseOrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
