import Categrory from "@/components/Category/Category";
import { generateMataDataForSEO } from "@/utills/utills";
import { getPublishedCategories, getProductsByCategory } from "@/lib/catalog";

const Page = async ({ params }) => {
  const { categoryid } = await params;

  const [products, categories] = await Promise.all([
    getProductsByCategory(categoryid),
    getPublishedCategories(),
  ]);

  const currCategory = categories.find(
    (category) => String(category.id) === String(categoryid),
  );

  return (
    <div>
      <Categrory products={products} category={currCategory} />
    </div>
  );
};

export default Page;

export async function generateMetadata({ params }) {
  const { categoryname, categoryid } = await params;

  const categories = await getPublishedCategories();

  const currCategory = categories.find(
    (category) => String(category.id) === String(categoryid),
  );

  if (!currCategory) {
    return {
      title: "Category | Dream Home Styling",
      description: "Explore our collection at Dream Home Styling.",
    };
  }

  const ogImage =
    currCategory.image_url ??
    "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png";

  return generateMataDataForSEO({
    title: currCategory.meta_title ?? currCategory.name ?? "Dream Home Styling",
    description:
      currCategory.meta_description ??
      currCategory.description ??
      "Explore our collection at Dream Home Styling.",
    keywords: currCategory.meta_keywords ? [currCategory.meta_keywords] : [],
    canonicalEndpoint: `/category/${categoryname}/${categoryid}`,
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
