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
import { textToSlug } from "@/utills/utills";

const Categories = ({ categories }) => {
  const [Loading, setLoading] = useState(false);

  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-dm responsiveheading2 font-semibold! tracking-tight mb-2 text-[#cd6632]">{` Browse by Category`}</h2>
            <p className="font-dm text-muted-foreground responsive-text text-black">{`Find the perfect pattern for every room in your house.`}</p>
          </div>

          <a
            href="/category/categories"
            className="font-dm text-(--primaryColor2) hidden md:flex items-center gap-1 responsive-text hover:underline font-medium "
          >
            {` View All Collections`}
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        {/* Grid */}
        {Loading ? (
          <p className="text-(--primaryColor) text-center">Loading...</p>
        ) : (
          <>
            <div className="font-dm grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  href={`/category/${textToSlug(item.name.toLowerCase())}/${item.id}`}
                >
                  <div
                    className={`font-dm relative overflow-hidden rounded-lg cursor-pointer group ${item.className}`}
                  >
                    <Image
                      src={item.categoryImages ?? "/images/no-image.jpg"}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <h3 className="font-dm text-(--primaryColor) responsiveheading3 font-semibold!">
                        {item.name}
                      </h3>
                      {/* <p className="font-dm text-white/70 responsive-text">
                        {item.description}
                      </p> */}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <a
              href="#"
              className="font-dm flex md:hidden items-center justify-center gap-1 responsive-text hover:underline font-medium mt-6 text-[#cd6632]"
            >
              {` View All Collections`}
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </>
        )}
      </div>
    </section>
  );
};

export default Categories;
