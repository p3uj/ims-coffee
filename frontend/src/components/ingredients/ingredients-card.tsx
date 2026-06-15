"use client";

import { CircleCheck, TriangleAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { IngredientsFilter } from "./ingredients-filter";
import { mockIngredients } from "@/lib/mock/mock-ingredients";
import { cn } from "@/lib/utils";
import { INGREDIENT_CATEGORY_COLORS } from "@/constants/ingredients";
import { getBgColor } from "@/lib/utils/color";
import { IngredientsDialog } from "./ingredients-dialog";

export function IngredientsCard() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-wrap justify-between gap-2">
        {/* Search Bar */}
        <Input
          placeholder="Search name, current stock, or reorder level..."
          className="w-full sm:flex-1 lg:max-w-[450px]"
        />

        <IngredientsFilter />
      </div>

      <div className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockIngredients.map((ingredient) => (
          <Card key={ingredient.id}>
            <CardHeader className="w-full">
              <div className="flex flex-wrap items-center gap-1">
                <Badge
                  className={cn(
                    "flex-1 max-w-fit mr-auto",
                    INGREDIENT_CATEGORY_COLORS[ingredient.category],
                  )}>
                  <span className="truncate">{ingredient.category}</span>
                </Badge>

                <IngredientsDialog buttonSize="xs" className="text-gray-400" />
              </div>

              <CardTitle>{ingredient.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap justify-between">
                <span className="text-gray-500 text-xs">Stock Level</span>
                <p>
                  {ingredient.currentStock}{" "}
                  <span className="text-gray-500">
                    of {ingredient.initialStock} {ingredient.measurementUnit}
                  </span>
                </p>
              </div>

              <Progress
                value={
                  (ingredient.currentStock / ingredient.initialStock) * 100
                }
                className={cn(
                  "h-[8px]",
                  getBgColor(ingredient.status).progressDiv,
                )}
              />
            </CardContent>
            <CardFooter className="flex gap-2 text-xs justify-between flex-wrap">
              <span
                className={cn(
                  "flex items-center gap-1 font-medium",
                  getBgColor(ingredient.status).text,
                )}>
                {ingredient.status === "In Stock" ? (
                  <CircleCheck size={12} strokeWidth={2.5} />
                ) : (
                  <TriangleAlert size={12} strokeWidth={2.5} />
                )}
                {ingredient.status}
              </span>
              <p className="text-gray-500">
                Reorder at {ingredient.reorderLevel}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
