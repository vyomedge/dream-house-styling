import { textToSlug } from "@/utills/utills";
import {
  getPublishedCategories,
  getPublishedProducts,
} from "@/lib/catalog";

const sitemapUrls = [
  { url: "/", priority: 1.0 },
  { url: "/categories", priority: 0.8 },
  { url: "/about-us", priority: 0.8 },
  { url: "/contact-us", priority: 0.8 },
  { url: "/add-to-cart", priority: 0.8 },
  { url: "/login", priority: 0.8 },
  { url: "/terms-and-conditions", priority: 0.8 },
  { url: "/privacy-policy", priority: 0.8 },
  { url: "/terms-and-condition", priority: 0.8 },
  { url: "/disclaimer-policy", priority: 0.8 },
  { url: "/signup", priority: 0.64 },
];

const legacyCategoryIds = {
  WALLPAPER: "3",
  "WALL ART": "18",
  CUSHIONS: "21",
};

export default async function sitemap() {
  const baseUrl = "https://www.dreamhomestyling.com";
  const lastmod = new Date().toISOString();

  const dynamicUrls = [];

  try {
    const [products, categories] = await Promise.all([
      getPublishedProducts(),
      getPublishedCategories(),
    ]);

    if (Array.isArray(products)) {
      products.forEach((item) => {
        const categoryName = item.category_name || "category";
        const categoryId =
          legacyCategoryIds[categoryName] || item.category_id;

        dynamicUrls.push({
          url: `/category/${textToSlug(categoryName)}/${categoryId}/${textToSlug(item.Product_Name)}/${item.id}`,
          priority: 0.64,
        });
      });
    }

    if (Array.isArray(categories)) {
      categories.forEach((item) => {
        const categoryId = legacyCategoryIds[item.name] || item.id;

        dynamicUrls.push({
          url: `/category/${textToSlug(item.name)}/${categoryId}`,
          priority: 0.64,
        });
      });
    }
  } catch (error) {
    console.error("Error generating sitemap URLs:", error);
  }

  return sitemapUrls.concat(dynamicUrls).map((item) => ({
    url: `${baseUrl}${item.url}`,
    lastModified: lastmod,
    priority: item.priority,
    changeFrequency: "weekly",
  }));
}
