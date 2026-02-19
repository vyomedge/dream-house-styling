import ProductDetail from "@/components/Category/ProductDetails";
import { generateMataDataForSEO } from "@/utills/utills";
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

export async function generateMetadata({ params }) {
  const { productid, categoryid, productname, categoryname } = await params;

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-ProductById/${productid}`,
    );

    const product = res.data?.[0];

    if (!product) {
      return {};
    }

    const ogImage =
      product?.images?.[0]?.image ??
      "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png";

    return generateMataDataForSEO({
      title: product.Meta_title,
      description: product.Meta_Description,
      keywords: product.Meta_Keywords,
      canonicalEndpoint: `/${categoryname}/${categoryid}/${productname}/${productid}`,
      robots: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
      ogImages: [ogImage],
    });
  } catch (error) {
    console.error("Metadata fetch error:", error.message);
    return {};
  }
}
