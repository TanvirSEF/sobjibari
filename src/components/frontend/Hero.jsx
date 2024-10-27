import React from "react";
import NukaCarousel from "@/components/frontend/NukaCarousel";
import SideBarCategories from "@/components/frontend/SideBarCategories";
import {
  BadgeCheck,
  CreditCard,
  HandCoins,
  HeadphonesIcon,
  PackageCheck,
} from "lucide-react";
import getData from "@/lib/getData";
export default async function Hero() {
  const banners = await getData("banners");
  return (
    <div className="grid grid-cols-12 lg:gap-8">
      <SideBarCategories />
      {/* Sidebar */}
      {/* Banner */}
      <div className="sm:col-span-7 col-span-full">
        <NukaCarousel banners={banners} />
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
