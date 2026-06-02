/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `measurement_units` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `measurement_units` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "measurement_units_name_key";

-- AlterTable
ALTER TABLE "measurement_units" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "measurement_units_code_key" ON "measurement_units"("code");
