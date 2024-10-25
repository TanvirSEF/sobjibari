"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "@/assets/images/banner1.png";
import banner2 from "@/assets/images/banner2.png";
import banner3 from "@/assets/images/banner3.png";
import banner4 from "@/assets/images/banner4.png";
import Image from "next/image";
import Link from "next/link";
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

export default function NukaCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "-0px",
          top: "85%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link href="">
        <Image className="lg:h-[500px] rounded shadow" src={banner1} alt="banner1" />
      </Link>
      <Link href="">
        <Image className="lg:h-[500px] rounded shadow" src={banner2} alt="banner1" />
      </Link>
      <Link href="">
        <Image className="lg:h-[500px] rounded shadow" src={banner3} alt="banner1" />
      </Link>
      <Link href="">
        <Image className="lg:h-[500px] rounded shadow" src={banner4} alt="banner1" />
      </Link>
    </Slider>
  );
}
