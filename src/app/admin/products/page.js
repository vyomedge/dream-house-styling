"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ProductsPage() {
  const supabase = createClient();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const loadProducts = async () => {
    setLoading(true);
    setError("");

    const { data, error: productsError } = await supabase
      .from("products")
      .select(`
        id,
        name,
        slug,
        sku,
        regular_price,
        sale_price,
        status,
        featured,
        created_at,
        categories (
          name
        ),
        product_images (
          image_url,
          is_primary,
          sort_order
        )
      `)
      .order("created_at", { ascending: false });

    if (productsError) {
      setError(productsError.message);
      setProducts([]);
    } else {
      setProducts(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = async (id) => {
    const confirmed = window.confirm(
      "Delete this product? This cannot be undone."
    );

    if (!confirmed) return;

    const { error: deleteError } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (deleteError) {
      alert(deleteError.message);
      return;
    }

    loadProducts();
  };

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.sku || ""} ${product.slug}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-gray-500">Catalog</p>
            <h1 className="text-3xl font-bold text-gray-800">
              Products
            </h1>
          </div>

          <Link
            href="/admin/products/new"
            className="inline-flex justify-center rounded-lg bg-[#cd6632] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            + Add Product
          </Link>
        </div>

        <div className="bg-white border rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="w-full md:w-96 rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#cd6632]"
            />
          </div>

          {error && (
            <div className="m-4 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {loading ? (
            <div className="p-10 text-center text-gray-500">
              Loading products...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-500">No products found.</p>

              <Link
                href="/admin/products/new"
                className="inline-block mt-4 text-sm font-medium text-[#cd6632]"
              >
                Create your first product
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50 text-left">
                    <th className="px-5 py-4 font-medium text-gray-600">
                      Product
                    </th>
                    <th className="px-5 py-4 font-medium text-gray-600">
                      Category
                    </th>
                    <th className="px-5 py-4 font-medium text-gray-600">
                      Price
                    </th>
                    <th className="px-5 py-4 font-medium text-gray-600">
                      Status
                    </th>
                    <th className="px-5 py-4 font-medium text-gray-600">
                      Featured
                    </th>
                    <th className="px-5 py-4 font-medium text-gray-600 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredProducts.map((product) => {
                    const primaryImage =
                      product.product_images?.find(
                        (image) => image.is_primary
                      ) ||
                      product.product_images?.sort(
                        (a, b) => a.sort_order - b.sort_order
                      )[0];

                    return (
                      <tr
                        key={product.id}
                        className="border-b last:border-0 hover:bg-gray-50"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-4 min-w-[280px]">
                            <div className="w-14 h-14 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                              {primaryImage?.image_url ? (
                                <img
                                  src={primaryImage.image_url}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                                  No image
                                </div>
                              )}
                            </div>

                            <div>
                              <p className="font-medium text-gray-800">
                                {product.name}
                              </p>

                              {product.sku && (
                                <p className="text-xs text-gray-400 mt-1">
                                  SKU: {product.sku}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-gray-600">
                          {product.categories?.name || "—"}
                        </td>

                        <td className="px-5 py-4">
                          <div className="text-gray-800">
                            ₹{product.sale_price ?? product.regular_price ?? "—"}
                          </div>

                          {product.sale_price &&
                            product.regular_price &&
                            Number(product.sale_price) <
                              Number(product.regular_price) && (
                              <div className="text-xs text-gray-400 line-through">
                                ₹{product.regular_price}
                              </div>
                            )}
                        </td>

                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                              product.status === "published"
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {product.status}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          {product.featured ? "Yes" : "No"}
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex justify-end gap-3">
                            <Link
                              href={`/admin/products/${product.id}`}
                              className="text-[#cd6632] hover:underline"
                            >
                              Edit
                            </Link>

                            <button
                              type="button"
                              onClick={() => deleteProduct(product.id)}
                              className="text-red-600 hover:underline"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
