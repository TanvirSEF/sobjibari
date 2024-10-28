"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import { Card } from "flowbite-react";
import tomato from "@/assets/images/tomato.jpg";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer h-[25px] w-[25px] bg-green-400 rounded-md justify-center items-center absolute top-[45%] lg:left-[-5px] left-0 z-50"
    >
      <ArrowLeft className="  text-white" />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="flex cursor-pointer h-[25px] w-[25px] bg-green-400 rounded-md justify-center items-center absolute top-[45%] lg:right-[-5px] right-0 z-50"
      onClick={onClick}
    >
      <ArrowRight className=" text-white" />
    </div>
  );
}

export default function CategoryListCard({ products }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const slides = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((item, i) => {
          return (
            <Card key={i} className="max-w-[280px] max-h-[450px]">
              <Link href={`/products/${item.slug}`}>
                <Image
                  src={item.imageUrl}
                  height={400}
                  width={400}
                  alt={item.title}
                  className="h-[200px] object-cover"
                />
              </Link>
              <p className="text-[13px] text-gray-500">Delivery 30-45 mins</p>
              <Link href={`/products/${item.slug}`}>
                <h5 className="text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </Link>
              <div className="flex items-center gap-4">
                <del className="text-[18px] font-medium text-gray-900 dark:text-white">
                  BDT {item.productPrice}
                </del>
                <span className="text-[20px] font-bold text-gray-900 dark:text-white">
                  BDT {item.productSalePrice}/{item.unit}
                </span>
              </div>
              <Link
                href="#"
                className="rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 flex items-center justify-center gap-2"
              >
                <ShoppingBag />
                Add to cart
              </Link>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
}
