import React from "react";
import Link from "next/link";
import Image from "next/image";

const resolveWixImage = (wixUrl: string) => {
  if (!wixUrl) return "/category.png";
  const fileId = wixUrl
    .replace("wix:image://v1/", "")
    .split("/")[0]
    .split("#")[0];
  return `https://static.wixstatic.com/media/${fileId}`;
};

export const CategoryItem = ({ category }: { category: any }) => {
  return (
    <Link
      href={`/list?cat=${category._id}&catName=${category.name}`}
      className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative bg-slate-100 w-full h-96">
        <Image
          src={resolveWixImage(category.image)}
          alt={category.name ?? ""}
          fill
          sizes="20vw"
          className="object-cover"
          unoptimized={true}
        />
      </div>
      <h1 className="mt-8 font-light text-xl">{category.name}</h1>
    </Link>
  );
};
