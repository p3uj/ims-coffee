import { IngredientStatus } from "@/types/ingredients";

export function getBgColor(status: IngredientStatus) {
  if (status === "In Stock") {
    return {
      color: "green-500",
      color100: "green-100",
    };
  }

  if (status === "Low Stock") {
    return {
      color: "amber-500",
      color100: "amber-100",
    };
  }

  return {
    color: "red-500",
    color100: "red-100",
  };
}
