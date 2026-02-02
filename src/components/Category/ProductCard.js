"use client";

import Image from "next/image";
import patternGeometric from "@/assets/pattern-geometric.jpg";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/4] rounded-xl overflow-hidden bg-[#15242a] mb-4">
        <Image
          src={product?.images?.[0]?.image ?? patternGeometric}
          // alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* <div className="font-dm absolute top-4 right-4 bg-[#cd6632]/90 text-[#101d22] px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
          {product.type}
        </div> */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="font-dm text-white text-sm font-medium tracking-wide">
            View Details →
          </span>
        </div>
      </div>
      <h3 className="font-dm responsiveheading6 font-semibold! text-gray-700 group-hover:text-[#cd6632] transition-colors leading-snug">
        {" "}
        {product.Product_Name}
      </h3>
      {/* <p
        className="font-dm text-gray-600 text-sm mt-1 line-clamp-2"
        dangerouslySetInnerHTML={{
          __html: product?.Product_Description || "",
        }}
      ></p> */}
      <div className="flex justify-between items-center mt-1">
        <div className="d-flex space-x-1">
          <span className="text-sm font-black text-gray-600 font-normal line-through ">
            ₹ {product.Prices[0].Price[0].Price}
          </span>
          {product.Prices[0].Price[0].Discount && (
            <span className="text-sm font-black text-(--primaryGreen) font-normal ">
              ({product.Prices[0].Price[0].Discount}% off)
            </span>
          )}
        </div>
        <p className="font-dm text-[#cd6632] font-bold ">
          {" "}
          ₹{product.Prices[0].Price[0].SalePrice}
        </p>
      </div>
    </div>
  );
}
