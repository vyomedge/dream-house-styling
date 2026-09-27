"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const emptyForm = {
  name: "",
  slug: "",
  sku: "",
  category_id: "",
  short_description: "",
  description: "",
  regular_price: "",
  sale_price: "",
  discount: "",
  status: "draft",
  featured: false,
  meta_title: "",
  meta_description: "",
  meta_keywords: "",
  canonical_url: "",
  og_image: "",
};

export default function ProductEditorPage() {
  const params = useParams();
  const router = useRouter();
  const supabase = createClient();

  const editingId = params?.id;
  const isEditing = Boolean(editingId);

  const [form, setForm] = useState(emptyForm);
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [customization, setCustomization] = useState([""]);
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCategories();

    if (isEditing) {
      loadProduct();
    }
  }, [editingId]);

  const loadCategories = async () => {
    const { data, error: categoryError } = await supabase
      .from("categories")
      .select("id, name")
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });

    if (!categoryError) {
      setCategories(data || []);
    }
  };

  const loadProduct = async () => {
    setLoading(true);

    const { data, error: productError } = await supabase
      .from("products")
      .select("*")
      .eq("id", editingId)
      .single();

    if (productError) {
      setError(productError.message);
      setLoading(false);
      return;
    }

    setForm({
      ...emptyForm,
      ...data,
      category_id: data.category_id || "",
      regular_price: data.regular_price ?? "",
      sale_price: data.sale_price ?? "",
      discount: data.discount ?? "",
      featured: Boolean(data.featured),
    });

    const { data: imageData } = await supabase
      .from("product_images")
      .select("*")
      .eq("product_id", editingId)
      .order("sort_order", { ascending: true });

    setImages(imageData || []);

    const { data: customizationData } = await supabase
      .from("product_customization")
      .select("*")
      .eq("product_id", editingId)
      .order("sort_order", { ascending: true });

    setCustomization(
      customizationData?.length
        ? customizationData.map((item) => item.point)
        : [""]
    );

    const { data: faqData } = await supabase
      .from("product_faqs")
      .select("*")
      .eq("product_id", editingId)
      .order("sort_order", { ascending: true });

    setFaqs(
      faqData?.length
        ? faqData.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))
        : [{ question: "", answer: "" }]
    );

    setLoading(false);
  };

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const generateSlug = () => {
    if (!form.name) return;

    const slug = form.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    updateField("slug", slug);
  };

  const uploadImages = async (event) => {
    const files = Array.from(event.target.files || []);

    if (!files.length) return;

    setUploading(true);
    setError("");

    const uploadedImages = [];

    for (const file of files) {
      const extension = file.name.split(".").pop();
      const filename = `${crypto.randomUUID()}.${extension}`;
      const path = `products/${filename}`;

      const { error: uploadError } = await supabase.storage
        .from("product-media")
        .upload(path, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        setError(uploadError.message);
        continue;
      }

      const {
        data: { publicUrl },
      } = supabase.storage
        .from("product-media")
        .getPublicUrl(path);

      uploadedImages.push({
        image_url: publicUrl,
        alt_text: form.name,
        sort_order: images.length + uploadedImages.length,
        is_primary: images.length === 0 && uploadedImages.length === 0,
      });
    }

    setImages((current) => [...current, ...uploadedImages]);
    setUploading(false);

    event.target.value = "";
  };

  const removeImage = (index) => {
    setImages((current) =>
      current.filter((_, imageIndex) => imageIndex !== index)
    );
  };

  const setPrimaryImage = (index) => {
    setImages((current) =>
      current.map((image, imageIndex) => ({
        ...image,
        is_primary: imageIndex === index,
      }))
    );
  };

  const saveProduct = async (event) => {
    event.preventDefault();

    setSaving(true);
    setError("");

    if (!form.name.trim()) {
      setError("Product name is required.");
      setSaving(false);
      return;
    }

    if (!form.slug.trim()) {
      setError("Product slug is required.");
      setSaving(false);
      return;
    }

    const productPayload = {
      name: form.name.trim(),
      slug: form.slug.trim(),
      sku: form.sku.trim() || null,
      category_id: form.category_id || null,
      short_description: form.short_description || null,
      description: form.description || null,
      regular_price: form.regular_price === "" ? null : Number(form.regular_price),
      sale_price: form.sale_price === "" ? null : Number(form.sale_price),
      discount: form.discount === "" ? null : Number(form.discount),
      status: form.status,
      featured: form.featured,
      meta_title: form.meta_title || null,
      meta_description: form.meta_description || null,
      meta_keywords: form.meta_keywords || null,
      canonical_url: form.canonical_url || null,
      og_image: form.og_image || null,
      updated_at: new Date().toISOString(),
    };

    let productId = editingId;

    if (isEditing) {
      const { error: updateError } = await supabase
        .from("products")
        .update(productPayload)
        .eq("id", editingId);

      if (updateError) {
        setError(updateError.message);
        setSaving(false);
        return;
      }

      await supabase
        .from("product_images")
        .delete()
        .eq("product_id", editingId);

      await supabase
        .from("product_customization")
        .delete()
        .eq("product_id", editingId);

      await supabase
        .from("product_faqs")
        .delete()
        .eq("product_id", editingId);
    } else {
      const { data, error: insertError } = await supabase
        .from("products")
        .insert(productPayload)
        .select("id")
        .single();

      if (insertError) {
        setError(insertError.message);
        setSaving(false);
        return;
      }

      productId = data.id;
    }

    if (images.length) {
      const imagePayload = images.map((image, index) => ({
        product_id: productId,
        image_url: image.image_url,
        alt_text: image.alt_text || form.name,
        sort_order: index,
        is_primary: index === 0 ? true : Boolean(image.is_primary),
      }));

      await supabase
        .from("product_images")
        .insert(imagePayload);
    }

    const customizationPayload = customization
      .map((point) => point.trim())
      .filter(Boolean)
      .map((point, index) => ({
        product_id: productId,
        point,
        sort_order: index,
      }));

    if (customizationPayload.length) {
      await supabase
        .from("product_customization")
        .insert(customizationPayload);
    }

    const faqPayload = faqs
      .filter((faq) => faq.question.trim() && faq.answer.trim())
      .map((faq, index) => ({
        product_id: productId,
        question: faq.question.trim(),
        answer: faq.answer.trim(),
        sort_order: index,
      }));

    if (faqPayload.length) {
      await supabase
        .from("product_faqs")
        .insert(faqPayload);
    }

    router.push("/admin/products");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="p-10">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-gray-500">Catalog</p>
            <h1 className="text-3xl font-bold text-gray-800">
              {isEditing ? "Edit Product" : "Add Product"}
            </h1>
          </div>

          <Link
            href="/admin/products"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Products
          </Link>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={saveProduct} className="space-y-6">
          <section className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="label">Product Name *</label>
                <input
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="input"
                  required
                />
              </div>

              <div>
                <label className="label">Slug *</label>

                <div className="flex gap-2">
                  <input
                    value={form.slug}
                    onChange={(e) => updateField("slug", e.target.value)}
                    className="input"
                    required
                  />

                  <button
                    type="button"
                    onClick={generateSlug}
                    className="rounded-lg border px-4 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Generate
                  </button>
                </div>
              </div>

              <div>
                <label className="label">SKU</label>
                <input
                  value={form.sku}
                  onChange={(e) => updateField("sku", e.target.value)}
                  className="input"
                />
              </div>

              <div>
                <label className="label">Category</label>

                <select
                  value={form.category_id}
                  onChange={(e) =>
                    updateField("category_id", e.target.value)
                  }
                  className="input"
                >
                  <option value="">Select category</option>

                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Status</label>

                <select
                  value={form.status}
                  onChange={(e) => updateField("status", e.target.value)}
                  className="input"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="label">Short Description</label>

                <textarea
                  value={form.short_description}
                  onChange={(e) =>
                    updateField("short_description", e.target.value)
                  }
                  className="input min-h-24"
                />
              </div>

              <div className="md:col-span-2">
                <label className="label">Description</label>

                <textarea
                  value={form.description}
                  onChange={(e) =>
                    updateField("description", e.target.value)
                  }
                  className="input min-h-48"
                  placeholder="HTML is supported for now."
                />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="label">Regular Price</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.regular_price}
                  onChange={(e) =>
                    updateField("regular_price", e.target.value)
                  }
                  className="input"
                />
              </div>

              <div>
                <label className="label">Sale Price</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={form.sale_price}
                  onChange={(e) =>
                    updateField("sale_price", e.target.value)
                  }
                  className="input"
                />
              </div>

              <div>
                <label className="label">Discount %</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={form.discount}
                  onChange={(e) =>
                    updateField("discount", e.target.value)
                  }
                  className="input"
                />
              </div>
            </div>

            <label className="mt-5 flex items-center gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                  updateField("featured", e.target.checked)
                }
              />

              Featured product
            </label>
          </section>

          <section className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Product Images
            </h2>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={uploadImages}
              disabled={uploading}
              className="block w-full text-sm text-gray-600"
            />

            {uploading && (
              <p className="text-sm text-gray-500 mt-3">
                Uploading images...
              </p>
            )}

            {images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {images.map((image, index) => (
                  <div
                    key={`${image.image_url}-${index}`}
                    className="border rounded-lg overflow-hidden bg-gray-50"
                  >
                    <img
                      src={image.image_url}
                      alt={image.alt_text || form.name}
                      className="w-full h-36 object-cover"
                    />

                    <div className="p-3 space-y-2">
                      <button
                        type="button"
                        onClick={() => setPrimaryImage(index)}
                        className={`w-full rounded-md px-3 py-2 text-xs ${
                          image.is_primary
                            ? "bg-[#cd6632] text-white"
                            : "border text-gray-600"
                        }`}
                      >
                        {image.is_primary
                          ? "Primary Image"
                          : "Make Primary"}
                      </button>

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="w-full rounded-md border border-red-200 px-3 py-2 text-xs text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Customization Information
            </h2>

            <div className="space-y-3">
              {customization.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    value={point}
                    onChange={(e) =>
                      setCustomization((current) =>
                        current.map((item, itemIndex) =>
                          itemIndex === index
                            ? e.target.value
                            : item
                        )
                      )
                    }
                    className="input"
                    placeholder="e.g. Available in custom dimensions"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setCustomization((current) =>
                        current.filter(
                          (_, itemIndex) => itemIndex !== index
                        )
                      )
                    }
                    className="px-3 text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setCustomization((current) => [...current, ""])
              }
              className="mt-4 text-sm font-medium text-[#cd6632]"
            >
              + Add point
            </button>
          </section>

          <section className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              FAQs
            </h2>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <input
                    value={faq.question}
                    onChange={(e) =>
                      setFaqs((current) =>
                        current.map((item, itemIndex) =>
                          itemIndex === index
                            ? {
                                ...item,
                                question: e.target.value,
                              }
                            : item
                        )
                      )
                    }
                    className="input"
                    placeholder="Question"
                  />

                  <textarea
                    value={faq.answer}
                    onChange={(e) =>
                      setFaqs((current) =>
                        current.map((item, itemIndex) =>
                          itemIndex === index
                            ? {
                                ...item,
                                answer: e.target.value,
                              }
                            : item
                        )
                      )
                    }
                    className="input min-h-24 mt-3"
                    placeholder="Answer"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setFaqs((current) =>
                        current.filter(
                          (_, itemIndex) => itemIndex !== index
                        )
                      )
                    }
                    className="mt-3 text-sm text-red-600"
                  >
                    Remove FAQ
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                setFaqs((current) => [
                  ...current,
                  { question: "", answer: "" },
                ])
              }
              className="mt-4 text-sm font-medium text-[#cd6632]"
            >
              + Add FAQ
            </button>
          </section>

          <section className="bg-white rounded-xl border shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              SEO
            </h2>

            <div className="space-y-5">
              <div>
                <label className="label">Meta Title</label>
                <input
                  value={form.meta_title}
                  onChange={(e) =>
                    updateField("meta_title", e.target.value)
                  }
                  className="input"
                />
              </div>

              <div>
                <label className="label">Meta Description</label>
                <textarea
                  value={form.meta_description}
                  onChange={(e) =>
                    updateField("meta_description", e.target.value)
                  }
                  className="input min-h-24"
                />
              </div>

              <div>
                <label className="label">Meta Keywords</label>
                <input
                  value={form.meta_keywords}
                  onChange={(e) =>
                    updateField("meta_keywords", e.target.value)
                  }
                  className="input"
                />
              </div>

              <div>
                <label className="label">Canonical URL</label>
                <input
                  value={form.canonical_url}
                  onChange={(e) =>
                    updateField("canonical_url", e.target.value)
                  }
                  className="input"
                  placeholder="https://www.example.com/product/..."
                />
              </div>

              <div>
                <label className="label">OG Image URL</label>
                <input
                  value={form.og_image}
                  onChange={(e) =>
                    updateField("og_image", e.target.value)
                  }
                  className="input"
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end gap-3 pb-10">
            <Link
              href="/admin/products"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving || uploading}
              className="rounded-lg bg-[#cd6632] px-7 py-3 text-sm font-medium text-white disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : isEditing
                  ? "Update Product"
                  : "Create Product"}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .label {
          display: block;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }

        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 11px 13px;
          font-size: 14px;
          outline: none;
          background: white;
        }

        .input:focus {
          border-color: #cd6632;
        }
      `}</style>
    </div>
  );
}
