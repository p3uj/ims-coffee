import { RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { Filter } from "../ui/filter";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { CATEGORY_STATUS } from "@/constants/ingredients";

export function IngredientsFilter() {
  const filterCategory = [
    { id: 0, value: "all", label: "All" },
    { id: 1, value: "syrups", label: "Syrups" },
    { id: 2, value: "dairy", label: "Dairy" },
    { id: 3, value: "beans", label: "Beans" },
  ];

  return (
    <div className="flex flex-1 sm:flex-0 gap-2">
      {/* Category Filter */}
      <Filter
        title="Category"
        label="Filter Category"
        options={filterCategory}
      />

      {/* Status Filter */}
      <Filter title="Status" label="Filter Status" options={CATEGORY_STATUS} />

      {/* Reset Filters */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">
            <RotateCcw />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Reset filters</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
