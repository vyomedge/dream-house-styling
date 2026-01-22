import ProductDetail from "@/components/Category/ProductDetails";
import React from "react";

export default function Page({ params }) {
  return (
    <div>
      <ProductDetail id={params.id} />
    </div>
  );
}
