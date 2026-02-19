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

  return generateMataDataForSEO({
    title: "Contact Us | Dream Home Styling – Home Decor Store Bhopal",
    description:
      "Contact Dream Home Styling in Bhopal for customized wallpapers, curtains, blinds, and interior design services. Visit our Neelbad store or call us today.",
    keywords: [
      "contact dream home styling",
      "home decor store contact bhopal",
      " interior decor shop bhopal contact,",
      "wallpaper curtain store bhopa",
      " customized home decor bhopal",
      "interior designer bhopal",
      " home furnishing store madhya pradesh",
      " home furnishing store madhya pradesh",
      " interior decor store indore",
    ],
    canonicalEndpoint: `/${categoryname}/${categoryid}`,
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    ogImages: [
      "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png",
    ],
  });
}
