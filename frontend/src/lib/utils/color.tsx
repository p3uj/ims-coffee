import { IngredientStatus } from "@/types/ingredients";

export function getBgColor(status: IngredientStatus) {
  if (status === "In Stock") {
    return {
      text: "text-green-500",
      bg: "bg-green-100",
      indicator: "before:bg-green-500",
      progressDiv: "[&>div]:bg-green-500",
    };
  }

  if (status === "Low Stock") {
    return {
      text: "text-amber-500",
      bg: "bg-amber-100",
      indicator: "before:bg-amber-500",
      progressDiv: "[&>div]:bg-amber-500",
    };
  }

  return {
    text: "text-red-500",
    bg: "bg-red-100",
    indicator: "before:bg-red-500",
    progressDiv: "[&>div]:bg-red-500",
  };
}
