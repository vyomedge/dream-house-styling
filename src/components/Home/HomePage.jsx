import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Features from "./Features/Features";
import HomeGallery from "./HomeGallery/HomeGallery";
import VideoSection from "./VideoSection/VideoSection";
import Products from "./Products/Products";
import HowItWorks from "./HowItWorks/HowItWorks";
import LuxerySection from "./LuxerySection/LuxerySection";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <Features />
      <HomeGallery />
      <LuxerySection />
      <VideoSection />
      <Products />
      <HowItWorks />
    </>
  );
};

export default HomePage;
