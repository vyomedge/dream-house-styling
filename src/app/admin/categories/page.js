"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const emptyForm = {
  name: "",
  slug: "",
  description: "",
  image_url: "",
  status: "published",
  sort_order: 0,
};

export default function CategoriesPage() {
  const supabase = createClient();

  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadCategories = async () => {
    setLoading(true);

    const { data, error: categoryError } = await supabase
      .from("categories")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });

    if (categoryError) {
      setError(categoryError.message);
    } else {
      setCategories(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const generateSlug = () => {
    updateField(
      "slug",
      form.name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    );
  };

  const saveCategory = async (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.slug.trim()) {
      setError("Category name and slug are required.");
      return;
    }

    setSaving(true);
    setError("");

    const payload = {
      name: form.name.trim(),
      slug: form.slug.trim(),
      description: form.description || null,
      image_url: form.image_url || null,
      status: form.status,
      sort_order: Number(form.sort_order) || 0,
      updated_at: new Date().toISOString(),
    };

    let result;

    if (editingId) {
      result = await supabase
        .from("categories")
        .update(payload)
        .eq("id", editingId);
    } else {
      result = await supabase
        .from("categories")
        .insert(payload);
    }

    if (result.error) {
      setError(result.error.message);
      setSaving(false);
      return;
    }

    setForm(emptyForm);
    setEditingId(null);
    setSaving(false);

    await loadCategories();
  };

  const editCategory = (category) => {
    setEditingId(category.id);

    setForm({
      name: category.name || "",
      slug: category.slug || "",
      description: category.description || "",
      image_url: category.image_url || "",
      status: category.status || "published",
      sort_order: category.sort_order || 0,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteCategory = async (id) => {
    const confirmed = window.confirm(
      "Delete this category? Products will not be deleted."
    );

    if (!confirmed) return;

    const { error: deleteError } = await supabase
      .from("categories")
      .delete()
      .eq("id", id);

    if (deleteError) {
      alert(deleteError.message);
      return;
    }

    loadCategories();
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
  };

  return (
    <div className="p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-500">Catalog</p>
          <h1 className="text-3xl font-bold text-gray-800">
            Categories
          </h1>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <form
              onSubmit={saveCategory}
              className="bg-white rounded-xl border shadow-sm p-6 sticky top-6"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-5">
                {editingId ? "Edit Category" : "Add Category"}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="label">Name *</label>
                  <input
                    value={form.name}
                    onChange={(e) =>
                      updateField("name", e.target.value)
                    }
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="label">Slug *</label>

                  <div className="flex gap-2">
                    <input
                      value={form.slug}
                      onChange={(e) =>
                        updateField("slug", e.target.value)
                      }
                      className="input"
                      required
                    />

                    <button
                      type="button"
                      onClick={generateSlug}
                      className="rounded-lg border px-3 text-xs"
                    >
                      Generate
                    </button>
                  </div>
                </div>

                <div>
                  <label className="label">Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) =>
                      updateField("description", e.target.value)
                    }
                    className="input min-h-24"
                  />
                </div>

                <div>
                  <label className="label">Image URL</label>
                  <input
                    value={form.image_url}
                    onChange={(e) =>
                      updateField("image_url", e.target.value)
                    }
                    className="input"
                  />
                </div>

                <div>
                  <label className="label">Status</label>

                  <select
                    value={form.status}
                    onChange={(e) =>
                      updateField("status", e.target.value)
                    }
                    className="input"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                <div>
                  <label className="label">Sort Order</label>
                  <input
                    type="number"
                    value={form.sort_order}
                    onChange={(e) =>
                      updateField("sort_order", e.target.value)
                    }
                    className="input"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-lg bg-[#cd6632] px-4 py-3 text-sm font-medium text-white disabled:opacity-50"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Update"
                      : "Create"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="rounded-lg border px-4 py-3 text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="xl:col-span-2">
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
              {loading ? (
                <div className="p-10 text-center text-gray-500">
                  Loading categories...
                </div>
              ) : categories.length === 0 ? (
                <div className="p-10 text-center text-gray-500">
                  No categories yet.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-gray-50 text-left">
                        <th className="px-5 py-4">Category</th>
                        <th className="px-5 py-4">Slug</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4 text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {categories.map((category) => (
                        <tr
                          key={category.id}
                          className="border-b last:border-0"
                        >
                          <td className="px-5 py-4 font-medium">
                            {category.name}
                          </td>

                          <td className="px-5 py-4 text-gray-500">
                            {category.slug}
                          </td>

                          <td className="px-5 py-4">
                            <span className="text-xs">
                              {category.status}
                            </span>
                          </td>

                          <td className="px-5 py-4">
                            <div className="flex justify-end gap-4">
                              <button
                                type="button"
                                onClick={() =>
                                  editCategory(category)
                                }
                                className="text-[#cd6632]"
                              >
                                Edit
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  deleteCategory(category.id)
                                }
                                className="text-red-600"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
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
