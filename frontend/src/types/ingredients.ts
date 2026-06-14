import {
  INGREDIENT_CATEGORIES,
  INGREDIENT_STATUS,
} from "@/constants/ingredients";

export type IngredientStatus =
  (typeof INGREDIENT_STATUS)[keyof typeof INGREDIENT_STATUS];

export type IngredientCategory =
  (typeof INGREDIENT_CATEGORIES)[keyof typeof INGREDIENT_CATEGORIES];

export interface Ingredient {
  id: number;
  name: string;
  category: IngredientCategory;
  initialStock: number;
  currentStock: number;
  reorderLevel: number;
  status: IngredientStatus;
}
