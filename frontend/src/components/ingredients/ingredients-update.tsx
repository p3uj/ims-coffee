import { Pencil, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function IngredientsUpdate() {
  return (
    <Dialog>
      <form action="" method="post">
        <DialogTrigger asChild>
          <Button size="sm" variant="ghost">
            <Pencil />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Ingredient</DialogTitle>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter ingredient's name..."
              />
            </Field>

            <Field>
              <Label htmlFor="initial_stock">Initial Stock</Label>
              <Input
                id="initial_stock"
                name="initial_stock"
                type="number"
                placeholder="Enter ingredient's initial stock..."
              />
            </Field>

            <Field>
              <Label htmlFor="current_stock">Current Stock</Label>
              <Input
                id="current_stock"
                name="current_stock"
                type="number"
                placeholder="Enter ingredient's current stock..."
              />
            </Field>

            <Field>
              <Label htmlFor="reorder_level">Reorder Level</Label>
              <Input
                id="reorder_level"
                name="reorder_level"
                type="number"
                placeholder="Enter ingredient's reorder level..."
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Update Ingredient</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
