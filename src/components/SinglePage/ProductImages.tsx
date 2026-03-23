"use client";
import Image from "next/image";
import React, { useState } from "react";
const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/32099824/pexels-photo-32099824.jpeg",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/14866350/pexels-photo-14866350.jpeg",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/33072744/pexels-photo-33072744.jpeg",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/34794612/pexels-photo-34794612.jpeg",
  },
];
const ProductImages = ({ items }: { items: any }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        {/* size 50vw means the image will take up 50% of the viewport width i.e size is the max width*/}
        <Image
          src={items[mainImageIndex].image?.url}
          alt="Product Image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
          unoptimized={true}
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item: any, index: number) => (
          <div key={item._id} className="w-1/4 h-32 relative cursor-pointer ">
            <Image
              src={item?.image?.url}
              alt={`Product Image ${index + 1}`}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
              onClick={() => setMainImageIndex(index)}
              unoptimized={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductImages;
