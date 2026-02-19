"use client";

import CommonFaq from "@/common-components/CommonFaq/CommonFaq";
import { useState } from "react";

export default function ProductDetailDiscription({ product }) {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = [
    {
      key: "Description",
      content: product?.Product_Description ?? "No Discription Available",
    },
    {
      key: "Customization Info",
      content: product?.customizationInfo,
    },
    {
      key: "FAQs",
      content: product?.faqs,
    },
  ];

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
              className={`font-dm px-4 py-1.5 text-xs sm:text-sm rounded-full cursor-pointer transition
                        ${
                          activeTab === tab.key
                            ? "bg-white text-black shadow-sm"
                            : "text-gray-600 hover:text-black"
                        } `}
            >
              {tab.key}
            </button>
          ))}
        </div>
        <div className="font-dm  text-gray-700  space-y-4">
          {activeTab === "Description" && (
            <div dangerouslySetInnerHTML={{ __html: activeData.content }}></div>
          )}
        </div>

        {/* Content */}
        <div className="text-sm text-gray-700 leading-relaxed space-y-4 ">
          {/* Description & Customization */}
          {activeTab == "Customization Info" && (
            <ul style={{ paddingLeft: "3%" }}>
              {!activeData?.content?.length ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">
                    No Customization Info Available
                  </p>
                </div>
              ) : (
                activeData.content.map((info, i) => (
                  <li
                    key={i}
                    className="font-dm r mb-1"
                    style={{ listStyle: "disc" }}
                  >
                    {info.point}
                  </li>
                ))
              )}
              {}
            </ul>
          )}

          {/* FAQs */}
          {activeTab === "FAQs" &&
            (!activeData?.content?.length ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No FAQs available</p>
              </div>
            ) : (
              <CommonFaq
                title={false}
                faqData={activeData?.content || []}
                columns={1}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
