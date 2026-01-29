"use client";
import Link from "next/link";
import React from "react";
import { MdLocationOn, MdCall, MdDirections } from "react-icons/md";

const VisitStore = () => {
  return (
    <section className="w-full bg-[#cd6632] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-14 text-white shadow-xl">
          <h2 className="font-dm responsiveheading2 font-bold mb-2 text-center">{`Visit Our Store – Bhopal`}</h2>
          <p className="font-dm responsive-text font-semibold text-center mb-2">{`Dream Home Styling (DHS)`}</p>
          <div className="flex flex-col items-center text-center space-y-2 text-sm md:text-base leading-relaxed">
            <p className="font-dm responsive-text">{`Ground Floor, Maran Complex, Shop No. 9Opp. HP Petrol Pump, Neelbad Square, Bhopal, Madhya Pradesh – 462044`}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
            <Link href="tel:+917509666466"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 transition px-6 py-3 rounded-full font-medium" >
              <MdCall className="text-sm" />
              <p className="font-dm responsive-text">{`Call: 075096 66466`}</p>
            </Link>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Dream+Home+Styling+Neelbad+Bhopal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-[#cd6632] hover:bg-gray-100 transition px-6 py-3 rounded-full font-bold" >
              <MdDirections className="text-sm" />
              <p className="font-dm responsive-text">{`Get Directions`}</p>
            </Link>
          </div>
          <p className="text-center font-dm responsive-text text-white/90 mt-3 tracking-wide">
            Serving: <strong>Bhopal</strong> • <strong>Indore</strong> •{" "}
            <strong>Madhya Pradesh</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisitStore;
