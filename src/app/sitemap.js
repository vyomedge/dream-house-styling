import axios from "axios";
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

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Product/`,
    );
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const fetchActiveCategory = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`,
    );

    return response;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export default async function sitemap() {
  const baseUrl = "https://www.dreamhomestyling.com";

  const lastmod = new Date().toISOString().replace("Z", "+00:00");

  let blogs = [];
  try {
    const productsResponse = await fetchProducts();
    const categoriesResponse = await fetchActiveCategory();
    const data = productsResponse.data;
    const categorydata = categoriesResponse.data;

    if (Array.isArray(data)) {
      data.forEach((item) => {
        blogs.push({
          url: `/category/${textToSlug(item.category_name)}/${item.Category_id}/${textToSlug(item.Product_Name)}/${item.id}`,
          priority: 0.64,
        });
      });
    }
    if (Array.isArray(categorydata)) {
      categorydata.forEach((item) => {
        blogs.push({
          url: `/category/${textToSlug(item.name.toLowerCase())}/${item.id}`,
          priority: 0.64,
        });
      });
    }
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }

  const allUrls = sitemapUrls.concat(blogs);

  return allUrls.map((item) => ({
    url: `${baseUrl}${item.url}`,
    lastModified: lastmod,
    priority: item.priority,
    changeFrequency: "weekly",
  }));
}
