import ProductDetail from "@/components/Category/ProductDetails";
import axios from "axios";
import React from "react";

export default async function Page({ params }) {
  const { productid, categoryid } = await params;

  let product = [];
  let categories = [];

  try {
    const [productRes, categoryRes] = await Promise.all([
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-ProductById/${productid}`,
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`,
      ),
    ]);
    product = productRes.data;
    categories = categoryRes.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }

  const currCategory = categories.find((cat) => cat.id == categoryid);

  return (
    <div>
      <ProductDetail product={product[0]} category={currCategory} />
    </div>
  );
}
