"use client";
import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Features from "./Features/Features";
import HomeGallery from "./HomeGallery/HomeGallery";
import VideoSection from "./VideoSection/VideoSection";
import Products from "./Products/Products";
import HowItWorks from "./HowItWorks/HowItWorks";
import LuxerySection from "./LuxerySection/LuxerySection";
import CommonFaq from "@/common-components/CommonFaq/CommonFaq";

const faqs = [
  {
    q: "1. Do you offer customized home décor products?",
    a: " Yes, all our wallpapers, curtains, blinds, upholstery, and carpets are fully customized.",
  },
  {
    q: "2. Do you provide home measurement services?",
    a: " Yes, we offer site visits and measurements in Bhopal and nearby areas.",
  },
  {
    q: "3. Can I see samples before placing an order?",
    a: " Absolutely. You can order samples to check color, texture, and quality.",
  },
  {
    q: "4. Do you offer interior design services?",
    a: " Yes, we provide interior consultation, 3D designs, and complete interior solutions.",
  },
  {
    q: "5. Do you handle installation as well?",
    a: " Yes, installation support is available for selected products.",
  },
  {
    q: "6. Can I visit your store without an appointment?",
    a: " Yes, you’re welcome to visit our Neelbad, Bhopal store during working hours.",
  },
];
const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <Features />
      <HomeGallery />
      <LuxerySection />
      <VideoSection />
      <Products />
      {/* <HowItWorks /> */}
      <CommonFaq
        title="Frequently Asked Questions"
        faqData={faqs}
        columns={2}
      />
    </>
  );
};

export default HomePage;
