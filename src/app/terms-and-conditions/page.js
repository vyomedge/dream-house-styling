import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaMapPin } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { MdCall } from 'react-icons/md';
import { SiWebmoney } from "react-icons/si";
import PolicyBanner from '@/common-components/PolicyBanner/PolicyBanner';

export const metadata = {
    title: "Terms & Conditions | Dream Home Styling – Home Decor Store Bhopal",
    description: " Read Dream Home Styling’s terms and conditions for customized home décor, interior services, orders, payments, and delivery in Bhopal & MP.",
    keywords: ["terms and conditions", " dream home styling terms", " home decor store terms and conditions", "interior design website terms india", "customized home decor policy", " home decor store in bhopal", "interior decor shop bhopal", "interior decor shop bhopal", " interior store indore"],
    alternates: { canonical: "https://www.dreamhomestyling.com/terms-and-conditions" },
    openGraph: {
        title: "Terms & Conditions | Dream Home Styling – Home Decor Store Bhopal",
        description: " Read Dream Home Styling’s terms and conditions for customized home décor, interior services, orders, payments, and delivery in Bhopal & MP.",
        url: "https://www.dreamhomestyling.com/",
        images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Terms & Conditions | Dream Home Styling – Home Decor Store Bhopal",
        description: " Read Dream Home Styling’s terms and conditions for customized home décor, interior services, orders, payments, and delivery in Bhopal & MP.",
        images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
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
            <PolicyBanner title={"Terms & Conditions"} breadcom={[{ title: "Terms & Conditions" }]} />
            <div className="custom-container bg-white">
                <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2 mt-4 sm:mt-8  ">{`Welcome to `} <strong className='font-bold'>{` Dream Home Styling (DHS) `}</strong>{` . By accessing or using our website, services, or purchasing our products, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our website.`}</p>
                <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`If you do not agree with any part of these Terms, you should not use our website or services.`}</p>
                <h2 className="font-dm  responsiveheading2 text-[#1A2E33] font-medium mt-5 mb-2">{`1. About Dream Home Styling`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Dream Home Styling (DHS) is a home décor and interior solutions store based in Bhopal,`}</p>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Madhya Pradesh, offering customized wallpapers, curtains, blinds, upholstery, carpets, and interior design services through its physical store and e-commerce platform.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Eligibility to Use the Website`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7   ">
                    <li>{`You must be at least`} <strong className='font-bold'>{` 18 years of age `}</strong>{`  to use this website or place an order.`}</li>
                    <li>{`By using this website, you confirm that the information you provide is accurate and complete.`} </li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. Products & Services`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7   ">
                    <li>{`DHS offers`} <strong className='font-bold'>{`customized home décor products , `}</strong>{`   which are made according to customer-selected specifications such as size, color, material, and design.`}</li>
                    <li>{`Product images on the website are for`} <strong className='font-bold'>{`  illustration purposes only `}</strong>{`   Actual products may slightly vary due to screen resolution, lighting, or material availability. `}</li>
                    <li>{`Interior design consultations and 3D visualizations are provided as per agreed scope and timelines.`} </li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Custom Orders Policy`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`By using Dream Home Styling, you acknowledge that :`}</p>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7   ">
                    <li>{`Most DHS products are `} <strong className='font-bold'>{`  custom-made,  `}</strong>{` and therefore:`}
                        <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33]  mb-1  ">
                            <li>{`Orders once confirmed `} <strong className='font-bold'>{`cannot be cancelled or modified.`}</strong></li>
                            <li>{`Custom products are `} <strong className='font-bold'>{`non-returnable and non-refundable,`}</strong>{` unless damaged or defective.`} </li>
                        </ul>
                    </li>
                    <li>{`Customers are responsible for providing `} <strong className='font-bold'>{` accurate measurements and details. `}</strong>{` DHS is not liable for issues arising from incorrect information provided by the customer.`} </li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Pricing & Payments`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7   ">
                    <li>{`All prices listed on the website are in `} <strong className='font-bold'>{` Indian Rupees (INR).`}</strong></li>
                    <li>{`Prices may change without prior notice.`} </li>
                    <li>{`Payments are processed through`}<strong className='font-bold'>{` secure third-party payment gateways. `}</strong></li>
                    <li>{`DHS does not store or have access to customers’ payment details.`} </li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. Order Confirmation & Delivery`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7   ">
                    <li>{`Orders are confirmed only after successful payment.`}</li>
                    <li>{`Estimated delivery timelines are shared at the time of order confirmation.`}</li>
                    <li>{`Delivery timelines may vary depending on customization, material availability, and location.`} </li>
                    <li>{`DHS is not responsible for delays caused by logistics partners or unforeseen circumstances.`}</li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Returns, Refunds & Damages`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7   ">
                    <li>{`Returns or refunds are applicable`} <strong className='font-bold'>{` only in case of manufacturing defects or transit damage. `}</strong></li>
                    <li>{`Any damage or issue must be reported within `} <strong className='font-bold'>{`  48 hours of delivery `}</strong>{`   with clear photos/videos. `}</li>
                    <li>{`Approval of returns or refunds is subject to inspection by DHS.`} </li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Intellectual Property Rights`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33] mb-5 sm:mb-7   ">
                    <li>{`All content on this website, including text, images, logos, designs, and graphics, is the `} <strong className='font-bold'>{` intellectual property of Dream Home Styling. `}</strong></li>
                    <li>{`Unauthorized use, reproduction, or distribution of website content is strictly prohibited.`} </li>
                </ul><h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. User Conduct`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`You agree not to:`}</p>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33]  mb-3  ">
                    <li>{`Use the website for unlawful purposes`}</li>
                    <li>{`Upload or transmit malicious software or harmful content`} </li>
                    <li>{`Attempt unauthorized access to the website or its systems.`}</li>
                </ul>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Violation may result in termination of access and legal action.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`10. Third-Party Links`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium ">{`Our website may contain links to third-party websites.`}</p>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Dream Home Styling is not responsible for the content, privacy policies, or practices of any third-party websites.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`11. Limitation of Liability`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Dream Home Styling shall not be liable for:`}</p>
                <ul className="font-dm responsive-text list-disc px-6  font-medium text-[#1A2E33]  mb-3  ">
                    <li>{`Indirect, incidental, or consequential damages`}</li>
                    <li>{`Losses resulting from misuse of products`} </li>
                    <li>{`Delays or service interruptions beyond our control.`}</li>
                </ul>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{`Our liability, if any, shall not exceed the amount paid for the product or service.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`12. Privacy Policy`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7  ">{`Our website may contain links to third-party websites. `}<strong className='font-bold'>{` Privacy Policy, `}</strong>{` which explains how we collect and protect your personal data.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`13. Modifications to Terms`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium ">{`Dream Home Styling reserves the right to modify these Terms & Conditions at any time without prior notice.`}</p>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` Updated terms will be posted on this page with the revised date.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`14. Governing Law & Jurisdiction`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium ">{`These Terms & Conditions shall be governed by the laws of`}<strong className='font-bold'>{`  India. `}</strong></p>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-5 sm:mb-7  ">{` Any disputes shall be subject to the jurisdiction of courts in`}<strong className='font-bold'>{` Bhopal, Madhya Pradesh. `}</strong></p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`15. Contact Information`}</h2>
                <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`For any questions regarding these Terms & Conditions, please contact:`}</p>
                <p className="font-dm responsive-text text-[#1A2E33]  font-medium mb-4  "><strong className='font-bold'>{`Dream Home Styling (DHS)`}</strong></p>
                <p className="font-dm responsive-text text-[#1A2E33] font-medium mb-2 cursor-pointer  flex gap-1.5"><FaMapPin className='text-blue-500' />  <strong className='font-bold text-[#1A2E33]'>{`Address `}</strong>{`: Ground Floor, Maran Complex, Shop No. 9,Opposite HP Petrol Pump, Neelbad Square, Bhopal, Madhya Pradesh – 462044`}</p>
                <Link href="mailto:info@dreamhomestyling.com">
                    <p className="font-dm responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
                        <TfiEmail />
                        <strong className='font-bold text-[#1A2E33]'>{`Email : `}</strong>
                        {"info@dreamhomestyling.com"}
                    </p>
                </Link>
                <Link href="tel:+91  075096 66466">
                    <p className="font-dm responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
                        <MdCall />
                        <strong className='font-bold text-[#1A2E33]'>{"Phone : "}</strong>
                        {"+91  075096 66466"}
                    </p>
                </Link>
                <Link href="https://www.dreamhomestyling.com" className='text-blue-400' target="_blank"
                    rel="noopener noreferrer"
                    aria-label="website link">
                    <p className="font-dm responsive-text text-blue-500 font-medium mb-2 cursor-pointer items-center flex gap-1.5">
                        <SiWebmoney />
                        <strong className='font-bold text-[#1A2E33]'>{`Website : `}</strong>   {`https://www.dreamhomestyling.com`}  </p>
                </Link>

                <p className="font-dm responsive-text text-[#1A2E33] mt-12 mb-12">
                    <strong className="font-bold">{`Published Date : `}</strong> {` January 20, 2026`}{" "}
                    | <strong className="font-bold">{` Last Updated : `}</strong>{" "}
                    {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "} {`, Dream Home Styling`}
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
    )
}

export default Page;