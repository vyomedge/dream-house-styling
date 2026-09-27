import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/admin/login");
  }

  const [
    { count: productCount },
    { count: categoryCount },
  ] = await Promise.all([
    supabase
      .from("products")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("categories")
      .select("*", { count: "exact", head: true }),
  ]);

  return (
    <div className="p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-500">Admin Panel</p>

          <h1 className="text-3xl font-bold text-gray-800 mt-1">
            Dashboard
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome, {profile.full_name || "Admin"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Products</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {productCount || 0}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Categories</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              {categoryCount || 0}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Published Products</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">
              —
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Coming in the next dashboard refinement
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Admin Account</p>
            <p className="text-lg font-bold text-gray-800 mt-2">
              Active
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Supabase Auth
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="/admin/products/new"
              className="rounded-lg bg-[#cd6632] px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Add Product
            </a>

            <a
              href="/admin/categories"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Manage Categories
            </a>

            <a
              href="/admin/products"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
