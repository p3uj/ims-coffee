import { FilterIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterProps {
  title: string;
  label?: string;
  options: FilterOption[];
}

export function Filter({ title, label, options }: FilterProps) {
  const [selectedOption, setSelectedOption] = useState<string>("all");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex-1">
          <FilterIcon />
          {selectedOption === "all" ? title : selectedOption}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}

          <DropdownMenuRadioGroup
            value={selectedOption}
            onValueChange={setSelectedOption}>
            {options.map((option, index) => (
              <DropdownMenuRadioItem key={index} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
