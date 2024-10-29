import React from "react";
import Breadcrums from "@/components/frontend/Breadcrums";
import CategoryListCard from "@/components/frontend/CategoryListCard";
import Image from "next/image";
import dummy from "@/assets/images/potato.png";
import { BaggageClaim, Minus, Plus, Send, Share2, Tag } from "lucide-react";
import getData from "@/lib/getData";
import Link from "next/link";

export default async function ProductDetailPage({ params: { slug } }) {
  const category = await getData("/categories/670d6f3b2c5d27ba17121f22");
  return (
    <div>
      <Breadcrums />
      <div className="grid grid-cols-12 gap-8 my-8">
        <div className="col-span-3">
          <Image
            className="w-full"
            src={dummy}
            alt="dummy"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-3xl font-semibold">Potato</h2>
            <button>
              <Share2 />
            </button>
          </div>
          <div className="border-gray-300 border-b">
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate, quae? Deleniti impedit voluptates temporibus
              reiciendis possimus dolorum consequuntur id inventore, suscipit
              culpa velit doloremque nostrum.
            </p>
            <div className="flex items-center mb-4 gap-8">
              <p>SKU:232323</p>
              <p className="bg-green-200  py-1.5 px-4 rounded-full text-slate-900">
                <b>Stock:</b> 232
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 pt-4 border-gray-300 border-b pb-8">
            <div className="flex items-center gap-4 pt-4">
              <h4 className="text-2xl ">BDT 50</h4>
              <del className="text-slate-400 text-sm">BDT 60</del>
            </div>
            <p className="flex items-center">
              <Tag className="w-5 h-5 text-slate-400 me-2" />
              <span className="">Save 10%</span>
            </p>
          </div>
          <div className="flex justify-between items-center py-6">
            <div className="py-1 rounded-xl border border-gray-400 flex gap-3 items-center px-2">
              <button className="border-r border-gray-400 py-2 px-3">
                <Minus />
              </button>
              <p className="flex-grow py-2 px-3">1</p>
              <button className="border-l border-gray-400 py-2 px-3">
                <Plus />
              </button>
            </div>
            <button className="flex items-center space-x-2 bg-green-600 px-4 py-2 rounded-md text-white">
              <BaggageClaim />
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
        <div className="col-span-3 sm:block bg-white border border-gray-300 rounded-lg dark:bg-slate-700 overflow-hidden hidden dark:border-gray-700 text-slate-800">
          <h2 className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:border-gray-600 dark:text-slate-100 py-3 px-6 font-semibold text-[17px] border-b border-gray-300">
            Delivery Process
          </h2>
          <div className="p-4">
            <div className="flex rounded-lg py-2 px-4 bg-orange-400 text-slate-50 items-center gap-3">
              <span>Sobji Express</span>
              <Send />
            </div>
            <div className="py-3 text-slate-900 border-b border-gray-500">
              <span>Eligible for free delivery.</span>
              <Link href="#" className="text-orange-500">View Details</Link>
            </div>
            <h2 className="text-slate-900 py-2 font-semibold">Choose Your Location</h2>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className=" pb-3">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
           
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h2 className="mb-4 text- xl font-semibold text-slate-400 ml-3">
          Similar Products
        </h2>
        <CategoryListCard products={category.products} />
      </div>
    </div>
  );
}
