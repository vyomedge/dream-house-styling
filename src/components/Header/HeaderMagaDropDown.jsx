"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { textToSlug } from "@/utills/utills";

const HeaderMagaDropDown = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`,
        );

        setCategories(response.data || []);
      } catch (error) {
        console.error("Category fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mega-menu invisible opacity-0  absolute top-20.5 left-0 w-full glass transition-all duration-300 translate-y-2 group-hover:translate-y-0  border-t-0 py-10">
      <div className="max-w-7xl mx-auto h-full px-6">
        {loading ? (
          <div className="h-[30vh] flex justify-center w-full items-center">
            <div className="text-center">
              <p className="text-2xl text-(--primaryColor) mb-2">Loading..</p>
            </div>
          </div>
        ) : categories.length ? (
          <div className="grid grid-cols-5 min-h-[30vh] gap-6 h-full font-dm">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={`/category/${textToSlug(cat.name)}/${cat.id}`}
                className="group/card block"
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover/card:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url("${
                        cat?.categoryImages
                          ? cat?.categoryImages
                          : "/images/pattern-floral.jpg"
                      }")`,
                    }}
                  />
                </div>

                <p className="font-dm text-sm font-bold uppercase tracking-wider group-hover:text-primary transition-colors ">
                  {cat.name}
                </p>

                <p
                  className="font-dm text-[11px] text-gray-100 mt-1 leading-relaxed line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: cat.description }}
                ></p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="h-[30vh] flex justify-center items-center w-full">
            <div className="text-center">
              <p className="text-2xl text-(--primaryColor) mb-2">
                No Category Found
              </p>
              <p className="text-center">
                It looks like there are no category here right now. <br /> Don’t
                worry—try a different search or browse other collections to find
                something you love.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6  border-t border-white/5 flex justify-between items-center">
          <span className="font-dm text-[10px] tracking-[0.3em] uppercase text-gray-100">
            Curated by Interior Architects
          </span>
          <Link
            className="font-dm text-xs font-bold text-primary flex items-center gap-2 hover:gap-4 transition-all"
            href="/category/wallpaper/3"
          >
            View All Categories{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMagaDropDown;
