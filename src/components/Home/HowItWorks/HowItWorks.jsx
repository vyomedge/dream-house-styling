import React from "react";

const HowItWorks = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 py-20">
      <div className="border-2 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <circle cx="100" cy="0" fill="#13daec" r="80"></circle>
          </svg>
        </div>
        <div className="flex-1 space-y-6 z-10">
          <h2 className="responsive-heading font-black! text-white leading-tight"> {`Need a closer look? Order your swatches.`}</h2>
          <p className="text-slate-300 responsive-text">{` See the colors and feel the texture in your own home before committing to a full roll.`} </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#cd6632] text-slate-900 px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all">
              Shop Sample Kits
            </button>
            <button className="bg-slate-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-700 transition-all">
              How it Works
            </button>
          </div>
        </div>
        <div
          className="flex-1 w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl z-10"
          data-alt="Close up of high quality textured wallpaper samples"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpbPmKeznB5-cXYyDlsyeypWruqHBDI5VTy3B926AEUaJ0ZKjLungTSFnYlFOuC1ltzcnVDwBvkFXocXEiVXlMagUXF71hJ5xxnlxHGNyTIYhq2zyuYWrc_2gi68Tywp_DrVuK6ljlCWNLWsxDmPK9M6MlNz0SXmRHhB_aRI2wP8EGsMYeflIlXTdPcg2P5tFOFUxmSejgfod2DESfaQv0SfxwY_7IdG2Qbt53tgPbNO5to91NJ6nD4IsUKjgjW7xiOxZl4me5Mos")`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </section>
  );
};

export default HowItWorks;
