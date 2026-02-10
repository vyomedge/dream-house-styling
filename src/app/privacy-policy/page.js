import React from "react";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import Link from "next/link";
import { FaMapPin } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import PolicyBanner from "@/common-components/PolicyBanner/PolicyBanner";

export const metadata = {
  title: " Privacy Policy | Dream Home Styling – Home Decor Store Bhopal",
  description:
    "Read Dream Home Styling’s privacy policy to understand how we protect customer data for customized home décor and interior services in Bhopal & MP.",
  keywords: [
    "privacy policy",
    " dream home styling privacy policy",
    "home decor store privacy policy",
    "interior design website privacy policy",
    "e commerce privacy policy india",
    "home decor store in bhopal",
    "interior decor shop bhopal",
    " wallpaper curtain store bhopal",
    " home furnishing store madhya pradesh",
    " interior decor store indore",
  ],
  alternates: { canonical: "https://www.dreamhomestyling.com/privacy-policy" },
  openGraph: {
    title: " Privacy Policy | Dream Home Styling – Home Decor Store Bhopal",
    description:
      "Read Dream Home Styling’s privacy policy to understand how we protect customer data for customized home décor and interior services in Bhopal & MP.",
    url: "https://www.dreamhomestyling.com/",
    images: [
      {
        url: "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: " Privacy Policy | Dream Home Styling – Home Decor Store Bhopal",
    description:
      "Read Dream Home Styling’s privacy policy to understand how we protect customer data for customized home décor and interior services in Bhopal & MP.",
    images: [
      {
        url: "https://res.cloudinary.com/dyc17zibo/image/upload/v1770710138/logo_yorkun.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};
const Page = () => {
  return (
    <>
      <PolicyBanner
        title={"Privacy Policy - Dream Home Styling"}
        breadcom={[{ title: "Privacy Policy" }]}
      />

      <div className="custom-container bg-white">
        <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2 mt-4 sm:mt-8  ">{`At Dream Home Styling (DHS), we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or make a purchase from us.`}</p>
        <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`By accessing or using our website, you agree to the terms of this Privacy Policy.`}</p>

        <h2 className="font-dm  responsiveheading2 text-[#1A2E33] font-medium mt-10 mb-2">{`1. Information We Collect`}</h2>
        <p className="font-dm responsive-text text-[#1A2E33] font-bold!  mb-2  ">{`a. Personal Information`}</p>
        <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`When you interact with our website, place an order, or contact us, we may collect:`}</p>
        <ul className="font-dm responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-1 ">
          <li>{`Full Name`}</li>
          <li>{`Phone Number`}</li>
          <li>{`Email Address`}</li>
          <li>{`Billing and Shipping Address`}</li>
          <li>{`Payment details (processed securely via third-party gateways)`}</li>
        </ul>
        <p className="font-dm responsive-text text-[#1A2E33] font-bold!  mb-2  ">{`b. Customization Information`}</p>
        <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`For customized products, we may collect:`}</p>
        <ul className="font-dm responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-1 ">
          <li>{`Room measurements`}</li>
          <li>{`Design preferences`}</li>
          <li>{`Uploaded images (room photos, reference designs)`}</li>
        </ul>
        <p className="font-dm responsive-text text-[#1A2E33] font-bold!  mb-2  ">{`c. Technical Information`}</p>
        <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`Automatically collected data includes:`}</p>
        <ul className="font-dm responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-1 ">
          <li>{`IP address`}</li>
          <li>{`Browser type`}</li>
          <li>{`Device information`}</li>
          <li>{`Pages visited and time spent`}</li>
          <li>{`Cookies and similar tracking technologies`}</li>
        </ul>
        <h2 className="font-dm  responsiveheading2 text-[#1A2E33] font-medium  mb-2">{`2. How We Use Your Information`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-2   ">{`We use your information to:`}</p>
        <ul className="font-dm responsive-text list-disc px-6 font-medium text-[#1A2E33] mb-5 sm:mb-7 ">
          <li>{`Process and fulfill orders`}</li>
          <li>{`Provide customized home décor solutions`}</li>
          <li>{`Communicate order updates and service-related information`}</li>
          <li>{`Respond to inquiries and consultation requests`}</li>
          <li>{`Improve website performance and user experience`}</li>
          <li>{`Send promotional offers (only if you opt in)`}</li>
          <li>{`Comply with legal and regulatory obligations`}</li>
        </ul>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. Sharing of Information`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-2  ">
          {`We do `}
          <strong className="font-bold">{`  not sell, rent, or trade `}</strong>
          {` your personal information.`}
        </p>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-2  ">{`Your information may be shared only with:`}</p>
        <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
          <li>
            <strong className="font-bold">{`Payment gateways `}</strong>{" "}
            {` (for secure transactions)`}
          </li>
          <li>
            <strong className="font-bold">{`Delivery and logistics partners `}</strong>
            {` (to fulfill orders)`}
          </li>
          <li>
            <strong className="font-bold">{`Service providers `}</strong>
            {` assisting in website operations`}
          </li>
          <li>
            <strong className="font-bold">{`Legal authorities,  `}</strong>
            {`  if required by law`}
          </li>
        </ul>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7  ">{`All third-party partners are required to maintain the confidentiality of your data.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Payment Security`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`All online payments are processed through secure and trusted third-party payment gateways.`}</p>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-7 ">{`Dream Home Styling does not store or have access to your card, UPI, or banking details.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Cookies Policy `}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`Our website uses cookies to:`}</p>
        <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
          <li>{`Improve site functionality`}</li>
          <li>{`Analyze website traffic`}</li>
          <li>{`Remember user preferences`}</li>
        </ul>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`You may choose to disable cookies through your browser settings; however, some features of the website may not function properly.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Data Retention`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`We retain your personal information only for as long as:`}</p>
        <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
          <li>{`Necessary to fulfill orders and services`}</li>
          <li>{`Required for legal, accounting, or regulatory purposes`}</li>
        </ul>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`Uploaded images and customization details are used strictly for order execution and consultation.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Data Protection & Security `}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`We implement appropriate technical and organizational measures to protect your personal data against:`}</p>
        <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
          <li>{`Unauthorized access`}</li>
          <li>{`Loss or misuse`}</li>
          <li>{`Alteration or disclosure`}</li>
        </ul>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`However, no online data transmission is 100% secure, and we cannot guarantee absolute security.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Your Rights`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`You have the right to:`}</p>
        <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
          <li>{`Access your personal data`}</li>
          <li>{`Request correction of inaccurate information`}</li>
          <li>{`Request deletion of your data (subject to legal obligations)`}</li>
          <li>{`Withdraw consent for marketing communications`}</li>
        </ul>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`To exercise these rights, please contact us using the details below.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Third-Party Links`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`Our website may contain links to third-party websites.`}</p>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{` We are not responsible for the privacy practices or content of those external sites.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`10. Children’s Privacy`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`Our website and services are not intended for children under the age of 18.`}</p>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{` We do not knowingly collect personal information from minors.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`11. Changes to This Privacy Policy`}</h2>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`Dream Home Styling reserves the right to update or modify this Privacy Policy at any time.`}</p>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{` Any changes will be posted on this page with the updated date.`}</p>
        <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`We encourage you to review this page periodically.`}</p>
        <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`12. Contact Us`}</h2>
        <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`If you have any questions or concerns about this Privacy Policy or your data, please contact us:`}</p>
        <p className="font-dm responsive-text text-[#1A2E33]  font-medium mb-4  ">
          <strong className="font-bold">{`Dream Home Styling (DHS)`}</strong>
        </p>
        <p className="font-dm responsive-text text-[#1A2E33] font-medium mb-2 cursor-pointer  flex gap-1.5">
          <FaMapPin className="text-blue-500" />{" "}
          <strong className="font-bold text-[#1A2E33]">{`Address `}</strong>
          {`: Ground Floor, Maran Complex, Shop No. 9,Opposite HP Petrol Pump, Neelbad Square, Bhopal, Madhya Pradesh – 462044`}
        </p>
        <Link href="mailto:info@dreamhomestyling.com">
          <p className="font-dm responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
            <TfiEmail />
            <strong className="font-bold text-[#1A2E33]">{`Email : `}</strong>
            {"info@dreamhomestyling.com"}
          </p>
        </Link>
        <Link href="tel:+91  075096 66466">
          <p className="font-dm responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
            <MdCall />
            <strong className="font-bold text-[#1A2E33]">{"Phone : "}</strong>
            {"+91  075096 66466"}
          </p>
        </Link>
        <Link
          href="https://www.dreamhomestyling.com"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="website link"
        >
          <p className="font-dm responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
            <SiWebmoney />
            <strong className="font-bold text-[#1A2E33]">{`Website : `}</strong>{" "}
            {`https://www.dreamhomestyling.com`}{" "}
          </p>
        </Link>

        <p className="font-dm responsive-text text-[#1A2E33] mt-12 mb-12">
          <strong className="font-bold">{`Published Date : `}</strong>{" "}
          {` January 20, 2026`} |{" "}
          <strong className="font-bold">{` Last Updated : `}</strong>{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          {`, Dream Home Styling`}
        </p>
        {/* <div className="justify-items-center sm:justify-items-end   sm:w-full mt-5 mb-14">
                    <p className="text-[20px]  pr-12 mb-2 text-[#4D5D60]">{`Powered by-`}</p>
                    <div  >
                        <Link href="/" >
                            <Image
                                src="/Dream Home Stylinglogo.png"
                                alt="logo"
                                width={155}
                                height={180}
                            />
                        </Link>
                    </div>
                </div> */}
      </div>
    </>
  );
};

export default Page;
