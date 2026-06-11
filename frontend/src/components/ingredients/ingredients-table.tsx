"use client";

import { mockIngredients } from "@/lib/mock/mock-ingredients";
import { DataTable } from "../ui/data-table";
import { ingredientsColumns } from "./ingredients-columns";

export function IngredientsTable() {
  const searchableFields = ["name", "currentStock", "reorderLevel"];

  return (
    <div className="hidden lg:block">
      <DataTable
        columns={ingredientsColumns}
        data={mockIngredients}
        searchableFields={searchableFields}
      />
    </div>
  );
}
