import ProductDetail from "@/components/Category/ProductDetails";
import { generateMataDataForSEO } from "@/utills/utills";
import { getPublishedCategories, getPublishedProductById } from "@/lib/catalog";

export default async function Page({ params }) {
  const { productid, categoryid } = await params;

  const [product, categories] = await Promise.all([
    getPublishedProductById(productid),
    getPublishedCategories(),
  ]);

  const currCategory = categories.find(
    (category) => String(category.id) === String(categoryid),
  );

  return (
    <div>
      <ProductDetail product={product} category={currCategory} />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { productid, categoryid, productname, categoryname } = await params;

  const product = await getPublishedProductById(productid);

  if (!product) {
    return {};
  }

  const ogImage =
    product?.images?.[0]?.image ??
    product?.og_image ??
    "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png";

  return generateMataDataForSEO({
    title: product.Meta_title ?? product.name,
    description:
      product.Meta_Description ??
      product.Short_Description ??
      product.Product_Description,
    keywords: product.Meta_Keywords ?? "",
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
}

