
import Image from "next/image";
import React from "react";
import soya from "@/assets/images/soya.jpg";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import HomeCategoryCarousel from "@/components/frontend/HomeCategoryCarousel";
import HomeVegeCarousel from "@/components/frontend/HomeVegeCarousel";
export default function HomeCategory() {
  return (
    <div className="flex gap-2">
      {/* Deal */}
      <div className="w-[30%] h-[570px] rounded-lg shadow-lg">
        <div className="border-b rounded-lg bg-green-300">
          <h2 className="uppercase font-bold text-center py-3">
            Deal Of the day
          </h2>
        </div>
        <div className=" h-[350px] rounded relative flex justify-center">
          <Link href="#">
            <Image src={soya} alt="soya" className="w-[350px] h-[350px]" />
            <span className=" absolute top-5 left-5 px-4 py-1 bg-red-600 rounded-full text-white font-semibold">
              Sale
            </span>
          </Link>
        </div>
        <div className="px-6 flex flex-col">
          <Link
            href=""
            className="font-bold text-[20px] hover:text-green-500 duration-200"
          >
            Fresh Soyabean Oil 5ltr
          </Link>
          <del className="text-[17px]">TK 818.00</del>
          <span className="text-[20px] font-bold">TK 700.00</span>
          <Link
            href=""
            className="px-4 py-2 bg-green-600 w-[155px] text-center rounded-xl mt-4 text-slate-50 hover:bg-green-700 duration-200 flex gap-2 font-semibold"
          >
            <ShoppingBag /> Add To Cart
          </Link>
        </div>
      </div>
      {/* Category */}
      <div className="w-[70%] h-[570px]">
        <HomeCategoryCarousel />
        <HomeVegeCarousel/>
      </div>
    </div>
  );
}
