"use client";

import CommonFaq from "@/common-components/CommonFaq/CommonFaq";
import { useState } from "react";

const tabs = [
    {
        key: "Description",
        content: [
            "Premium floral design wallpaper perfect for living rooms and bedrooms",
            "This premium wallpapers product is carefully curated to bring elegance and functionality to your space. Made with the finest materials and attention to detail, it's designed to last for years while maintaining its beauty.",
        ],
    },
    {
        key: "Customization Info",
        content: [
            {
                question: "Custom Measurements",
                answer:
                    "We offer free on-site measurement services across Bhopal and Madhya Pradesh",
            },
            {
                question: "Color & Pattern Options",
                answer:
                    "Choose from a wide range of colors and patterns. we can also source specific designs upon request.",
            },
            {
                question: "Installation",
                answer:
                    "Professional installation included with all custom orders. Our team ensures perfect fitting and finish.",
            },
        ],
    },
    {
        key: "FAQs",
        content: [
            {
                q: "1. How long does customization take?",
                a: "Typically 7–14 days depending on the product and customization requirements.",
            },
            {
                q: "2. Do you provide installation?",
                a: "Yes, professional installation is included with all custom orders in Bhopal and MP.",
            },
            {
                q: "3. What is your return policy?",
                a: "Custom products are final sale. However, we ensure complete satisfaction through our consultation and approval process.",
            },
        ],
    },
];

export default function ProductDetailDiscription() {
    const [activeTab, setActiveTab] = useState("Description");

    const activeData = tabs.find((tab) => tab.key === activeTab);

    return (
        <section className="custom-container mx-auto px-4 sm:px-6 mt-16 mb-20">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8">
                {/* Tabs */}
                <div className="flex gap-2  bg-[#cd6632] w-fit m-auto  mb-6 sm:m-0 sm:mb-6 rounded-full p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`font-dm px-4 py-1.5 text-xs sm:text-sm rounded-full transition
                            ${activeTab === tab.key
                                    ? "bg-white text-black shadow-sm"
                                    : "text-gray-600 hover:text-black"
                                } `}>
                            {tab.key}
                        </button>
                    ))}
                </div>
                <div className="font-dm responsive-text text-gray-700 leading-relaxed space-y-4">
                    {activeTab === "Description" &&
                        activeData?.content.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                </div>

                {/* Content */}
                <div className="text-sm text-gray-700 leading-relaxed space-y-4 ">
                    {/* Description & Customization */}
                    {activeTab == "Customization Info" &&
                        activeData.content.map((faq, i) => (
                            <div key={i}>
                                <p className="font-dm responsive-text font-semibold! text-black mb-1">{faq.question}</p>
                                <p className="font-dm responsive-text text-gray-700 mb-1">{faq.answer}</p>
                            </div>
                        ))}

                    {/* FAQs */}
                    {activeTab === "FAQs" && (
                        <CommonFaq
                            title={false}
                            faqData={activeData?.content || []}
                            columns={1}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}