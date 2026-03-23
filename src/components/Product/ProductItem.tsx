import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "@wix/stores";

export const ProductItem = ({ product }: { product: products.Product }) => {
  return (
    <Link
      href={"/" + product.slug}
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
    >
      <div className="relative w-full h-80">
        {/* in case of fill we must make the parent relative */}
        <Image
          src={product.media?.mainMedia?.image?.url || "/product.png"}
          alt=""
          fill
          quality={70}
          unoptimized={true}
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-1000"
        />
        {product.media?.items && (
          <Image
            src={product.media?.items[1]?.image?.url || "/product.png"}
            alt=""
            fill
            sizes="25vw"
            unoptimized={true}
            quality={70}
            className="absolute object-cover rounded-md"
          />
        )}
      </div>
      <div className="flex justify-between">
        <span className="font-medium">{product.name}</span>
        <span className="font-semibold">${product.price?.price}</span>
      </div>
      <div className="text-sm text-gray-500">my description</div>
      <button className="w-max rounded-2xl ring-1 ring-lightRed text-lightRed py-2 px-4 text-xs hover:bg-lightRed hover:text-white">
        Add to Cart
      </button>
    </Link>
  );
};
