import React from "react";
import { Button } from "@/components/ui/button";
import Deletebtn from "@/components/Actions/Deletebtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export default function ActionColumn({ row, title, endpoint }) {
  const isActive = row.isActive;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Deletebtn title={title} endpoint={endpoint} />
        </DropdownMenuItem>
        <DropdownMenuItem>Edit {title}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
