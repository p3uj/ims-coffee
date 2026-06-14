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
