"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";
import { IngredientsDialog } from "./ingredients-dialog";
import { Progress } from "../ui/progress";
import { getBgColor } from "@/lib/utils/color";
import { Badge } from "../ui/badge";
import { Ingredient } from "@/types/ingredients";

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
      const bgColor = getBgColor(row.original.status);

      return (
        <div className="flex items-center text-gray-500">
          <Progress
            value={(currentStock / initialStock) * 100}
            className={`h-[8px] [&>div]:bg-${bgColor.color} mr-2 max-w-[150px]`}
          />
          <span className={`text-${bgColor.color}`}>{currentStock}</span>/
          {initialStock}
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
      <Badge className="px-1.5">{row.original.reorderLevel}</Badge>
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
      const bgColor = getBgColor(row.original.status);

      return (
        <Badge
          className={`px-1.5 bg-${bgColor.color100} text-${bgColor.color} before:h-1.5 before:w-1.5 before:bg-${bgColor.color} before:rounded-full`}>
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
