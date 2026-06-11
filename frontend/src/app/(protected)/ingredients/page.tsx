import { IngredientsCard } from "@/components/ingredients/ingredients-card";
import { IngredientsTable } from "@/components/ingredients/ingredients-table";

export default function Ingredients() {
  return (
    <>
      <header>Ingredients</header>
      <main>
        {/* Mobile View */}
        <IngredientsCard />

        {/* Laptop to Desktop View */}
        <IngredientsTable />
      </main>
    </>
  );
}
