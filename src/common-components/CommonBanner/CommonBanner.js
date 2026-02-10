"use client";

import Image from "next/image";
import Link from "next/link";

export default function CommonBanner({
  title,
  highlight,
  subtitle,
  subtitle1,
  subtitle2,
  subtitle3,
  tag,
  bgImage,
  breadcrumbs = [],
}) {
  return (
    <>
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {bgImage && (
          <Image
            src={bgImage ?? "/images/no-image.jpg"}
            alt={title}
            fill
            priority
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/60" />
        <div className="custom-container relative z-10 text-center px-6 max-w-4xl text-white">
          {tag && (
            <span className="inline-block mb-5 px-4 py-1 rounded-full text-xs tracking-widest uppercase text-[#cd6632] border border-[#cd6632] bg-[#cd6632]/10">
              {tag}
            </span>
          )}
          <h1 className="font-dm responsive-heading font-bold leading-tight">
            {title}
            {highlight && (
              <span className="font-dm text-[#cd6632] ml-2">{highlight}</span>
            )}
          </h1>
          {subtitle && (
            <p className="font-dm mt-6 text-gray-200 text-base responsive-text">
              {" "}
              {subtitle}{" "}
            </p>
          )}
          {subtitle1 && (
            <p className="font-dm mt-1 text-gray-200 text-base responsive-text">
              {" "}
              {subtitle1}{" "}
            </p>
          )}
          {subtitle2 && (
            <p className="font-dm mt-1 text-gray-200 text-base responsive-text">
              {" "}
              {subtitle2}
            </p>
          )}
          {subtitle3 && (
            <p className="font-dm mt-1 text-gray-200 text-base responsive-text">
              {" "}
              {subtitle3}{" "}
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
