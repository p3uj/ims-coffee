-- AlterTable
ALTER TABLE "ingredients" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "inventory_transactions" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "purchase_order_items" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "purchase_orders" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "suppliers" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
