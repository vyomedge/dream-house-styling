"use client";

import Head from "next/head";

const SEO = ({
    title = "Default Title",
    description = "Default description",
    keywords = [],
    image = "https://res.cloudinary.com/dtidgvjlt/image/upload/v1763040883/Shiksho_logo_png_plsk6o.png",
    route = "/",
    favicon = "/favicon.ico",
}) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const canonical = route.startsWith("http") ? route : `${baseUrl}${route}`;
    const ogImage = image.startsWith("http") ? image : `${baseUrl}${image}`;

    return (
        <Head>
            {/* Basic SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(", ")} />
            )}
            <link rel="canonical" href={canonical} />
            <link rel="icon" href={favicon} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:alt" content={title} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/*  Robots Meta */}
            <meta name="robots" content={robots} />
        </Head>
    );
};

export default SEO;
