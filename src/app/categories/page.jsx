"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import patternFloral from "@/assets/pattern-floral.jpg";
import patternGeometric from "@/assets/pattern-geometric.jpg";
import patternTextured from "@/assets/pattern-textured.jpg";
import patternAbstract from "@/assets/pattern-abstract.jpg";
import patternMinimalist from "@/assets/pattern-minimalist.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import CategoryBanner from "@/components/Category/CategoryBanner";

const Categories = () => {
  const [categories, SetCategory] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchActiveCategory = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`,
      );

      const newdata = response.data.map((item) => ({
        ...item,
        name: item.name,
        className: "aspect-[4/3]",
        image: patternFloral,
      }));

      SetCategory(newdata);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchActiveCategory();
  }, []);

  return (
    <>
      <CategoryBanner
        title="Explore Our Collections"
        subtitle={"Find the perfect pattern for every room in your house."}
        bgImage="/2.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Collections" }]}
      />
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          {/* Header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-dm responsiveheading2 font-semibold! tracking-tight mb-2 text-[#cd6632]">{` Browse by Category`}</h2>
              <p className="font-dm text-muted-foreground responsive-text text-black">{`Discover thoughtfully designed patterns for every space in your home.`}</p>
            </div>
          </div>

          {/* Grid */}
          {Loading ? (
            <p className="text-(--primaryColor) text-center">Loading...</p>
          ) : (
            <>
              <div className="font-dm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    href={`/category/${item.name.toLowerCase()}/${item.id}`}
                  >
                    <div
                      className={`font-dm relative overflow-hidden rounded-lg cursor-pointer group ${item.className}`}
                    >
                      <Image
                        src={item.categoryImages}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="font-dm text-(--primaryColor) responsiveheading3 font-semibold!">
                          {item.name}
                        </h3>
                        <p
                          className="font-dm text-white/70 text-sm "
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        ></p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
