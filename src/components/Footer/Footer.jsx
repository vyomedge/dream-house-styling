"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebookF, } from "react-icons/fa6";

const bottomLinks = [
  {
    label: "Privacy Policy",
    url: "privacy-policy",
  },
  {
    label: "Terms and Conditions",
    url: "terms-and-conditions",
  },
  {
    label: "Disclaimer",
    url: "disclaimer-policy",
  },
];

const Footer = () => {
  const pathname = usePathname();

  const collectionLinks = [
    { label: "Wallpapers", url: "" },
    { label: "Curtains", url: "" },
    { label: "Blinds", url: "" },
    { label: "Upholstery & Sofa Fabrics", url: "" },
    { label: "Carpets & Rugs", url: "" },
    { label: "Interior Design Services", url: "" },
  ];
  const supportLinks = [
    { label: "Contact Us", url: "/contact-us" },
    { label: "About Us", url: "/about-us" },
    { label: "Category", url: "/category" },
    { label: "Terms & Conditions", url: "/terms-and-conditions" },
    { label: "Privacy Policy", url: "/privacy-policy" },
    { label: "Disclaimer", url: "/disclaimer-policy" },
  ];

  const footerData = {
    contactInfo: {
      phone: "+91 75096 66466",
      email: " info@dreamhomestyling.com",
    },
    socialMedia: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/dreamhomestyling.dhs?fbclid=IwY2xjawPlOPRleHRuA2FlbQIxMABicmlkETFhYzloWGswUGloVUNRQTBLc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjeB-HQH8GRjkBWXdY8UiWyEEOf5ivjsf8QL6JJqMdUwf64kW7iGwp0LNzF4_aem_9sjkTOFsetnH4t0YBoHrjg",
        icon: FaInstagram,
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/dreamhomestylingofficial",
        icon: FaFacebookF,
      },
      {
        name: "WhatsApp",
        url: "https://wa.me/917509666466",
        icon: IoLogoWhatsapp,
      },
      {
        name: "Email",
        url: "mailto:info@dreamhomestyling.com",
        icon: MdEmail,
      },
    ],
    copyright: "Dream Home Styling. ",
  };

  return (
    <>
      <div className="bg-[#101d22]">
        <footer className="custom-container relative w-full overflow-hidden text-white/80">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            data-alt="Dark dramatic floral wallpaper pattern with deep reds and purples"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq6of0mqRU2evYFSn3lmP5Hk4UsxnX32IAC_nnWcOcKcT8FO3Ac7HDlsd8mZe0DGvc_9N6nDXp-sd2iGFFjm0ppeSNeIQzjo95Rsi0oYvI_CtmuBVbIAyHrsOqQbLuJ9nZ8JiczAPqwviEu_B6g_kRm3F4lwtYRQhG4shjqLNCHleoCux3TGfA61EiU2-xxKLl423LWT3npJwMKMjJ5HlrGEH8qKRzRUwJ1Xx77IrNsRjANMCm2eqw31GI_HqSf-TgCHH7YxfHapk')`, }} ></div>
          <div
            style={{ position: "absolute", inset: 0, background: `linear-gradient( to top, rgba(16, 29, 34, 1), rgba(16, 29, 34, 0.95), rgba(16, 29, 34, 0.9) )`, }} ></div>
          <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
            <div className="glass2 p-12 rounded-2xl max-w-4xl mx-auto mb-32 text-center border border-white/20">
              <h4 className="font-dm responsiveheading2 font-bold! text-white mb-4 uppercase tracking-tighter">{`Join the Aesthetic Circle`}</h4>
              <p className="font-dm text-white/60 mb-8 max-w-md mx-auto resposive-text"> {" "} {`Get early access to limited edition drops and interior design tips from our curators.`}{" "} </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input className="font-dm flex-1 bg-white/10 border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/30 focus:ring-primary focus:border-primary"
                  placeholder="Your aesthetic email..."
                  type="email"
                />
                <button className="font-dm bg-[#cd6632]  hover:bg-[#ad6d4c]/90 text-white font-bold px-8 py-4 rounded-lg transition-all">
                  {` Subscribe`}
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 lg:col-span-1">
                <div className="flex items-center gap-3 text-white mb-6">
                  <Link href="/">
                    <div className="relative w-[100px] md:w-[100px] h-[150px]  md:h-[127px] mb-2 sm:mb-4 ">
                      <Image
                        src="/images/logo.png"
                        alt="DHS Logo"
                        fill
                        className=" object-contain"
                      />
                    </div>
                  </Link>
                </div>
                <p className="font-dm text-sm leading-relaxed mb-2"> {` Dream Home Styling (DHS) — Customized wallpapers, curtains, blinds, upholstery, carpets, and interior solutions in Bhopal & Indore.`} </p>
                <a href="tel:+917509666466" className="font-dm hover:cursor-pointer">
                  <p className="font-dm text-xs leading-relaxed mb-6  flex items-center gap-2">
                    <span className="material-symbols-outlined text-gold text-xs">location_on </span>
                    <span>Neelbad, Bhopal</span>
                    <span className="text-white/40">|</span>
                    <span className="material-symbols-outlined text-gold text-xs"> call</span>
                    <span>075096 66466</span>

                  </p>
                </a>
                <div className="flex items-center gap-3.5 text-sm md:text-base font-responsive "></div>
                <p className="font-dm text-sm leading-relaxed mb-1 ">{`Follow Us : `}</p>
                <div className="font-dm flex gap-2 sm:gap-3  md:mt-2">
                  {footerData.socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-dm w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/50 transition"
                        aria-label={social.name}
                      >
                        <Icon className="text-white text-[14px] sm:text-[16px]" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="font-dm text-white font-bold uppercase tracking-widest text-sm mb-6"> {` Shopping`} </p>
                <ul className="font-dm space-y-4 text-sm font-medium">
                  {collectionLinks.map((link, index) => {
                    const isActive = pathname === link.url;
                    return (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className={` transition-colors ${isActive ? "text-[#cd6632] " : "text-gold"} hover:text-[#cd6632]`}>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <p className="font-dm text-white font-bold uppercase tracking-widest text-sm mb-6">{`Quick links`} </p>
                <ul className="font-dm space-y-4 text-sm font-medium">
                  {supportLinks.map((link, index) => {
                    const isActive = pathname === link.url;
                    return (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className={` transition-colors ${isActive ? "text-[#cd6632] " : "text-gold"} hover:text-[#cd6632] `}>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <p className="font-dm text-white font-bold uppercase tracking-widest text-sm mb-6"> {`Visit Our Store – Bhopal`}</p>
                <ul className="font-dm space-y-4 text-sm">
                  <li className="font-dm flex items-start gap-3">
                    <span className="material-symbols-outlined text-gold text-sm">location_on  </span>
                    <span className="font-dm">{`Ground Floor, Maran Complex, Shop No. 9 ,Opposite HP Petrol Pump, Neelbad Squar, Bhopal, Madhya Pradesh – 462044`}</span>
                  </li>
                  <li className="font-dm flex items-center gap-3">
                    <span className="material-symbols-outlined text-gold text-sm"> mail </span>
                    <a href="mailto:info@dreamhomestyling.com" className="font-dm text-gold hover:underline break-all" >
                      info@dreamhomestyling.com
                    </a>
                  </li>
                  <li className="font-dm flex items-start gap-3">
                    <span className="material-symbols-outlined text-gold text-sm"> phone </span>
                    <a href="tel:+917509666466" className="font-dm hover:underline" >
                      075096 66466
                    </a>
                  </li>
                  <li className="font-dm flex items-start gap-3">
                    <span className="material-symbols-outlined text-gold text-sm"> pin_drop </span>
                    <p className="font-dm"> {`Serving : Bhopal • Indore`}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]  text-white/30">
              <div className="font-dm text-xs flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[rgba(222,242,252,1)]">
                © {new Date().getFullYear()}
                <Link href="/" className="font-dm hover:underline">
                  {footerData.copyright}
                </Link>
                {""}{`All Rights Reserved.`}
                <span className="hidden md:inline text-[#cd6632]">|</span>
                <div className="flex items-center gap-2">
                  <span>
                    {`Developed by`}{" "}
                    <Link href="https://vyomedge.com/" target="_blank" rel="noopener noreferrer" className="decoration-none hover:underline" >
                      Vyomedge
                    </Link>
                  </span>
                  <Link href="https://vyomedge.com/" target="_blank" rel="noopener noreferrer" >
                    <Image
                      src={"/vyomedgelogo.webp"}
                      alt="Vyomedge Website"
                      width={25}
                      height={25}
                      className="rounded-full "
                    />
                  </Link>
                </div>
              </div>
              <div className="font-dm flex items-center justify-center gap-4 text-xs">
                {bottomLinks.map((link, index) => {
                  const isActive = pathname === `/${link.url}` || pathname === link.url;
                  return (
                    <React.Fragment key={link.url}>
                      <Link
                        href={link.url}
                        className={` capitalize transition-colors ${isActive ? "text-[#cd6632] " : "text-white/70"} hover:text-[#cd6632] `} >
                        {link.label}
                      </Link>
                      {index !== bottomLinks.length - 1 && (
                        <span className="text-white/30">|</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;