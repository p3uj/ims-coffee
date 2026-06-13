"use client";

import { mockIngredients } from "@/lib/mock/mock-ingredients";
import { DataTable } from "../ui/data-table";
import { ingredientsColumns } from "./ingredients-columns";
import { Filter } from "../ui/filter";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import { RotateCcw } from "lucide-react";

export function IngredientsTable() {
  const searchableFields = ["name", "currentStock", "reorderLevel"];
  const filterCategory = [
    { value: "all", label: "All" },
    { value: "syrups", label: "Syrups" },
    { value: "dairy", label: "Dairy" },
    { value: "beans", label: "Beans" },
  ];

  const filterStatus = [
    { value: "all", label: "All" },
    { value: "in stock", label: "In Stock" },
    { value: "low stock", label: "Low Stock" },
    { value: "out of stock", label: "Out of Stock" },
  ];

  return (
    <DataTable
      columns={ingredientsColumns}
      data={mockIngredients}
      searchableFields={searchableFields}
      searchLabel="Search name, current stock, or reorder level...">
      {/* Category Filter */}
      <Filter
        title="Category"
        label="Filter Category"
        options={filterCategory}
      />

      {/* Status Filter */}
      <Filter title="Status" label="Filter Status" options={filterStatus} />

      {/* Reset Filters */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">
            <RotateCcw />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Reset filters</p>
        </TooltipContent>
      </Tooltip>
    </DataTable>
  );
}
