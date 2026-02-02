import React from "react";
import ProductListing from "./ProductListing";
import CategoryBanner from "./CategoryBanner";

const Categrory = ({ products, category }) => {
  return (
    <div>
      <CategoryBanner
        title={category?.name}
        subtitle={category?.description}
        bgImage={category.categoryImages ?? "/aboutbanner.png"}
      />
      <ProductListing products={products} category={category} />
    </div>
  );
};

export default Categrory;
