import {
  INGREDIENT_CATEGORIES,
  INGREDIENT_STATUS,
  MEASUREMENT_UNITS,
} from "@/constants/ingredients";

export type IngredientStatus =
  (typeof INGREDIENT_STATUS)[keyof typeof INGREDIENT_STATUS];

export type IngredientCategory =
  (typeof INGREDIENT_CATEGORIES)[keyof typeof INGREDIENT_CATEGORIES];

export type MeasurementUnit =
  (typeof MEASUREMENT_UNITS)[keyof typeof MEASUREMENT_UNITS];

export interface Ingredient {
  id: number;
  name: string;
  category: IngredientCategory;
  measurementUnit: MeasurementUnit;
  initialStock: number;
  currentStock: number;
  reorderLevel: number;
  status: IngredientStatus;
}
