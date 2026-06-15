import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export interface ActionButtonProps {
  className?: string;
  buttonSize?: ButtonSize;
}
