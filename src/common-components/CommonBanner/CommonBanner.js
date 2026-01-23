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
                        src={bgImage}
                        alt={title}
                        fill
                        priority
                        className="object-cover object-center"
                    />
                )}
                 <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/60" />
                <div className="custom-container relative z-10 text-center px-6 max-w-4xl text-white">
                    {tag && (
                        <span className="inline-block mb-5 px-4 py-1 rounded-full text-xs tracking-widest uppercase text-[#00D4C8] border border-cyan-400/40 bg-cyan-400/10">
                            {tag}
                        </span>
                    )}
                    <h1 className="responsive-heading font-bold leading-tight">
                        {title}{" "}
                        {highlight && (
                            <span className="dm-sans block text-[#00D4C8]">{highlight}</span>
                        )}
                    </h1>
                    {subtitle && (
                        <p className="font-poppins mt-6 text-gray-200 text-base responsive-text"> {subtitle} </p>
                    )}
                    {subtitle1 && (
                        <p className="font-poppins mt-1 text-gray-200 text-base responsive-text"> {subtitle1} </p>
                    )}
                    {subtitle2 && (
                        <p className="font-poppins mt-1 text-gray-200 text-base responsive-text"> {subtitle2}</p>
                    )}
                    {subtitle3 && (
                        <p className="mt-1 text-gray-200 text-base responsive-text"> {subtitle3} </p>
                    )}
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
                                            className="hover:text-[#00D4C8]"
                                            >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-400">{item.label}</span>
                                    )}

                                    {index < breadcrumbs.length - 1 && (
                                        <span className="text-gray-500">/</span>
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
