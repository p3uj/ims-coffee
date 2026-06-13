"use client";

import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsHighlight,
  TabsHighlightItem,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/primitives/radix/tabs";
import { IngredientsCard } from "@/components/ingredients/ingredients-card";
import { IngredientsTable } from "@/components/ingredients/ingredients-table";
import { LayoutGrid, List } from "lucide-react";

export default function Ingredients() {
  return (
    <>
      <header>Ingredients</header>
      <main>
        <Tabs defaultValue="list">
          <TabsHighlight className="border-b-2 border-primary absolute z-0 inset-0">
            <TabsList className="h-10 inline-flex p-1 w-fit text-gray-500">
              <TabsHighlightItem value="list">
                <TabsTrigger
                  value="list"
                  className="flex items-center gap-2 px-4 py-2 leading-0 w-full text-sm cursor-pointer data-[state=active]:text-foreground">
                  <List size={16} />
                  <span>List</span>
                </TabsTrigger>
              </TabsHighlightItem>
              <TabsHighlightItem value="grid">
                <TabsTrigger
                  value="grid"
                  className="flex items-center gap-2 px-4 py-2 leading-0 w-full text-sm cursor-pointer data-[state=active]:text-foreground">
                  <LayoutGrid size={16} />
                  <span>Grid</span>
                </TabsTrigger>
              </TabsHighlightItem>
            </TabsList>
          </TabsHighlight>
          <TabsContents className="px-[1px]">
            {/* Mobile to Tablet View */}
            <TabsContent value="grid">
              <IngredientsCard />
            </TabsContent>

            {/* Laptop to Desktop View */}
            <TabsContent value="list">
              <IngredientsTable />
            </TabsContent>
          </TabsContents>
        </Tabs>
      </main>
    </>
  );
}
