import ProductImages from "@/components/SinglePage/ProductImages";
import Container from "@/components/BasicComponents/Container";
import React from "react";
import CustomizeProducts from "@/components/SinglePage/CustomizeProducts";
import Add from "@/components/SinglePage/Add";

const SinglePage = () => {
  return (
    <Container>
      <div className="relative flex flex-col lg:flex-row gap-16">
        {/* IMG */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium">Product Name</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            veritatis illo obcaecati numquam deleniti laudantium quaerat hic
            cumque odit, nesciunt assumenda, repellat dicta esse. Facere a
            dignissimos illum delectus illo!
          </p>
          <div className="h-[2px] bg-gray-100" />
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">$59</h3>
            <h2 className="text-2xl font-medium">$49</h2>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <CustomizeProducts />
          <Add />
          <div className="h-[2px] bg-gray-100" />
          <div className="text-sm">
            <h4 className="font-medium mb-4">PRODUCT INFO</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              suscipit quaerat vel mollitia molestiae voluptatum eos minus
              blanditiis. Itaque, nemo! In beatae at voluptates fuga cupiditate
              ex, consectetur sit eveniet.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">RETURN & FUND POLICY</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              suscipit quaerat vel mollitia molestiae voluptatum eos minus
              blanditiis. Itaque, nemo! In beatae at voluptates fuga cupiditate
              ex, consectetur sit eveniet.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">SHIPPING INFO</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              suscipit quaerat vel mollitia molestiae voluptatum eos minus
              blanditiis. Itaque, nemo! In beatae at voluptates fuga cupiditate
              ex, consectetur sit eveniet.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
