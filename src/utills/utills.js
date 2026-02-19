export const textToSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-") // replace spaces & special chars with -
    .replace(/^-+|-+$/g, ""); // remove leading/trailing -
};

export const debounce = (fn, delay = 500) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const groupProductsByCategoryArray = (products) => {
  const grouped = products.reduce((acc, product) => {
    const category = product.category_name || "Uncategorized";

    let existingCategory = acc.find((item) => item.category_name === category);

    if (!existingCategory) {
      existingCategory = {
        category_name: category,
        products: [],
      };
      acc.push(existingCategory);
    }

    existingCategory.products.push(product);
    return acc;
  }, []);

  return grouped;
};

export const generateMataDataForSEO = ({
  title = "",
  description = "",
  keywords = [],
  canonicalEndpoint = "/",
  ogImages = [],
  robots = {},
}) => {
  const baseUrl = "https://www.dreamhomestyling.com";

  const generateOGImage = (urls = []) => {
    if (!urls || !urls.length) return [];
    return urls.map((url) => {
      return { url };
    });
  };

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: `${baseUrl}${canonicalEndpoint}`,
    },
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}${canonicalEndpoint}`,
      images: generateOGImage(ogImages),
    },
    robots: robots,
  };
};
