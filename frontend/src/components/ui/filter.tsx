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

interface FilterProps {
  title: string;
  label?: string;
  options: FilterOption[];
}

export function Filter({ title, label, options }: FilterProps) {
  const [selectedOption, setSelectedOption] = useState<string>("All");

  const handleValueChange = (value: string) => {
    const optionLabel =
      options.find((opt) => opt.value === value)?.label ?? "All";

    setSelectedOption(optionLabel);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex-1">
          <FilterIcon />
          {selectedOption === "All" ? title : selectedOption}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}

          <DropdownMenuRadioGroup
            value={selectedOption}
            onValueChange={handleValueChange}>
            {options.map((option) => (
              <DropdownMenuRadioItem key={option.id} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
