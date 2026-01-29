"use client";

import React from "react";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import Link from "next/link";

const services = [
  {
    title: "Interior Consultation",
    description:
      "Personalized design guidance based on your space, lifestyle, budget, and preferences.",
    icon: <DesignServicesOutlinedIcon />,
  },
  {
    title: "3D Design & Visualization",
    description:
      "Experience your interiors before execution with realistic 3D views and layout planning.",
    icon: <ViewInArOutlinedIcon />,
  },
  {
    title: "Turnkey Interior Execution",
    description:
      "Complete project execution with quality materials, timelines, and professional supervision.",
    icon: <HomeWorkOutlinedIcon />,
  },
];

const InteriorSolutions = () => {
  return (
    <section className="w-full bg-[#cd6632] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-dm responsiveheading2 font-bold! text-white mb-4"> {`Complete Interior Design Solutions`}</h2>
          <p className="text-white/90 font-dm responsive-text">{`Looking for more than just products? We offer end-to-end interior design services for homes and offices — from concept to completion.`}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((item, index) => (
            <div key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#cd6632]/10 text-[#cd6632] mb-6">{item.icon} </div>
              <h4 className="font-dm responsiveheading6 font-semibold! text-gray-900 mb-2">{item.title}</h4>
              <p className="font-dm responsive-text text-gray-600 leading-relaxed"> {item.description} </p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact-us" className="inline-block">
            <button type="button"
              className=" inline-flex items-center gap-2 bg-white text-[#cd6632] font-bold px-8 py-4 rounded-full  transition-all duration-300 hover:bg-white/90 hover:text-[#cd6632]  hover:-translate-y-1 hover:shadow-2xl cursor-pointer ">
             {` Book Free Design Consultation`}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteriorSolutions;
