import PageHeader from "@/components/backend/PageHeader";
import DataTable from "../../../../components/data-table-components/DataTable";
import getData from "../../../../lib/getData";
import React from "react";
import { columns } from "./columns";

export default async function Products() {
  const trainings = await getData("trainings");
  return (
    <div className="">
      <PageHeader
         heading="Sobji Bari Community"
         href="/dashboard/community/new"
         linkTitle="Add Training"
      />

      <div className="py-4">
        <DataTable data={trainings} columns={columns} />
      </div>
    </div>
  );
}