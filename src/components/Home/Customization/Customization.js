"use client";
import React from "react";

const Customization = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Product & Design",
      desc: "Explore our curated collections and select the style that fits your space.",
      icon: "palette",
    },
    {
      step: "02",
      title: "Share Room Details",
      desc: "Share measurements or request an expert visit for precise sizing.",
      icon: "straighten",
    },
    {
      step: "03",
      title: "Select Material & Finish",
      desc: "Finalize fabrics, colors, textures, and premium finishes.",
      icon: "layers",
    },
    {
      step: "04",
      title: "Custom-Made & Delivered",
      desc: "We custom craft your selection and deliver it to your doorstep.",
      icon: "local_shipping",
    },
  ];

  return (
    <section className="relative w-full bg-white py-15">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-dm responsiveheading2 font-bold! text-gray-900"> {`How Customization Works`}</h2>
          <p className="font-dm text-gray-600 mt-4 max-w-xl mx-auto"> {`A seamless process designed to deliver interiors tailored perfectly to your space.`}</p>
        </div>
        <div className="font-dm grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index}
              className="relative group bg-white border border-gray-200 rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:border-[#cd6632] shadow-md hover:shadow-xl">
              <p className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#cd6632] text-white text-xs font-bold px-4 py-1 rounded-full">{item.step}</p>
              <p className="material-symbols-outlined text-[#cd6632] text-4xl mb-5 block group-hover:scale-110 transition">{item.icon}</p>
              <h3 className="font-dm text-gray-900 font-semibold! responsiveheading6 mb-3">{item.title}</h3>
              <p className="font-dm text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="cursor-pointer font-dm bg-[#cd6632] hover:bg-[#ad6d4c] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg">
            {` Start Customizing`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customization;
