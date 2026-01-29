import React from 'react'
import Image from 'next/image';
import { TfiEmail } from "react-icons/tfi";
import { MdCall } from "react-icons/md";
import { FaMapPin } from "react-icons/fa6";
import Link from 'next/link';
import { SiWebmoney } from "react-icons/si";
import PolicyBanner from '@/common-components/PolicyBanner/PolicyBanner';

export const metadata = {
    title: "   Disclaimer | Dream Home Styling – Home Decor Store Bhopal",
    description: "Read the disclaimer of Dream Home Styling to understand product representation, customization, pricing, and liability terms for home décor services in Bhopal & MP.",
    keywords: ["disclaimer", " dream home styling disclaimer", " home decor website disclaimer", " interior design disclaimer india", "customized home decor disclaimer", "home decor store in bhopal", "interior decor shop bhopal", " home furnishing store madhya pradesh", " interior store indore"],
    alternates: { canonical: "https://www.dreamhomestyling.com/disclaimer-policy" },
    openGraph: {
        title: "  Disclaimer | Dream Home Styling – Home Decor Store Bhopal",
        description: "Read the disclaimer of Dream Home Styling to understand product representation, customization, pricing, and liability terms for home décor services in Bhopal & MP.",
        url: "https://www.dreamhomestyling.com/",
        images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "  Disclaimer | Dream Home Styling – Home Decor Store Bhopal",
        description: "Read the disclaimer of Dream Home Styling to understand product representation, customization, pricing, and liability terms for home décor services in Bhopal & MP.",
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
            <PolicyBanner title={"Disclaimer"} breadcom={[{ title: "Disclaimer" }]} />
            <div className="custom-container bg-white mt-2">
                <p className="font-dm responsive-text text-[#1A2E33] mt-4 mb-7">
                    <strong className="font-bold">{`Published Date : `}</strong> {` January 20, 2025`}{" "}
                    | <strong className="font-bold">{` Last Updated : `}</strong>{" "}
                    {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}{" "}
                </p>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium  mb-1   ">{`Welcome to `}<strong className="font-bold">{`Dream Home Styling!`}</strong> </p>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`The information provided on the Dream Home Styling (DHS) website is for general informational and business purposes only. By accessing and using this website, you acknowledge and agree to the terms outlined in this Disclaimer.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`1. General Information Disclaimer`}</h2>
                <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-4 ">{`All content on this website, including text, images, product descriptions, designs, pricing, and service information, is provided in good faith. However, Dream Home Styling makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or availability of any information on the website.`}</p>
                <p className="font-dm responsive-text   text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`Any reliance you place on such information is strictly at your own risk.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`2. Product Representation Disclaimer`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`Product images, colors, textures, and designs shown on the website are for `}<strong className="font-bold">{` illustration purposes only.`}</strong></li>
                    <li>{`Actual products may vary slightly due to:`}
                        <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium  ">
                            <li>{`Screen resolution and display settings`}</li>
                            <li>{`Lighting conditions`}</li>
                            <li>{`Material availability and manufacturing processes`}</li>
                        </ul>
                    </li>
                    <li>{`Customized products are created based on customer-provided specifications, and minor variations are natural and acceptable.`}</li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`3. Customization & Measurement Disclaimer`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`Dream Home Styling is not responsible for errors arising from `}<strong className="font-bold">{` incorrect measurements, design preferences, or specifications`}</strong>{`provided by the customer.`}</li>
                    <li>{`Customers are advised to double-check all details before confirming customized orders.`}</li>
                    <li>{`Once confirmed, customized orders cannot be altered or cancelled.`}</li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`4. Interior Design & 3D Visualization Disclaimer`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`3D designs, renders, and visualizations are  `}<strong className="font-bold">{`  conceptual representations  `}</strong>{` intended to help customers visualize the final outcome.`}</li>
                    <li>{`Actual execution may vary due to site conditions, material availability, or structural limitations.`}</li>
                    <li>{`DHS does not guarantee that the final result will be an exact replica of the 3D design.`}</li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`5. Pricing & Availability Disclaimer`}</h2>
                <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">
                    <li>{`Prices displayed on the website are subject to change without prior notice. `}</li>
                    <li>{`Product availability may vary due to stock levels or supplier constraints. `}</li>
                    <li>{`Dream Home Styling reserves the right to modify or discontinue any product or service at any time. `}</li>
                </ul>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`6. External Links Disclaimer`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`The website may contain links to third-party websites for additional information or convenience. `}</p>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{` Dream Home Styling does not control or endorse the content, policies, or practices of any third-party websites and is not responsible for any loss or damage arising from their use.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`7. Professional Advice Disclaimer`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`Any advice, recommendations, or suggestions provided on the website, through consultations, or via communication channels are for `}<strong className='font-bold'>{`general guidance only`}</strong> {` general guidance only and should not be considered professional or technical advice specific to your property without proper site evaluation.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`8. Limitation of Liability`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-1 ">{`To the maximum extent permitted by law, Dream Home Styling shall not be liable for any:`}</p>
                <ul className="font-dm responsive-text list-disc px-6  text-[#1A2E33]  font-medium  mb-5 sm:mb-7 ">
                    <li>{`Direct or indirect losses`}</li>
                    <li>{`Damages or inconvenience`}</li>
                    <li>{`Business interruptions`}</li>
                    <li>{`Loss of data or profits`}</li>
                </ul>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`arising from the use of this website, products, or services.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`9. Errors & Omissions Disclaimer`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`While we strive to keep the website information up to date, Dream Home Styling does not guarantee that the website will always be free from errors, omissions, or technical issues.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`10. Consent`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`By using our website, you hereby consent to this Disclaimer and agree to its terms.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`11. Updates to This Disclaimer`}</h2>
                <p className="font-dm  responsive-text text-[#1A2E33]  font-medium mb-5 sm:mb-7 ">{`Dream Home Styling reserves the right to update or change this Disclaimer at any time without prior notice. Any updates will be reflected on this page with the revised date.`}</p>
                <h2 className="font-dm responsiveheading2 text-[#1A2E33] font-medium mb-2  ">{`12. Contact Us`}</h2>
                <p className="font-dm responsive-text text-[#1A2E33]  font-medium  mb-2  ">{`If you have any questions regarding this Disclaimer, please contact us:`}</p>
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
                    <p className="font-dm responsive-text text-blue-500 font-medium cursor-pointer items-center flex gap-1.5 mb-5 sm:mb-8 md:mb-12">
                        <SiWebmoney />
                        <strong className='font-bold text-[#1A2E33]'>{`Website : `}</strong>   {`https://www.dreamhomestyling.com`}  </p>
                </Link>


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