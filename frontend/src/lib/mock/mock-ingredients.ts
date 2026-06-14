import { INGREDIENT_STATUS } from "@/constants/ingredients";
import { Ingredient } from "@/types/ingredients";

export const mockIngredients: Ingredient[] = [
  {
    id: 1,
    name: "Ingredient 1",
    initialStock: 30,
    currentStock: 20,
    reorderLevel: 5,
    status: INGREDIENT_STATUS.IN_STOCK,
  },
  {
    id: 2,
    name: "Ingredient 2",
    initialStock: 20,
    currentStock: 5,
    reorderLevel: 7,
    status: INGREDIENT_STATUS.LOW_STOCK,
  },
];
