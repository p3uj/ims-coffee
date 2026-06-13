"use client";

import {
  ArchiveRestore,
  CircleCheck,
  Pencil,
  RotateCcw,
  Trash2,
  TriangleAlert,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsHighlight,
  TabsHighlightItem,
  TabsList,
  TabsTrigger,
} from "../animate-ui/primitives/radix/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Filter } from "../ui/filter";

export function IngredientsCard() {
  const filterCategory = [
    { value: "all", label: "All" },
    { value: "syrups", label: "Syrups" },
    { value: "dairy", label: "Dairy" },
    { value: "beans", label: "Beans" },
  ];

  const filterStatus = [
    { value: "all", label: "All" },
    { value: "in stock", label: "In Stock" },
    { value: "low stock", label: "Low Stock" },
    { value: "out of stock", label: "Out of Stock" },
  ];

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-wrap justify-between gap-2">
        {/* Search Bar */}
        <Input
          placeholder="Search name, current stock, or reorder level..."
          className="w-full sm:flex-1 lg:max-w-[450px]"
        />

        <section className="flex flex-1 sm:flex-0 gap-2">
          {/* Category Filter */}
          <Filter
            title="Category"
            label="Filter Category"
            options={filterCategory}
          />

          {/* Status Filter */}
          <Filter title="Status" label="Filter Status" options={filterStatus} />

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
        </section>
      </div>

      <Tabs defaultValue="all">
        <div className="flex justify-end">
          <TabsHighlight className="bg-background absolute z-0 inset-0 rounded-full">
            <TabsList className="h-10 inline-flex p-1 bg-accent w-fit rounded-full">
              <TabsHighlightItem value="all">
                <TabsTrigger
                  value="all"
                  className="h-full px-4 py-2 leading-0 w-full text-sm cursor-pointer">
                  All
                </TabsTrigger>
              </TabsHighlightItem>
              <TabsHighlightItem value="archived">
                <TabsTrigger
                  value="archived"
                  className="h-full px-4 py-2 leading-0 w-full text-sm cursor-pointer">
                  Archived
                </TabsTrigger>
              </TabsHighlightItem>
            </TabsList>
          </TabsHighlight>
        </div>
        <TabsContents className="px-[1px] py-3">
          <TabsContent
            value="all"
            className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="w-full">
                <div className="flex flex-wrap items-center gap-1">
                  <Badge className="flex-1 max-w-fit mr-auto bg-purple-50 text-purple-500">
                    <span className="truncate">Syrups</span>
                  </Badge>

                  <Button
                    size="xs"
                    variant="ghost"
                    className="w-fit px-[6px] text-gray-400">
                    <Pencil />
                  </Button>
                  <Button
                    size="xs"
                    variant="ghost"
                    className="w-fit px-[6px] text-gray-400 hover:text-red-500 hover:bg-red-50">
                    <Trash2 />
                  </Button>
                </div>

                <CardTitle>Vanilla Syrup</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap justify-between">
                  <span className="text-gray-500 text-xs">Stock Level</span>
                  <p>
                    20 <span className="text-gray-500">of 30 bottles</span>
                  </p>
                </div>

                <Progress
                  value={(20 / 30) * 100}
                  className="h-[8px] [&>div]:bg-green-500"
                />
              </CardContent>
              <CardFooter className="flex gap-2 text-xs justify-between flex-wrap">
                <span className="flex items-center gap-1 text-green-500 font-semibold">
                  <CircleCheck size={12} />
                  In stock
                </span>
                <p className="text-gray-500">Reorder at 5</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="w-full">
                <div className="flex flex-wrap items-center gap-1">
                  <Badge className="flex-1 max-w-fit mr-auto bg-sky-50 text-sky-500">
                    <span className="truncate">Dairy</span>
                  </Badge>

                  <Button
                    size="xs"
                    variant="ghost"
                    className="w-fit px-[6px] text-gray-400">
                    <Pencil />
                  </Button>
                  <Button
                    size="xs"
                    variant="ghost"
                    className="w-fit px-[6px] text-gray-400 hover:text-red-500 hover:bg-red-50">
                    <Trash2 />
                  </Button>
                </div>

                <CardTitle>Whole Milk</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap justify-between">
                  <span className="text-gray-500 text-xs">Stock Level</span>
                  <p>
                    10 <span className="text-gray-500">of 50 liters</span>
                  </p>
                </div>

                <Progress
                  value={(10 / 50) * 100}
                  className="h-[8px] [&>div]:bg-amber-500"
                />
              </CardContent>
              <CardFooter className="flex gap-2 text-xs justify-between flex-wrap">
                <span className="flex items-center gap-1 text-amber-500 font-semibold">
                  <TriangleAlert size={12} />
                  Low stock
                </span>
                <p className="text-gray-500">Reorder at 10</p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="w-full">
                <div className="flex flex-wrap items-center gap-1">
                  <Badge className="flex-1 max-w-fit mr-auto bg-orange-50 text-orange-500">
                    <span className="truncate">Beans</span>
                  </Badge>

                  <Button
                    size="xs"
                    variant="ghost"
                    className="w-fit px-[6px] text-gray-400">
                    <Pencil />
                  </Button>
                  <Button
                    size="xs"
                    variant="ghost"
                    className="w-fit px-[6px] text-gray-400 hover:text-red-500 hover:bg-red-50">
                    <Trash2 />
                  </Button>
                </div>

                <CardTitle>Espresso Beans</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap justify-between">
                  <span className="text-gray-500 text-xs">Stock Level</span>
                  <p>
                    0 <span className="text-gray-500">of 20 kg</span>
                  </p>
                </div>

                <Progress
                  value={(0 / 20) * 100}
                  className="h-[8px] [&>div]:bg-red-500"
                />
              </CardContent>
              <CardFooter className="flex gap-2 text-xs justify-between flex-wrap">
                <span className="flex items-center gap-1 text-red-500 font-semibold">
                  <TriangleAlert size={12} />
                  Out of stock
                </span>
                <p className="text-gray-500">Reorder at 8</p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent
            value="archived"
            className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="w-full">
                <div className="flex flex-wrap items-center gap-1">
                  <Badge className="flex-1 max-w-fit mr-auto bg-purple-50 text-purple-500">
                    <span className="truncate">Syrups</span>
                  </Badge>

                  <Button
                    size="xs"
                    variant="ghost"
                    className="w-fit px-[6px] text-gray-400">
                    <ArchiveRestore />
                  </Button>
                </div>

                <CardTitle>Vanilla Syrup</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-2">
                <div className="flex flex-wrap justify-between">
                  <span className="text-gray-500 text-xs">Stock Level</span>
                  <p>
                    20 <span className="text-gray-500">of 30 bottles</span>
                  </p>
                </div>

                <Progress
                  value={(20 / 30) * 100}
                  className="h-[8px] [&>div]:bg-green-500"
                />
              </CardContent>
              <CardFooter className="flex gap-2 text-xs justify-between flex-wrap">
                <span className="flex items-center gap-1 text-green-500 font-semibold">
                  <CircleCheck size={12} />
                  In stock
                </span>
                <p className="text-gray-500">Reorder at 5</p>
              </CardFooter>
            </Card>
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
