import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { IngredientsUpdate } from "./ingredients-update";
import { Button } from "../ui/button";
import { ActionButtonProps } from "@/types/ui";
import { cn } from "@/lib/utils";

export function IngredientsDialog({
  className,
  buttonSize = "sm",
}: ActionButtonProps) {
  return (
    <div className="flex">
      <IngredientsUpdate buttonSize={buttonSize} className={className} />

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size={buttonSize}
            variant="ghost"
            className={cn(
              "px-[6px] hover:text-red-500 hover:bg-red-50",
              className,
            )}>
            <Trash2 />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete ingredient's name? This action can
              be recover.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Yes, delete this ingredient</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
