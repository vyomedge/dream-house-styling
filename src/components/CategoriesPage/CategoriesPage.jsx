"use client";

import Image from "next/image";
import Link from "next/link";
import CategoryBanner from "@/components/Category/CategoryBanner";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActiveCategory = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/catalog/categories");

      if (!response.ok) {
        throw new Error("Failed to load categories");
      }

      const data = await response.json();

      const newdata = data.map((item) => ({
        ...item,
        name: item.name,
        className: "aspect-[4/3]",
      }));

      setCategories(newdata);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveCategory();
  }, []);

  return (
    <>
      <CategoryBanner
        title="Explore Our Collections"
        subtitle="Find the perfect pattern for every room in your house."
        bgImage="/2.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Collections" },
        ]}
      />

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-dm responsiveheading2 font-semibold! tracking-tight mb-2 text-[#cd6632]">
                Browse by Category
              </h2>

              <p className="font-dm text-muted-foreground responsive-text text-black">
                Discover thoughtfully designed patterns for every space in your
                home.
              </p>
            </div>
          </div>

          {loading ? (
            <p className="text-(--primaryColor) text-center">Loading...</p>
          ) : (
            <div className="font-dm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {categories.map((item) => {
                const imageUrl =
                  item.categoryImages?.[0]?.image ||
                  item.image_url ||
                  "/images/no-image.jpg";

                return (
                  <Link
                    key={item.id}
                    href={`/category/${item.name.toLowerCase()}/${item.id}`}
                  >
                    <div
                      className={`font-dm relative overflow-hidden rounded-lg cursor-pointer group ${item.className}`}
                    >
                      <Image
                        src={imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="font-dm text-(--primaryColor) responsiveheading3 font-semibold!">
                          {item.name}
                        </h3>

                        <p
                          className="font-dm text-white/70 text-sm"
                          dangerouslySetInnerHTML={{
                            __html: item.description || "",
                          }}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoriesPage;
