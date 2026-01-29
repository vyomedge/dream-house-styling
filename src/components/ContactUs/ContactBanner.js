"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactBanner = ({ bannerContent }) => {
  const { heading1, heading2, backgroundImg, buttons, breadcrumbs = [], } = bannerContent;

  return (
    <>
      <section className="relative grid place-items-center gap-5 py-10 md:py-20 px-2 overflow-hidden bg-[#739e82]">
        <div className="relative z-30 grid place-items-center text-center md:w-[80%]">
          <h1 className={`font-dm responsive-heading font-semibold ${backgroundImg ? "text-white" : "text-[#53657D]"}`}>{heading1}</h1>
          <h2 className={`font-dm text-[3vmin] mt-2 ${backgroundImg ? "text-white" : "text-[#53657D]"}`} > {heading2} </h2>
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
                    className="font-dm bg-[#cd6632] hover:bg-[#cd6632]/80 text-white px-8 py-3 rounded-none capitalize " >
                    {btn.btnName}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        {backgroundImg && (
          <div className="absolute inset-0 z-20  " />
        )}

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
      {breadcrumbs.length > 0 && (
        <div className="bg-[#101d22]">
          <div className="custom-container py-4 text-sm text-gray-300">
            <nav className="flex items-center gap-2">
              {breadcrumbs.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-dm hover:text-[#cd6632]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-dm text-gray-400">{item.label}</span>
                  )}

                  {index < breadcrumbs.length - 1 && (
                    <span className="text-gray-500 font-dm">/</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactBanner;
