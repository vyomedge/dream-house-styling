"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const menuItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Products", href: "/admin/products" },
  { label: "Categories", href: "/admin/categories" },
  { label: "Media", href: "/admin/media" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#101d22] text-white">
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-6 py-6">
          <p className="text-lg font-bold tracking-wide">
            DREAM HOME
          </p>

          <p className="text-xs tracking-[0.25em] text-white/60">
            STYLING
          </p>

          <p className="mt-3 text-xs text-white/50">
            Admin Panel
          </p>
        </div>

        <nav className="flex-1 px-3 py-5 overflow-y-auto">
          <p className="px-3 mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
            Management
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-sm transition ${
                    isActive
                      ? "bg-[#cd6632] text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/10 p-3">
          <button
            type="button"
            onClick={handleSignOut}
            className="w-full rounded-lg px-3 py-3 text-left text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
}
