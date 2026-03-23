import ProductImages from "@/components/SinglePage/ProductImages";
import Container from "@/components/BasicComponents/Container";
import React from "react";
import CustomizeProducts from "@/components/SinglePage/CustomizeProducts";
import Add from "@/components/SinglePage/Add";
import { WixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

const SinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log("slug", slug);
  const wixClient = await WixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();
  console.log("product", products);
  if (!products?.items[0]) {
    return notFound();
  }
  const product = products?.items[0];
  return (
    <Container>
      <div className="relative flex flex-col lg:flex-row gap-16">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages items={product?.media?.items} />
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">{product.name}</h1>
          <p
            className="text-gray-500"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
          <div className="h-[2px] bg-gray-100" />
          <div className="flex items-center gap-4">
            {product.price?.price === product.price?.discountedPrice ? (
              <h3 className="text-2xl font-medium">${product.price?.price}</h3>
            ) : (
              <>
                <h3 className="text-xl text-gray-500 line-through">
                  ${product.price?.price}
                </h3>
                <h2 className="text-2xl font-medium">
                  ${product.price?.discountedPrice}
                </h2>
              </>
            )}
          </div>
          <div className="h-[2px] bg-gray-100" />
          <CustomizeProducts />
          <Add />
          <div className="h-[2px] bg-gray-100" />
          {product.additionalInfoSections?.map((section: any) => (
            <div className="text-sm" key={section.title}>
              <h4 className="font-lg mb-4 uppercase font-bold">
                {section.title}
              </h4>
              <p dangerouslySetInnerHTML={{ __html: section.description }}></p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
