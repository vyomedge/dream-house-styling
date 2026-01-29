import Categrory from '@/components/Category/Category';
import React from 'react'

export const metadata = {
  title: "Contact Us | Dream Home Styling – Home Decor Store Bhopal",
  description: "Contact Dream Home Styling in Bhopal for customized wallpapers, curtains, blinds, and interior design services. Visit our Neelbad store or call us today.",
  keywords: ["contact dream home styling", "home decor store contact bhopal", " interior decor shop bhopal contact,", "wallpaper curtain store bhopa", " customized home decor bhopal", "interior designer bhopal", " home furnishing store madhya pradesh", " home furnishing store madhya pradesh", " interior decor store indore"],
  alternates: { canonical: "https://www.dreamhomestyling.com/category" },
  openGraph: {
    title: "Contact Us | Dream Home Styling – Home Decor Store Bhopal",
    description: "Contact Dream Home Styling in Bhopal for customized wallpapers, curtains, blinds, and interior design services. Visit our Neelbad store or call us today.",
    url: "https://www.dreamhomestyling.com/",
    images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us | Dream Home Styling – Home Decor Store Bhopal",
    description: "Contact Dream Home Styling in Bhopal for customized wallpapers, curtains, blinds, and interior design services. Visit our Neelbad store or call us today.",
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
      <Categrory />
    </div>
  )
}

export default page