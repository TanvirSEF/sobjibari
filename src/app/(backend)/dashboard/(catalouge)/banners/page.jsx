import PageHeader from "@/components/backend/PageHeader";
import DataTable from "../../../../../components/data-table-components/DataTable";
import getData from "../../../../../lib/getData";
import React from "react";
import { columns } from "./columns";

export default async function Banner() {
  const banners = await getData("banners");
  return (
    <div className="">
      <PageHeader
        heading="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add Banner"
      />

      <div className="py-4">
        <DataTable data={banners} columns={columns} />
      </div>
    </div>
  );
}
