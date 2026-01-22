"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Cookies from "universal-cookie";
import patternFloral from "@/assets/pattern-floral.jpg";
import patternGeometric from "@/assets/pattern-geometric.jpg";
import patternTextured from "@/assets/pattern-textured.jpg";
import patternAbstract from "@/assets/pattern-abstract.jpg";
import patternMinimalist from "@/assets/pattern-minimalist.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, SetCategory] = useState([]);

  console.log({ categories });

  const cookies = new Cookies();
  const token_data = cookies.get("Vendor_Token");

  const fetchActiveCategory = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:1331/VendorPanel/ActiveCategory/",
        {
          headers: {
            Authorization: `Bearer ${token_data}`,
          },
        },
      );

      console.log("data", response.data.data);

      const newdata = response.data.data.map((item) => ({
        ...item,
        name: item.name,
        className: "aspect-[4/3]",
        image: patternFloral,
      }));
      console.log("newData", newdata);
      SetCategory(newdata);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchActiveCategory();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              Browse by Category
            </h2>
            <p className="text-muted-foreground">
              Find the perfect pattern for every room in your house.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium"
          >
            View All Collections
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${item.className}`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">
                  {item.name}
                </h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <a
          href="#"
          className="flex md:hidden items-center justify-center gap-1 text-primary hover:underline font-medium mt-6"
        >
          View All Collections
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Categories;
