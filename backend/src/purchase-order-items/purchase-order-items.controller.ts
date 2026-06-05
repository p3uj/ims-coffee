import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PurchaseOrderItemsService } from './purchase-order-items.service';
import { CreatePurchaseOrderItemDto } from './dto/create-purchase-order-item.dto';
import { UpdatePurchaseOrderItemDto } from './dto/update-purchase-order-item.dto';
import { PurchaseOrderItemQueryDto } from './dto/purchase-order-item-query.dto';

@Controller('purchase-order-items')
export class PurchaseOrderItemsController {
  constructor(
    private readonly purchaseOrderItemsService: PurchaseOrderItemsService,
  ) {}

  @Post()
  create(@Body() createPurchaseOrderItemDto: CreatePurchaseOrderItemDto) {
    return this.purchaseOrderItemsService.create(createPurchaseOrderItemDto);
  }

  @Get()
  findAll(@Query() query: PurchaseOrderItemQueryDto) {
    return this.purchaseOrderItemsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.purchaseOrderItemsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePurchaseOrderItemDto: UpdatePurchaseOrderItemDto,
  ) {
    return this.purchaseOrderItemsService.update(
      id,
      updatePurchaseOrderItemDto,
    );
  }
}
