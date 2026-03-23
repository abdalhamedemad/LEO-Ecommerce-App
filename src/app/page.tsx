import { CategoryList } from "@/components/Category/CategoryList";
import { Footer } from "@/components/Footer";
import { ProductList } from "@/components/Product/ProductList";
import { Slider } from "@/components/Slider";
import { WixClientServer } from "@/lib/wixClientServer";
import { Suspense } from "react";

// we use async because we will be fetching data from wix server side (server component)
const HomePage = async () => {
  // const wixClient = useWixClient();
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };
  //   getProduct();
  // }, [wixClient]);
  // const wixClient = await WixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // here will be logged on server side
  // console.log("server side", res);
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured product</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList
            // ! means we are sure that this env variable will be present
            categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12 ">
          Categories
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New product</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList categoryID="cca309e8-1e59-42a7-8a22-4b37ad1f7525" />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
