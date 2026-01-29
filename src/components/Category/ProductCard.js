"use client";

import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/4] rounded-xl overflow-hidden bg-[#15242a] mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="font-dm absolute top-4 right-4 bg-[#cd6632]/90 text-[#101d22] px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
          {product.type}
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="font-dm text-gray-800 text-sm font-medium tracking-wide">
            View Details →
          </span>
        </div>
      </div>
      <h3 className="font-dm responsiveheading6 font-semibold! text-gray-700 group-hover:text-[#cd6632] transition-colors leading-snug"> {product.title}</h3>
      <p className="font-dm text-gray-600 text-sm mt-1">{product.discription}</p>
      <p className="font-dm text-[#cd6632] font-bold mt-2"> ₹{product.price.toLocaleString("en-IN")}</p>
    </div>
  );
}
