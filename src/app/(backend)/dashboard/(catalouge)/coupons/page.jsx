import PageHeader from "@/components/backend/PageHeader";
import DataTable from "../../../../../components/data-table-components/DataTable";
import getData from "../../../../../lib/getData";
import React from "react";
import { columns } from "./columns";

export default async function Coupon() {
  const coupons = await getData("coupons");
  return (
    <div className="">
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      />

      <div className="py-4">
        <DataTable data={coupons} columns={columns} />
      </div>
    </div>
  );
}