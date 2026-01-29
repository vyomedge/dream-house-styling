import AboutUs from '@/components/AboutUs/AboutUs'
import React from 'react'

export const metadata = {
  title: "About Us | Dream Home Styling – Home Decor Store Bhopal",
  description: "Learn about Dream Home Styling, a trusted home décor store in Bhopal offering customized wallpapers, curtains, blinds, and interior solutions across MP.",
  keywords: ["about dream home styling", "home decor store in bhopal", "customized home decor bhopal,", "interior design solutions bhopal", " wallpaper curtain store bhopal", "home furnishing store madhya pradesh", "interior decor store indore"],
  alternates: { canonical: "https://www.dreamhomestyling.com/about-us" },
  openGraph: {
    title: "About Us | Dream Home Styling – Home Decor Store Bhopal",
    description: "Learn about Dream Home Styling, a trusted home décor store in Bhopal offering customized wallpapers, curtains, blinds, and interior solutions across MP.",
    url: "https://www.dreamhomestyling.com/",
    images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us | Dream Home Styling – Home Decor Store Bhopal",
    description: "Learn about Dream Home Styling, a trusted home décor store in Bhopal offering customized wallpapers, curtains, blinds, and interior solutions across MP.",
    images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const page = () => {
  return (
    <div>
       <AboutUs />
    </div>
  )
}

export default page