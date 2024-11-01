"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ActionColumn from "@/components/dataTableColumns/ActionColumn";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Banner Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl");
      return (
        <Image
          src={imageUrl}
          height={500}
          width={500}
          className="w-24 h-24 rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "link",
    header: "Banner Link",
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt");
      const originalDate = new Date(createdAt);
      const day = originalDate.getDate();
      const month = originalDate.toLocaleDateString("default", {
        month: "short",
      });
      const year = originalDate.getFullYear();
      const formatted = `${day}th ${month} ${year}`;
      return <div className="">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionColumn row={row} title="Banner" />,
  },
];
