"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import egg from "@/assets/images/egg.jpg";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

export default function HomeCategoryCarousel() {
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
        {slides.map((item, i) => {
          return (
            <div className="">
              <Link href="" key={i} className="relative">
                <Image
                  src={egg}
                  alt="egg"
                  className="w-[200px] object-cover rounded-md h-[200px] "
                />

                <p className="px-5 py-1 text-white font-semibold bg-red-500 w-[100px] text-center rounded-xl absolute top-[164px] left-[54px]">
                  Eggs
                </p>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
