import { createPublicClient } from "@/lib/supabase/public";

function mapProduct(product) {
  if (!product) return null;

  const images = (product.product_images || [])
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    .map((image) => ({
      id: image.id,
      image: image.image_url,
      alt_text: image.alt_text || product.name,
      sort_order: image.sort_order || 0,
      is_primary: image.is_primary || false,
    }));

  const customizationInfo = (product.product_customization || [])
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    .map((item) => ({
      point: item.point,
    }));

  const faqs = (product.product_faqs || [])
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    .map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }));

  const regularPrice =
    product.regular_price !== null && product.regular_price !== undefined
      ? Number(product.regular_price)
      : 0;

  const salePrice =
    product.sale_price !== null && product.sale_price !== undefined
      ? Number(product.sale_price)
      : regularPrice;

  const discount =
    product.discount !== null && product.discount !== undefined
      ? Number(product.discount)
      : 0;

  return {
    // Current/modern fields
    id: product.id,
    name: product.name,
    slug: product.slug,
    sku: product.sku,

    // Existing storefront compatibility fields
    Product_Name: product.name,
    Product_Description: product.description || "",
    Short_Description: product.short_description || "",

    Category_id: product.category_id,
    category_id: product.category_id,
    category_name: product.categories?.name || "",

    images,

    Prices: [
      {
        Price: [
          {
            Price: regularPrice,
            SalePrice: salePrice,
            Discount: discount,
          },
        ],
      },
    ],

    customizationInfo,
    faqs,

    // Product flags
    status: product.status,
    featured: product.featured,

    // SEO compatibility
    Meta_title: product.meta_title || "",
    Meta_Description: product.meta_description || "",
    Meta_Keywords: product.meta_keywords || "",
    canonical_url: product.canonical_url || "",
    og_image: product.og_image || images[0]?.image || "",

    // Direct database fields
    regular_price: regularPrice,
    sale_price: salePrice,
    discount,
    created_at: product.created_at,
    updated_at: product.updated_at,
  };
}

function mapCategory(category) {
  if (!category) return null;

  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description || "",
    image_url: category.image_url || "",
    status: category.status,
    sort_order: category.sort_order || 0,

    // Existing storefront compatibility
    category_name: category.name,
    categoryImages: category.image_url || "",
  };
}
export async function getPublishedCategories() {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    console.error("Supabase categories error:", error);
    return [];
  }

  return (data || []).map(mapCategory);
}

export async function getPublishedProducts() {
  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name,
        slug
      ),
      product_images (
        id,
        image_url,
        alt_text,
        sort_order,
        is_primary
      ),
      product_customization (
        id,
        point,
        sort_order
      ),
      product_faqs (
        id,
        question,
        answer,
        sort_order
      )
    `)
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase products error:", error);
    return [];
  }

  return (data || []).map(mapProduct);
}

export async function getPublishedProductById(id) {
  if (!id) return null;

  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name,
        slug
      ),
      product_images (
        id,
        image_url,
        alt_text,
        sort_order,
        is_primary
      ),
      product_customization (
        id,
        point,
        sort_order
      ),
      product_faqs (
        id,
        question,
        answer,
        sort_order
      )
    `)
    .eq("id", id)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Supabase product by ID error:", error);
    return null;
  }

  return mapProduct(data);
}

export async function getProductsByCategory(categoryId) {
  if (!categoryId) return [];

  const supabase = createPublicClient();

  // Existing storefront URLs use the old numeric category IDs.
  // Resolve those IDs to the new Supabase category UUIDs.
  const legacyCategoryMap = {
    "3": "WALLPAPER",
    "18": "WALL ART",
    "21": "CUSHIONS",
  };

  let resolvedCategoryId = categoryId;

  if (!String(categoryId).includes("-")) {
    const categoryName = legacyCategoryMap[String(categoryId)];

    if (categoryName) {
      const { data: category, error: categoryError } = await supabase
        .from("categories")
        .select("id")
        .eq("name", categoryName)
        .eq("status", "published")
        .maybeSingle();

      if (categoryError) {
        console.error(
          "Supabase category lookup error:",
          categoryError,
        );
        return [];
      }

      if (!category) {
        console.error(
          "Supabase category not found:",
          categoryName,
        );
        return [];
      }

      resolvedCategoryId = category.id;
    }
  }

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name,
        slug
      ),
      product_images (
        id,
        image_url,
        alt_text,
        sort_order,
        is_primary
      ),
      product_customization (
        id,
        point,
        sort_order
      ),
      product_faqs (
        id,
        question,
        answer,
        sort_order
      )
    `)
    .eq("category_id", resolvedCategoryId)
    .eq("status", "published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase category products error:", error);
    return [];
  }

  return (data || []).map(mapProduct);
}
export async function searchPublishedProducts(query) {
  const search = query?.trim();

  if (!search) {
    return getPublishedProducts();
  }

  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name,
        slug
      ),
      product_images (
        id,
        image_url,
        alt_text,
        sort_order,
        is_primary
      )
    `)
    .eq("status", "published")
    .or(
      `name.ilike.%${search}%,short_description.ilike.%${search}%,description.ilike.%${search}%`
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase product search error:", error);
    return [];
  }

  return (data || []).map(mapProduct);
}

export async function getPublishedCategoryById(id) {
  if (!id) return null;

  const supabase = createPublicClient();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Supabase category by ID error:", error);
    return null;
  }

  return mapCategory(data);
}



