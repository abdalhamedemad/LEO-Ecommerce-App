import React from "react";
import { ProductItem } from "./ProductItem";
import { WixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";

interface ProductListProps {
  categoryID?: string;
  limiit?: number;
}
const Product_PER_PAGE = 20;
export const ProductList = async ({ categoryID, limiit }: ProductListProps) => {
  const wixClient = await WixClientServer();
  const categoryId = categoryID || "b02998a4-cd0e-4180-ac3c-a7da259910fc";
  const limit = 4;
  let res;
  try {
    // Always fetch more products when filtering by category
    const fetchSize = categoryId ? 100 : limit || Product_PER_PAGE;

    const { items, ...rest } = await wixClient.products
      .queryProducts()
      .limit(fetchSize)
      .find();
    const filteredItems = categoryId
      ? items.filter((product) => product.collectionIds?.includes(categoryId))
      : items;
    // console.log("filteredItems", filteredItems.length);
    const paginatedItems = filteredItems.slice(0, limit || Product_PER_PAGE);

    // console.log({
    //   ...rest,
    //   items: paginatedItems,
    //   totalCount: filteredItems.length,
    // });
    res = {
      ...rest,
      items: paginatedItems,
      totalCount: filteredItems.length,
    };
    // console.log("limit", limit);
    // console.log("categoryId", categoryId);
  } catch (error) {
    console.error("Error querying products:", error);
    throw error;
  }
  // console.log(res.items);
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};
