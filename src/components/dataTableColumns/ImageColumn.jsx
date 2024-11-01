import Image from "next/image";
import React from "react";

export default function ImageColumn({ row, imageTitle }) {
  const imageUrl = row.getValue(`${imageTitle}`);
  return (
    <div className="shrink-0">
      <Image
        src={imageUrl}
        alt={`${imageTitle}`}
        height={500}
        width={500}
        className="w-24 h-24 rounded-full object-cover"
      />
    </div>
  );
}
