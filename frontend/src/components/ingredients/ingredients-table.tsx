import { mockIngredients } from "@/lib/mock/mock-ingredients";
import { DataTable } from "../ui/data-table";
import { ingredientsColumns } from "./ingredients-columns";

export function IngredientsTable() {
  return (
    <div>
      <DataTable columns={ingredientsColumns} data={mockIngredients} />
    </div>
  );
}
