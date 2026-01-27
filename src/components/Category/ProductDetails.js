"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaShoppingCart, FaCommentDots, FaRuler } from "react-icons/fa";
import { useState } from "react";
import CustomQuoteForm from "./CustomQuoteForm";
import ProductDetailDiscription from "./ProductDetailDiscription";

export default function ProductDetail() {
  const [activeImg, setActiveImg] = useState("/wallpaper1.jpg");
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <>
      <section className="bg-white ">
        <div className=" mx-auto ">
          {showQuoteForm ? (
            <div className="">
              <CustomQuoteForm />
            </div>
          ) : (
            <>
              {/* Breadcrumb */}
                <div className="">
              <div className="custom-container py-12">
                <div className="text-sm text-gray-700 mb-4">
                  <Link href="/" className="hover:text-[#cd6632]">{` Home`}</Link>{" "}
                  /
                  <Link href="/category" className="mx-1 hover:text-[#cd6632]">{`Category`} </Link>{" "}
                  /
                  <span className="text-gray-400">{` Elegant Floral Wallpaper`}</span>
                </div>
                <Link href="/category" className="inline-flex items-center gap-2 text-sm text-[#cd6632] mb-6"> <FaArrowLeft /> {`Back to Category`}</Link>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <div className="relative w-full  h-[320] sm:h-[420] rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src={activeImg}
                        alt="Elegant Floral Wallpaper"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="flex gap-4 mt-4">
                      {["/wallpaper1.jpg", "/wallpaper1.jpg", "/wallpaper1.jpg"].map(
                        (img, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setActiveImg(img)}
                            className={`relative w-20 h-20 rounded-lg overflow-hidden border ${activeImg === img ? "border-[#cd6632]" : "border-gray-200"
                              }`}>
                            <Image src={img} alt="" fill className="object-cover" />
                          </button>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="responsiveheading2 text-gray-700 font-semibold mb-2">{`Elegant Floral Wallpaper`}</h2>
                    <p className="text-sm text-gray-700 max-w-md mb-4">{`Premium floral design wallpaper perfect for living rooms and bedrooms`}</p>
                    <p className="text-2xl font-semibold text-[#cd6632] mb-6">{`₹2,500`}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">{`Size`}</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>{`• Standard`}</li>
                        <li>{`• Custom Size (Request Measurement)`}</li>
                      </ul>
                    </div>
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold mb-3 text-gray-700">{`Color`}</h4>
                      <div className="flex gap-3">
                        {["#f5f5dc", "#2563eb", "#16a34a", "#facc15"].map((c, i) => (
                          <span
                            key={i}
                            className="w-8 h-8 rounded-full border border-gray-400 cursor-pointer"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="space-y-3 max-w-sm">
                      <button type="button"
                        className="w-full flex items-center justify-center gap-3 bg-[#cd6632] text-gray-700 py-3 rounded-lg text-sm font-medium hover:opacity-95">
                        <FaShoppingCart /> {` Add to Cart`}
                      </button>

                      <button type="button"
                        onClick={() => setShowQuoteForm(true)}
                        className="w-full flex items-center justify-center gap-3 border border-[#cd6632] text-[#cd6632] hover:text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-[#cd6632]" >
                        <FaCommentDots /> {` Get Custom Quote`}
                      </button>

                      <button type="button"
                        onClick={() => setShowQuoteForm(true)}
                        className="w-full flex items-center justify-center gap-3 border border-gray-300 text-gray-700 hover:text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-50" >
                        <FaRuler /> {` Request Measurement`}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6">
              <ProductDetailDiscription />
              </div>
              </div>
            </>
          )}

        </div>

      </section>
    </>
  );
}