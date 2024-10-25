import React from "react";
import vegetable from "../../assets/images/potato.png";
import Link from "next/link";
import Image from "next/image";
import NukaCarousel from "@/components/frontend/NukaCarousel";
import {
  BadgeCheck,
  CreditCard,
  HandCoins,
  HeadphonesIcon,
  PackageCheck,
} from "lucide-react";
export default function Hero() {
  const categories = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="grid grid-cols-12 lg:gap-8">
      <div className="sm:col-span-3 sm:block h-[500px] bg-white border border-gray-300 rounded-lg dark:bg-slate-700 overflow-hidden hidden shadow dark:border-gray-700 text-slate-800">
        <h2 className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:border-gray-600 dark:text-slate-100 py-3 px-6 font-semibold text-[17px] border-b border-gray-300">
          Shop By Category
        </h2>
        <div className="py-3 px-6  h-[500px] overflow-y-auto flex flex-col gap-3">
          {categories.map((item, i) => {
            return (
              <Link
                key={i}
                href=""
                className="flex items-center gap-3 hover:bg-slate-100 rounded-lg duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600"
              >
                <Image
                  width={473}
                  height={477}
                  className="w-12 h-12 rounded-full object-cover border border-green-300"
                  src={vegetable}
                  alt="vegetables"
                />
                <span className="font-semibold">Vegetables</span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Sidebar */}
      {/* Banner */}
      <div className="sm:col-span-7 col-span-full">
        <NukaCarousel />
      </div>
      <div className="col-span-2 hidden sm:block h-[500px] space-y-5">
        <div className="flex items-center gap-2 py-4 border border-green-400 rounded bg-green-100">
          <div className="ml-2 p-2 bg-green-500 rounded-full">
            <PackageCheck className="text-white" />
          </div>
          <div className="">
            <h2 className="font-bold text-[16px] dark:text-slate-800">
              30-45 Mins Delivery
            </h2>
            <p className="font-semibold text-[14px] dark:text-slate-800">
              Free shipping over 200Tk
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 border border-green-400 rounded bg-green-100">
          <div className="ml-2 p-2 bg-green-500 rounded-full">
            <BadgeCheck className="text-white" />
          </div>
          <div className="">
            <h2 className="font-bold text-[16px] dark:text-slate-800">
              Authentic Products
            </h2>
            <p className="font-semibold text-[14px] dark:text-slate-800">
              within 2hr return Policy
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 border border-green-400 rounded bg-green-100">
          <div className="ml-2 p-2 bg-green-500 rounded-full">
            <HeadphonesIcon className="text-white" />
          </div>
          <div className="">
            <h2 className="font-bold text-[16px] dark:text-slate-800">
              Customer Support
            </h2>
            <p className="font-semibold text-[14px] dark:text-slate-800">
              Everyday 8am to 8pm
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 border border-green-400 rounded bg-green-100">
          <div className="ml-2 p-2 bg-green-500 rounded-full">
            <CreditCard className="text-white" />
          </div>
          <div className="">
            <h2 className="font-bold text-[16px] dark:text-slate-800">
              Flexible Payment
            </h2>
            <p className="font-semibold text-[14px] dark:text-slate-800">
              Cash on Delivery
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 py-4 border border-green-400 rounded bg-green-100">
          <div className="ml-2 p-2 bg-green-500 rounded-full">
            <HandCoins className="text-white" />
          </div>
          <div className="">
            <h2 className="font-bold text-[16px] dark:text-slate-800">
              Get Best Deals
            </h2>
            <p className="font-semibold text-[14px] dark:text-slate-800">
              Save Your Money & Time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
