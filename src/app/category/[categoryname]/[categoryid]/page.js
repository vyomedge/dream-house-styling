import Categrory from "@/components/Category/Category";
import { generateMataDataForSEO } from "@/utills/utills";
import axios from "axios";

const Page = async ({ params }) => {
  const { categoryid } = await params;

  let products = [];
  let categories = [];

  try {
    const [productRes, categoryRes] = await Promise.all([
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-ProductByCategorybyStore/${categoryid}?store_id=212`,
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`,
      ),
    ]);
    products = productRes.data;
    categories = categoryRes.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }

  const currCategory = categories.find((cat) => cat.id == categoryid);

  return (
    <div>
      <Categrory products={products} category={currCategory} />
    </div>
  );
};

export default Page;

export async function generateMetadata({ params }) {
  const { categoryname, categoryid } = await params;
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`,
  );
  const categories = res.data;

  const currCategory = categories.find((cat) => cat.id == categoryid);

  const ogImage =
    currCategory?.categoryImages ??
    "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png";
  return generateMataDataForSEO({
    title: currCategory.Meta_title,
    description: currCategory.Meta_Description,
    keywords: [currCategory.Meta_Keywords],
    canonicalEndpoint: `/${categoryname}/${categoryid}`,
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
