import React from "react";
import CommunityCarousel from "../frontend/CommunityCarousel";
import Link from "next/link";
import getData from "@/lib/getData";

export default async function CommunityBlog() {
  const trainings = await getData("trainings");
  return (
    <div className="mt-[200px]">
      <div className="w-full p-4 flex justify-between items-center h-[50px] border-b rounded shadow-md mb-3">
        <h3 className="font-bold text-[25px]">Sobji Bari Community Forum</h3>
        <Link
          href=""
          className="px-4 py-2 bg-red-500 rounded-lg text-white font-semibold cursor-pointer hover:bg-red-800 duration-300"
        >
          See More
        </Link>
      </div>
      <div className="">
        <CommunityCarousel trainings={trainings} />
      </div>
    </div>
  );
}
