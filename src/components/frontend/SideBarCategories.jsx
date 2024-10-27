import Image from "next/image";
import Link from "next/link";
import getData from "@/lib/getData";
import React from "react";

export default async function SideBarCategories() {
  const categories = await getData("categories");
  return (
    <div className="sm:col-span-3 sm:block h-[500px] bg-white border border-gray-300 rounded-lg dark:bg-slate-700 overflow-hidden hidden shadow dark:border-gray-700 text-slate-800">
      <h2 className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:border-gray-600 dark:text-slate-100 py-3 px-6 font-semibold text-[17px] border-b border-gray-300">
        Shop By Category({categories.length})
      </h2>
      <div className="py-3 px-6  h-[450px] overflow-y-auto flex flex-col gap-3">
        {categories.map((item, i) => {
          return (
            <Link
              key={i}
              href="#"
              className="flex items-center gap-3 hover:bg-slate-100 rounded-lg duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
            >
              <Image
                width={473}
                height={477}
                className="w-12 h-12 rounded-full object-cover border border-green-300"
                src={item.imageUrl}
                alt={item.title}
              />
              <span className="font-semibold">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
