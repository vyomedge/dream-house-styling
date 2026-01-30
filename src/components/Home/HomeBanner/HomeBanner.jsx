import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url("/1.jpg")`,
        }}
      >
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgb(16 29 34 / 86%) 0%, rgb(18 30 35 / 70%) 50%, transparent 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-lg">
            <span
              className="font-dm inline-block px-4 py-1 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "#f2e3dc",
                color: "#cd6632",
              }}>
             {` NEW COLLECTION 2026`}
            </span>

            <h1 className="font-dm responsive-heading font-bold mb-6 leading-tight"
              style={{ color: "#ffffff" }} >
             Transform Your Space
            </h1>
            <p className="font-dm responsive-text mb-8 max-w-md"
              style={{ color: "rgba(255, 255, 255, 0.85)" }} >
            {`Discover premium wallpapers, curtains, blinds, upholstery, and carpets—crafted to match your style, space, and lifestyle. From single walls to complete interiors, we help you create spaces that feel truly yours.`}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/category">
              <button
                className="font-dm responsive-text px-6 py-2 rounded-md font-medium  transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                style={{ backgroundColor: "#cd6632", color: "#ffffff" }}
              >
               Shop Collections
                <ArrowRight className="w-5 h-5" />
              </button>
              </Link>
              <Link href="/contact-us">
              <button
                className="font-dm responsive-text px-6 py-2 rounded-md font-medium  transition-all duration-300 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "#ffffff",
                }}
              >
                 Get Free Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
