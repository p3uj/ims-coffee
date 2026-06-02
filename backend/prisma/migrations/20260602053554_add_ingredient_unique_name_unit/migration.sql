/*
  Warnings:

  - A unique constraint covering the columns `[name,measurementUnitId]` on the table `ingredients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ingredients_name_measurementUnitId_key" ON "ingredients"("name", "measurementUnitId");
