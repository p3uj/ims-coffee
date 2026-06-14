import { IngredientCategory } from "@/types/ingredients";

export const CATEGORY_STATUS: FilterOption[] = [
  { id: 0, value: "all", label: "All" },
  { id: 1, value: "in stock", label: "In Stock" },
  { id: 2, value: "low stock", label: "Low Stock" },
  { id: 3, value: "out of stock", label: "Out of Stock" },
] as const;

export const INGREDIENT_STATUS = {
  IN_STOCK: "In Stock",
  LOW_STOCK: "Low Stock",
  OUT_OF_STOCK: "Out of Stock",
} as const;

export const INGREDIENT_CATEGORIES = {
  COFFEE_BEANS: "Coffee Beans",
  MILK_AND_DAIRY: "Milk & Dairy",
  SYRUPS_AND_SAUCES: "Syrups & Sauces",
  SWEETENERS: "Sweeteners",
  TEA_AND_POWDERS: "Tea & Powders",
  FRUIT_AND_FLAVORS: "Fruit & Flavorings",
  TOPPINGS: "Toppings",
  PACKAGING: "Packaging",
  BAKERY: "Bakery",
  CONDIMENTS: "Condiments",
} as const;

export const INGREDIENT_CATEGORY_COLORS: Record<IngredientCategory, string> = {
  [INGREDIENT_CATEGORIES.COFFEE_BEANS]: "bg-amber-700 text-amber-50",
  [INGREDIENT_CATEGORIES.MILK_AND_DAIRY]: "bg-sky-100 text-sky-800",
  [INGREDIENT_CATEGORIES.SYRUPS_AND_SAUCES]: "bg-rose-100 text-rose-800",
  [INGREDIENT_CATEGORIES.SWEETENERS]: "bg-yellow-100 text-yellow-800",
  [INGREDIENT_CATEGORIES.TEA_AND_POWDERS]: "bg-emerald-100 text-emerald-800",
  [INGREDIENT_CATEGORIES.FRUIT_AND_FLAVORS]: "bg-orange-100 text-orange-800",
  [INGREDIENT_CATEGORIES.TOPPINGS]: "bg-fuchsia-100 text-fuchsia-800",
  [INGREDIENT_CATEGORIES.PACKAGING]: "bg-slate-100 text-slate-800",
  [INGREDIENT_CATEGORIES.BAKERY]: "bg-stone-100 text-stone-800",
  [INGREDIENT_CATEGORIES.CONDIMENTS]: "bg-cyan-100 text-cyan-800",
};

export const MEASUREMENT_UNITS = {
  GRAMS: "g",
  KILOGRAMS: "kg",
  MILLILITERS: "ml",
  LITERS: "L",
  PIECES: "pcs",
  PACKS: "pack",
  BOXES: "box",
} as const;
