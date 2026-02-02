"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const FALLBACK_IMAGE = "/Rectangle.png";

export default function CategoryBanner({ title, subtitle, bgImage = null,  breadcrumbs = [], }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (bgImage) {
      setImgSrc(bgImage);
    } else {
      setImgSrc(FALLBACK_IMAGE);
    }
  }, [bgImage]);

  return (
    <>
    <section className="relative w-full min-h-50 md:min-h-80 overflow-hidden ">
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={title || "Banner"}
          fill
          priority
          className="object-cover"
          onError={() => {
            if (imgSrc !== FALLBACK_IMAGE) {
              setImgSrc(FALLBACK_IMAGE);
            }
          }}
        />
      )}
      {imgSrc && <div className="absolute inset-0 bg-black/50" />}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="font-dm responsive-heading  font-semibold! text-(--primaryColor)">
          {title}
        </h1>
        {subtitle && (
          <p className="font-dm mt-2 responsive-text  text-white/90 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
      {breadcrumbs.length > 0 && (
                <div className="bg-[#101d22]">
                    <div className="custom-container py-4 text-sm text-gray-300">
                        <nav className="flex items-center gap-2">
                            {breadcrumbs.map((item, index) => (
                                <span key={index} className="font-dm flex items-center gap-2">
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="hover:text-[#cd6632] font-dm"
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-400 font-dm">{item.label}</span>
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
}
