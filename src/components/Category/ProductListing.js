"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { textToSlug } from "@/utills/utills";

// const productsData = [
//   {
//     id: 1,
//     title: "Elegant Floral Wallpaper",
//     price: 2500,
//     type: "Premium",
//     room: "Living Room",
//     color: "white",
//     image: "/wallpaper1.jpg",
//     discription:
//       " Premium floral design wallpaper perfect for living rooms and bedrooms",
//   },
//   {
//     id: 2,
//     title: "Modern Geometric Pattern",
//     price: 2800,
//     type: "Standard",
//     room: "Office",
//     color: "blue",
//     image: "/wallpaper2.jpg",
//     discription:
//       " Premium floral design wallpaper perfect for living rooms and bedrooms",
//   },
//   {
//     id: 3,
//     title: "Classic Textured Wallpaper",
//     price: 2200,
//     type: "Economy",
//     room: "Bedroom",
//     color: "black",
//     image: "/wallpaper3.jpg",
//     discription:
//       " Premium floral design wallpaper perfect for living rooms and bedrooms",
//   },
// ];

export default function ProductListing({ products, category }) {
  const [filters, setFilters] = useState({
    type: [],
    room: [],
    color: "",
    price: "",
  });

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* Clear all filters */
  const clearFilters = () => {
    setFilters({
      type: [],
      room: [],
      color: "",
      price: "",
    });
  };

  // Close dropdown on outside click (xs / sm / md)
  useEffect(() => {
    const handler = (e) => {
      if (
        window.innerWidth < 1024 && //  lg breakpoint
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleCheckbox = (group, value) => {
    setFilters((prev) => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter((v) => v !== value)
        : [...prev[group], value],
    }));
  };

  const filteredProducts = products.filter((item) => {
    // if (filters.type.length && !filters.type.includes(item.type)) return false;
    // if (filters.room.length && !filters.room.includes(item.room)) return false;
    // if (filters.color && filters.color !== item.color) return false;

    const ProductPrice = item.Prices[0].Price[0].SalePrice;

    if (filters.price === "under5000" && ProductPrice >= 5000) return false;
    if (
      filters.price === "5000to10000" &&
      (ProductPrice < 5000 || ProductPrice > 10000)
    )
      return false;
    if (
      filters.price === "10000to20000" &&
      (ProductPrice < 10000 || ProductPrice > 20000)
    )
      return false;
    if (filters.price === "above20000" && ProductPrice < 20000) return false;

    return true;
  });

  return (
    <div>
      <section className="custom-container py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <h2 className="font-dm responsiveheading2 font-semibold! text-[#cd6632]">
              {" "}
              {`Designer Wallpapers`}{" "}
            </h2>
            <p className="font-dm responsive-text text-gray-500 mt-2 ">
              {" "}
              {`Explore our premium collection of customizable wallpapers crafted to elevate modern interiors with timeless elegance.`}
            </p>
          </div>
          {/* Filter Button (xs / sm / md ONLY) */}
          <div className="relative mb-6 lg:hidden" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="font-dm flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm text-[#cd6632] shadow-sm "
            >
              <FaFilter /> {` Filters`}
            </button>

            {open && (
              <div className="absolute z-50 mt-3 w-full sm:w-[320px]">
                <FilterPanel
                  filters={filters}
                  setFilters={setFilters}
                  handleCheckbox={handleCheckbox}
                  clearFilters={clearFilters}
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters (ONLY OPEN ON lg+) */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="  rounded-xl p-6 sticky top-16">
                <FilterPanel
                  filters={filters}
                  setFilters={setFilters}
                  handleCheckbox={handleCheckbox}
                  clearFilters={clearFilters}
                />
              </div>
            </aside>
            {/* Products */}
            <div className="lg:col-span-3">
              <p className="font-dm text-sm text-gray-700 mb-4">
                {`Showing`} {filteredProducts.length}
                {""}
                {` products`}{" "}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/category/${textToSlug(category.name)}/${category.id}/${textToSlug(product.Product_Name)}/${product.id}`}
                    className="block w-full"
                  >
                    <ProductCard product={product} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* FILTER PANEL */
const FilterPanel = ({ filters, setFilters, handleCheckbox, clearFilters }) => (
  <div className=" border border-gray-300 rounded-xl p-5 shadow-xl">
    <h3 className="font-dm flex items-center gap-2 font-semibold text-[#cd6632] mb-4">
      <FaFilter />
      {` Filters`}{" "}
    </h3>

    <button
      onClick={clearFilters}
      disabled={
        !filters.type.length &&
        !filters.room.length &&
        !filters.color &&
        !filters.price
      }
      className="w-full mb-5 text-sm border border-[#cd6632] text-[#cd6632] py-2 rounded-lg hover:bg-[#cd6632] hover:text-white transition disabled:opacity-40"
    >
      {` Clear Filters`}
    </button>

    <FilterBlock title="Type">
      {["Premium", "Standard", "Economy"].map((t) => (
        <Checkbox
          key={t}
          label={t}
          onChange={() => handleCheckbox("type", t)}
          checked={filters.type.includes(t)}
        />
      ))}
    </FilterBlock>
    <FilterBlock title="Room">
      {["Living Room", "Bedroom", "Office"].map((r) => (
        <Checkbox
          key={r}
          label={r}
          checked={filters.room.includes(r)}
          onChange={() => handleCheckbox("room", r)}
        />
      ))}
    </FilterBlock>
    <FilterBlock title="Color">
      <div className="font-dm flex gap-3 flex-wrap">
        {[
          { name: "white", hex: "#ffffff" },
          { name: "black", hex: "#000000" },

          { name: "light-gray", hex: "#e5e7eb" },
          { name: "gray", hex: "#6b7280" },
          { name: "dark-gray", hex: "#374151" },

          { name: "blue", hex: "#2563eb" },
          { name: "sky-blue", hex: "#38bdf8" },
          { name: "navy", hex: "#1e3a8a" },

          { name: "green", hex: "#16a34a" },
          { name: "emerald", hex: "#10b981" },
          { name: "dark-green", hex: "#14532d" },

          { name: "red", hex: "#dc2626" },
          { name: "orange", hex: "#f97316" },
          { name: "amber", hex: "#f59e0b" },

          { name: "purple", hex: "#7c3aed" },
          { name: "pink", hex: "#ec4899" },

          { name: "beige", hex: "#f5f5dc" },
          { name: "brown", hex: "#92400e" },
        ].map((c) => (
          <button
            key={c.name}
            onClick={() => setFilters({ ...filters, color: c.name })}
            className="w-6 h-6 rounded-full border border-gray-400"
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>
    </FilterBlock>

    <FilterBlock title="Price Range">
      <Radio
        label="Under ₹5,000"
        checked={filters.price === "under5000"}
        onChange={() => setFilters({ ...filters, price: "under5000" })}
      />
      <Radio
        label="₹5,000 - ₹10,000"
        checked={filters.price === "5000to10000"}
        onChange={() => setFilters({ ...filters, price: "5000to10000" })}
      />
      <Radio
        label="₹10,000 - ₹20,000"
        checked={filters.price === "10000to20000"}
        onChange={() => setFilters({ ...filters, price: "10000to20000" })}
      />
      <Radio
        label="Above ₹20,000"
        checked={filters.price === "above20000"}
        onChange={() => setFilters({ ...filters, price: "above20000" })}
      />
    </FilterBlock>
  </div>
);

const FilterBlock = ({ title, children }) => (
  <div className="mb-5">
    <h4 className="font-dm text-sm font-semibold mb-3 text-gray-700">
      {" "}
      {title}
    </h4>
    {children}
  </div>
);

const Checkbox = ({ label, checked, onChange }) => (
  <label className=" font-dm flex items-center gap-2 text-sm mb-2 cursor-pointer text-gray-600">
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);

const Radio = ({ label, checked, onChange }) => (
  <label className="font-dm flex items-center gap-2 text-sm mb-2 cursor-pointer text-gray-600">
    <input type="radio" name="price" checked={checked} onChange={onChange} />
    {label}
  </label>
);
