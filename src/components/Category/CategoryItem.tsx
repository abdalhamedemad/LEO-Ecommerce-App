import React from "react";
import Link from "next/link";
import Image from "next/image";

export const CategoryItem = () => {
  return (
    <Link
      href="/list?cat=test"
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src="https://images.pexels.com/photos/33827168/pexels-photo-33827168.jpeg"
          alt=""
          fill
          sizes="20vw"
          className="object-cover"
        />
        <h1 className="mt-8 font-light text-xl ">category</h1>
      </div>
    </Link>
  );
};
