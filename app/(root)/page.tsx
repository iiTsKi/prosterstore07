import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { NEW_ARRIVALS_DISPLAY_LIMIT } from "@/lib/constants";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
};
const HomePage = async () => {
  return (
    <>
      <div className="">
        <ProductList
          data={sampleData.products}
          title="Newest Arrivals"
          limit={NEW_ARRIVALS_DISPLAY_LIMIT}
        />
      </div>
    </>
  );
};

export default HomePage;
