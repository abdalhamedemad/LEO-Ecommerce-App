import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CategoryItem } from "./CategoryItem";
import { WixClientServer } from "@/lib/wixClientServer";
export const CategoryList = async () => {
  const wixClient = await WixClientServer();

  // Step 1: get all products using V1 products (works on your site)
  const { items: products } = await wixClient.products
    .queryProducts()
    .limit(100)
    .find();

  // Step 2: extract unique collection IDs from all products
  const uniqueCategoryIds = [
    ...new Set(products.flatMap((product) => product.collectionIds ?? [])),
  ];

  console.log("unique category IDs:", uniqueCategoryIds);

  // Step 3: get treeReference from root
  const root = await wixClient.productsV3.getAllProductsCategory();

  // Step 4: fetch each category by ID
  const categories = await Promise.all(
    uniqueCategoryIds.map((id) =>
      wixClient.categories.getCategory(id, root.treeReference, {
        fields: ["BREADCRUMBS_INFO"],
      }),
    ),
  );

  console.log("categories:", JSON.stringify(categories, null, 2));

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {categories.map((category) => (
          <CategoryItem category={category} key={category._id} />
        ))}
      </div>
    </div>
  );
};
