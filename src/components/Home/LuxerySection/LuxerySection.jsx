import React from "react";

const LuxerySection = () => {
  return (
    <section className="w-full bg-black overflow-hidden relative">
      <div className="relative w-full  aspect-[21/5] min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[340px]">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-60 mix-blend-screen"
          data-alt="Close up video still of shimmering gold and silk wallpaper texture"
          style={{
            backgroundImage: `url(
              ${"https://lh3.googleusercontent.com/aida-public/AB6AXuDVFqqZSkBfp9Te5gA6DgcebFEuZxXydE_k94E_B28aK0dxdJJmU1dnxu1Jh8tJOia4J0HAAA3Gi961dGDXB4P7Zyw7NlZGlH31F7Oz5LijSR9mNQxO7mV5nZQ0v3HhNVgl17WVNqjYbJkS7S9hd6lF1n85BPjrzX98muLBhdLnaJTI9BdqwpvYLUT_yUIQFP5NPa14pH88EpxrtlJVv5Hji1BviRq1VOUBbIX9092OjkNzidD9Da_jo4Zpj_KkyoTQbwAtew18w6U"}
            )`,
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-r from-background-dark via-transparent to-background-dark"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="max-w-3xl">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">
              texture
            </span>
            <h3 className="responsive-heading uppercase mb-4 tracking-tighter font-extrabold!">
              {`Tactile Luxury`}
            </h3>
            <p className="responsive-text  text-white/80 font-light max-w-2xl mx-auto italic">
              {`  "Experience the shifting light on our premium 350gsm papers. Crafted for depth, designed for eternity."`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxerySection;
