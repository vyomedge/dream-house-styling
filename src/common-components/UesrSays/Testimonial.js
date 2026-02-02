"use client";
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ testimonialData, icon }) => {
  const FALLBACK_IMAGE =
    "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png";

  return (
    <div className="custom-container  text-center py-5 md:py-10 ">
      <h2 className="font-dm responsiveheading2  mb-6 leading-1.5 text-(--primaryColor) font-bold! ">{`What Our Customers Say`}</h2>
      <div className="relative max-w-4xl mx-auto shadow-xl shadow-black/5 p-4 lg:p-6 text-center flex flex-col items-center cursor-pointer rounded-lg overflow-hidden border border-gray-300">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            gap: "1.5rem",
            arrows: false,
            pagination: true,
          }}
          aria-label="Client Testimonials"
          className="w-full"
        >
          {testimonialData?.map(
            ({ icon, title, rating, description }, index) => (
              <SplideSlide key={index}>
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between w-full mb-6"
                >
                  <div className=" ">
                    <Image
                      src={icon || FALLBACK_IMAGE}
                      alt={title}
                      width={80}
                      height={80}
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>
                  <div className="flex-1  text-left  sm:pl-6 mb-4">
                    <h3 className="font-dm responsiveheading6 font-semibold mb-2 text-[#cd6632]">
                      {" "}
                      {title}{" "}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          color={i < rating ? "#FFD700" : "#ccc"}
                          size={18}
                        />
                      ))}
                    </div>
                    <p className="font-dm responsiveheading6 font-light text-gray-500 leading-10 pr-1 lg:pr-10 ">
                      {description}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ),
          )}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonial;
