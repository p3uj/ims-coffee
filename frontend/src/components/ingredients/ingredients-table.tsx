"use client";

import { mockIngredients } from "@/lib/mock/mock-ingredients";
import { DataTable } from "../ui/data-table";
import { ingredientsColumns } from "./ingredients-columns";
import { IngredientsFilter } from "./ingredients-filter";

export function IngredientsTable() {
  const searchableFields = ["name", "currentStock", "reorderLevel"];

  return (
    <DataTable
      columns={ingredientsColumns}
      data={mockIngredients}
      searchableFields={searchableFields}
      searchLabel="Search name, current stock, or reorder level...">
      <IngredientsFilter />
    </DataTable>
  );
}
