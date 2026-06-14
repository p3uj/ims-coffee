import { INGREDIENT_STATUS } from "@/constants/ingredients";

export type IngredientStatus =
  (typeof INGREDIENT_STATUS)[keyof typeof INGREDIENT_STATUS];

export interface Ingredient {
  id: number;
  name: string;
  category: string;
  initialStock: number;
  currentStock: number;
  reorderLevel: number;
  status: IngredientStatus;
}
