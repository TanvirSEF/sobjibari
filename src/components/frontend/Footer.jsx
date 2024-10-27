import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/logos.png";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-200 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <Link href="" className="">
              <Image src={logo} alt="" className="w-[100px]" />
            </Link>
            <span className="font-semibold">
              Sobji Bari - Where Freshness Lives!
            </span>
            <p className="font-semibold">Call Us: 01305168181(8am to 8pm)</p>
            <p className="font-semibold">Mail Us: sobjibaribd@gmail.com</p>
          </div>
        </div>
        <div className="px-4 py-6 bg-green-100 dark:bg-gray-700 md:flex md:items-center md:justify-between rounded">
          <span className="text-sm text-gray-700 dark:text-gray-300 sm:text-center">
            © 2024 <a href="https://flowbite.com/">SobjiBari™</a>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-3 rtl:space-x-reverse items-center">
            <h3 className="font-semibold text-[18px]">Follow Us :</h3>
            <a
              href="#"
              target="_blank"
              className="text-white bg-green-700 rounded-xl px-[7px] py-[7px] hover:text-gray-200 dark:hover:text-white"
            >
              <Facebook className="w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white bg-green-700 rounded-xl px-[7px] py-[7px] hover:text-gray-200 dark:hover:text-white"
            >
              <Twitter className="w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white bg-green-700 rounded-xl px-[7px] py-[7px] hover:text-gray-200 dark:hover:text-white"
            >
              <Linkedin className="w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
