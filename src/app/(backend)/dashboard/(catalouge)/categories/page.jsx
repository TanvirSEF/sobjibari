import PageHeader from "@/components/backend/PageHeader";
import TableAction from "@/components/backend/TableAction";
import DataTable from "../../../../../components/data-table-components/DataTable";
import getData from "../../../../../lib/getData";
import React from "react";
import { columns } from "./columns";

export default async function Category() {
  const categories = await getData("categories");
  return (
    <div className="">
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />

      <div className="py-8">
        <DataTable data={categories} columns={columns} />
      </div>
    </div>
  );
}
