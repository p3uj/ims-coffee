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
  const defaultSelectedOption = {
    id: 0,
    value: "all",
    label: "All",
  };
  const [selectedOption, setSelectedOption] = useState<FilterOption>(
    defaultSelectedOption,
  );

  const handleValueChange = (value: string) => {
    const matchedValue =
      options.find((opt) => opt.value === value) ?? defaultSelectedOption;

    setSelectedOption(matchedValue);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex-1">
          <FilterIcon />
          {selectedOption.label === "All" ? title : selectedOption.label}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}

          <DropdownMenuRadioGroup
            value={selectedOption.value}
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
