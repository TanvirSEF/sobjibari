import PageHeader from "@/components/backend/PageHeader";
import DataTable from "../../../../../components/data-table-components/DataTable";
import getData from "../../../../../lib/getData";
import React from "react";
import { columns } from "./columns";

export default async function Products() {
  const products = await getData("products");
  return (
    <div className="">
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add Products"
      />

      <div className="py-4">
        <DataTable data={products} columns={columns} filterKeys={["title"]} />
      </div>
    </div>
  );
}
