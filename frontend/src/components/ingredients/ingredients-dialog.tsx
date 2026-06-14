import { Pencil, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
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

export function IngredientsDialog() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Pencil />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Ingrident's Name</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger>
          <Trash2 />
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
