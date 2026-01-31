import React from "react";
import "./FloatingWhatsapp.css";
import { BsWhatsapp } from "react-icons/bs";

const FloatingWhatsapp = () => {
  return (
    <div className="fixed bottom-4 md:bottom-8 right-0 md:right-8 z-[100] flex items-center group whatsapp-float">
      <div className="tooltip invisible opacity-0 absolute right-full mr-4 whitespace-nowrap bg-(--primaryColor2) backdrop-blur-md border border-white/10 text-white text-xs font-bold py-3 px-5 rounded-full transition-all duration-400 translate-x-4 shadow-2xl">
        Chat with an Expert
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-background-dark/95 border-r border-t border-white rotate-45"></div>
      </div>
      <a
        className=" bg-whatsapp/20   p-4 rounded-full flex items-center justify-center  hover:scale-110  transition-all duration-500 group"
        href="https://api.whatsapp.com/send?phone=917509666466"
      >
        <div className="contact_icon">
          <BsWhatsapp />
        </div>
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
