"use client";

import Image from "next/image";
import React from "react";

const ContactBanner = ({ bannerContent }) => {
  const { heading1, heading2, backgroundImg, buttons } = bannerContent;

  return (
    <section className="relative grid place-items-center gap-5 py-10 md:py-20 px-2 overflow-hidden bg-[#739e82]">
      <div className="relative z-30 grid place-items-center text-center md:w-[80%]">
        <h1 className={`responsive-heading font-semibold ${backgroundImg ? "text-white" : "text-[#53657D]"}`}>{heading1}</h1>
        <h2 className={`text-[3vmin] mt-2 ${backgroundImg ? "text-white" : "text-[#53657D]"}`} > {heading2} </h2>
      </div>

      {/* Buttons */}
      {buttons && (
        <div className="relative z-30">
          <div className="flex flex-wrap justify-center gap-6">
            {buttons.map((btn, index) => {
              const handleClick = () => {
                if (btn.type === "call") {
                  window.location.href = `tel:${btn.value}`;
                }
                if (btn.type === "scroll") {
                  const element = document.getElementById(btn.value);
                  if (element)
                    element.scrollIntoView({ behavior: "smooth" });
                }
              };

              return (
                <button key={index} onClick={handleClick}
                  className="bg-[#00D4C8] text-white px-8 py-3 rounded-none capitalize hover:bg-cyan-300 transition" >
                  {btn.btnName}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Gradient Overlay */}
      {backgroundImg && (
       <div className="absolute inset-0 z-20  " />
      )}

      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={backgroundImg ?? "/Rectangle 1.png"}
          alt="homebanner"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 600px) 600px, 100vw"
        />
      </div>
    </section>
  );
};

export default ContactBanner;
