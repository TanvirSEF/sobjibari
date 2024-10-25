import Image from "next/image";
import React from "react";
import vege from "@/assets/images/FVegetables.png";
import promo from "@/assets/images/promo.png";
import cash from "@/assets/images/cash.png";
import delivey from "@/assets/images/delivery.png";
import blog from "@/assets/images/blog.png";


export default function () {
  return (
    <div className="mt-7 w-[full] flex gap-2">
      <div className="w-[20%]  rounded-lg h-[335px]">
        <Image
          height={1080}
          layout="responsive"
          width={1080}
          src={vege}
          alt="vegetables"
          className=" rounded shadow object-cover"
        />
      </div>
      <div className="w-[20%]  rounded-lg h-[335px]">
        <Image
          height={1080}
          layout="responsive"
          width={1080}
          src={promo}
          alt="vegetables"
          className=" rounded shadow object-cover"
        />
      </div>
      <div className="w-[20%]  rounded-lg h-[335px]">
        <Image
          height={1080}
          layout="responsive"
          width={1080}
          src={cash}
          alt="vegetables"
          className=" rounded shadow object-cover"
        />
      </div>
      <div className="w-[20%]  rounded-lg h-[335px]">
        <Image
          height={1080}
          layout="responsive"
          width={1080}
          src={delivey}
          alt="vegetables"
          className=" rounded shadow object-cover"
        />
      </div>
      <div className="w-[20%]  rounded-lg h-[335px]">
        <Image
          height={1080}
          layout="responsive"
          width={1080}
          src={blog}
          alt="vegetables"
          className=" rounded shadow object-cover"
        />
      </div>
    </div>
  );
}
