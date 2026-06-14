"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { IngredientsDialog } from "./ingredients-dialog";
import { Progress } from "../ui/progress";
import { getBgColor } from "@/lib/utils/color";
import { Badge } from "../ui/badge";
import { Ingredient } from "@/types/ingredients";
import { cn } from "@/lib/utils";
import { INGREDIENT_CATEGORY_COLORS } from "@/constants/ingredients";

export const ingredientsColumns: ColumnDef<Ingredient>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Name
        {column.getIsSorted() === "desc" ? (
          <span className="flex">
            <ArrowDown className="ml-2 h-4 w-4" />
          </span>
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUp className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    ),
  },
  {
    accessorKey: "currentStock",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Stock
        {column.getIsSorted() === "desc" ? (
          <span className="flex">
            <ArrowDown className="ml-2 h-4 w-4" />
          </span>
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUp className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    ),
    cell: ({ row }) => {
      const currentStock = row.original.currentStock;
      const initialStock = row.original.initialStock;
      const classes = getBgColor(row.original.status);

      return (
        <div className="flex items-center text-gray-500">
          <Progress
            value={(currentStock / initialStock) * 100}
            className={cn("h-[8px] mr-2 max-w-[150px]", classes.progressDiv)}
          />
          <span className={classes.text}>{currentStock}</span>/{initialStock}
        </div>
      );
    },
  },
  {
    accessorKey: "reorderLevel",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Reorder Level
        {column.getIsSorted() === "desc" ? (
          <span className="flex">
            <ArrowDown className="ml-2 h-4 w-4" />
          </span>
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUp className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    ),
    cell: ({ row }) => (
      <Badge className="px-1.5">
        {row.original.reorderLevel} {row.original.measurementUnit}
      </Badge>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Category
        {column.getIsSorted() === "desc" ? (
          <span className="flex">
            <ArrowDown className="ml-2 h-4 w-4" />
          </span>
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUp className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    ),
    cell: ({ row }) => (
      <Badge
        className={cn(
          "px-1.5",
          INGREDIENT_CATEGORY_COLORS[row.original.category],
        )}>
        {row.original.category}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Status
        {column.getIsSorted() === "desc" ? (
          <span className="flex">
            <ArrowDown className="ml-2 h-4 w-4" />
          </span>
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUp className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    ),
    cell: ({ row }) => {
      const classes = getBgColor(row.original.status);

      return (
        <Badge
          className={cn(
            "px-1.5",
            classes.bg,
            classes.text,
            "before:h-1.5 before:w-1.5 before:rounded-full",
            classes.indicator,
          )}>
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const ingredient = row.original;

      return <IngredientsDialog />;
    },
  },
];
