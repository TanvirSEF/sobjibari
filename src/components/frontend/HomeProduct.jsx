import Link from "next/link";
import React from "react";
import CategoryListCard from "@/components/frontend/CategoryListCard";

export default function HomeProduct({ item }) {
  return (
    <div className="mt-6 mb-[200px]">
      <div className="w-[100%] rounded-lg h-[335px]">
        <div className="w-full p-4 flex justify-between items-center h-[50px] border-b rounded shadow-md">
          <h3 className="font-bold text-[25px]">{item.title}</h3>
          <Link
            href=""
            className="px-4 py-2 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-red-800 duration-300"
          >
            See More
          </Link>
        </div>
        <div className="mt-2">
          <CategoryListCard products={item.products} />
        </div>
      </div>
    </div>
  );
}
