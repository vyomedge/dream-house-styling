import { generateMataDataForSEO } from "@/utills/utills";
import CategoriesPage from "@/components/CategoriesPage/CategoriesPage";

const Categories = () => {
  return <CategoriesPage />;
};

export default Categories;

export async function generateMetadata() {
  const ogImage =
    "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png";

  return generateMataDataForSEO({
    title:
      "Home Décor Categories – Wallpapers, Curtains, Blinds & More | Dream Home Styling",
    description:
      "Explore premium home décor categories at Dream Home Styling — wallpapers, curtains, blinds, upholstery, carpets, and more. Find beautifully designed, customizable décor solutions in Bhopal, Indore & Madhya Pradesh.",
    keywords: [
      "home decor categories",
      "wallpapers curtains blinds",
      "home decor products bhopal",
      "customized home decor",
      "wallpaper store in bhopal",
      "curtain store bhopal",
      "blinds shop bhopal",
      "upholstery fabrics store",
      "carpets and rugs store",
      "interior decor store madhya pradesh",
      "home furnishing store indore",
      "dream home styling",
    ],
    canonicalEndpoint: `/categories`,
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
