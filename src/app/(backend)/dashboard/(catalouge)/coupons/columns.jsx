"use client";
import Image from "next/image";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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
    accessorKey: "couponCode",
    header: "Coupon Code",
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
    accessorKey: "expireDate",
    header: "Date Expire",
    cell: ({ row }) => {
      const expireDate = row.getValue("expireDate");
      const originalDate = new Date(expireDate);
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
    accessorKey: "isActive",
    header: "IsActive",
  },
 
  {
    id: "actions",
    cell: ({ row }) => {
      const coupon = row.original;
      return (
        <ActionColumn
          row={row}
          title="Coupon"
          endpoint={`coupons/${coupon.id}`} // Corrected here
        />
      );
    },
  },
];
