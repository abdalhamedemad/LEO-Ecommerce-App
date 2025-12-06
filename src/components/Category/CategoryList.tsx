import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CategoryItem } from "./CategoryItem";

export const CategoryList = () => {
  return (
    // we cannot hide the scrollbar using tailwind so we create a custom class in globals.css
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};
