import HomePage from "@/components/Home/HomePage";

export const metadata = {
  title: "Home Decor Store in Bhopal | Dream Home Styling",
  description: "Dream Home Styling is a premium home décor store in Bhopal offering customized wallpapers, curtains, blinds, upholstery, carpets & interior design services.",
  keywords: ["home decor store in bhopal", "customized home decor", "wallpapers curtains blinds bhopal", " interior design services bhopal", " home furnishing store madhya pradesh", " interior decor store indore", "dream home styling"],
  alternates: { canonical: "https://www.dreamhomestyling.com/" },
  openGraph: {
    title: "Home Decor Store in Bhopal | Dream Home Styling",
    description: "Dream Home Styling is a premium home décor store in Bhopal offering customized wallpapers, curtains, blinds, upholstery, carpets & interior design services.",
    url: "https://www.dreamhomestyling.com/",
    images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Home Decor Store in Bhopal | Dream Home Styling",
    description: "Dream Home Styling is a premium home décor store in Bhopal offering customized wallpapers, curtains, blinds, upholstery, carpets & interior design services.",
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

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
