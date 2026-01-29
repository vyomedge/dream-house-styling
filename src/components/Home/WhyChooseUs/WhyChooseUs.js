"use client";

import React from "react";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const whyChoose = [
  {
    title: "Premium Quality Materials",
    description:
      "Carefully selected wallpapers and fabrics designed for long-lasting durability, comfort, and premium finish.",
    icon: <WorkspacePremiumOutlinedIcon />,
  },
  {
    title: "Custom Made for Your Space",
    description:
      "Every product is tailored specifically to your room size, color preference, design style, and usage.",
    icon: <StraightenOutlinedIcon />,
  },
  {
    title: "Expert Design Support",
    description:
      "Get professional guidance from experienced interior and décor specialists at every step.",
    icon: <SupportAgentOutlinedIcon />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-dm responsiveheading2 font-bold! text-[#cd6632] mb-2"> {`Why Choose Dream Home Styling?`}</h2>
          <p className="text-gray-600 font-dm responsive-text">{` We combine quality, customization, and expert guidance to create interiors that truly feel like home.`} </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {whyChoose.map((item, index) => (
            <div key={index}
              className="group rounded-2xl bg-white p-6 text-center border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1hover:shadow-2xl " >
              <div className=" w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full bg-[#cd6632]/10 text-[#cd6632] transition group-hover:bg-[#cd6632] group-hover:text-white ">
                {item.icon}
              </div>
              <h4 className="font-dm responsiveheading6 font-semibold! text-gray-800 mb-3"> {item.title} </h4>
              <p className="text-gray-600 font-dm responsive-text leading-relaxed ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
