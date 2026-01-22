"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const FALLBACK_IMAGE = "/Rectangle.png";

export default function CategoryBanner({
    title,
    subtitle,
    bgImage = null,
}) {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        if (bgImage) {
            setImgSrc(bgImage);
        } else {
            setImgSrc(FALLBACK_IMAGE);
        }
    }, [bgImage]);

    return (
        <section className="relative w-full min-h-50 md:min-h-80 overflow-hidden bg-cyan-50">
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
                <h1 className="responsive-heading  font-semibold! text-white">{title}</h1>
                {subtitle && (
                    <p className="mt-2 responsive-text  text-white/90 max-w-2xl">{subtitle}</p>
                )}
            </div>
        </section>
    );
}
