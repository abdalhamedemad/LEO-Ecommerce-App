import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductItem = () => {
  return (
    <Link href="/" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        {/* in case of fill we must make the parent relative */}
        <Image
          src="https://images.pexels.com/photos/33827168/pexels-photo-33827168.jpeg"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-1000"
        />
        <Image
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Product</span>
        <span className="font-semibold">$49</span>
      </div>
      <div className="text-sm text-gray-500">my description</div>
      <button className="w-max rounded-2xl ring-1 ring-lightRed text-lightRed py-2 px-4 text-xs hover:bg-lightRed hover:text-white">
        Add to Cart
      </button>
    </Link>
  );
};
