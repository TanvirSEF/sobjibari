import React from "react";
import Button from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export default function SortableColumn({ column, title }) {
  return (
    <div className="">
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {title}
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
