import React from "react";
import Breadcrums from "../../../components/frontend/Breadcrums";
import Image from "next/image";
import potato from "@/assets/images/potato.png";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  return (
    <div>
      <Breadcrums />
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-[20px] font-bold">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 font-semibold text-sm mb-4">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src={potato}
                  alt="potato"
                  width={500}
                  height={500}
                  className="rounded-xl w-[100px]"
                />
                <div className="flex flex-col">
                  <h2>Potato</h2>
                </div>
              </div>
              <div className="py-1 rounded-xl border border-gray-400 flex gap-3 items-center px-2">
                <button className="border-r border-gray-400 py-2 px-3">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-3">1</p>
                <button className="border-l border-gray-400 py-2 px-3">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <h2>BDT 60</h2>
                <button>
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-slate-400  pb-3 font-semibold text-sm mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src={potato}
                  alt="potato"
                  width={500}
                  height={500}
                  className="rounded-xl w-[100px]"
                />
                <div className="flex flex-col">
                  <h2>Potato</h2>
                </div>
              </div>
              <div className="py-1 rounded-xl border border-gray-400 flex gap-3 items-center px-2">
                <button className="border-r border-gray-400 py-2 px-3">
                  <Minus />
                </button>
                <p className="flex-grow py-2 px-3">1</p>
                <button className="border-l border-gray-400 py-2 px-3">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <h2>BDT 60</h2>
                <button>
                  <Trash2 className="text-red-600 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 py-8">
            <input
              type="email"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Coupon"
            />
            <button className="py-2.5 px-4 rounded-lg bg-green-600 shrink-0 text-white font-medium">Apply Coupon</button>
          </div>
        </div>
        <div className="col-span-4 sm:block bg-white border border-gray-300 rounded-lg dark:bg-slate-700 overflow-hidden hidden dark:border-gray-700 text-slate-800 p-5 font-bold">
          <h2 className="text-2xl pb-3">Cart Total</h2>
          <div className="flex items-center justify-between border-b border-slate-400 pb-6 mb-2 font-bold">
            <span>Subtotal</span>
            <span>BDT 60</span>
          </div>
          <div className="flex items-center justify-between pb-4 font-bold">
            <span>Vat/Tax</span>
            <span>BDT 00</span>
          </div>
          <div className="flex items-center justify-between pb-4 font-bold">
            <span>Shipping Cost</span>
            <span>BDT 25</span>
          </div>
          <p className="w-[300px] text-slate-500 ">
            We only Charge For Shipping when you have bought under 200 BDT
          </p>
          <div className="flex items-center justify-between pb-4 pt-4 mb-[100px] border-t border-slate-400 font-bold">
            <span>Total</span>
            <span>BDT 75</span>
          </div>
          <Link
            href="#"
            className="bg-green-700 hover:bg-green-800 duration-300 text-slate-100 rounded-lg py-2 px-4 font-semibold"
          >
            Continue To Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
