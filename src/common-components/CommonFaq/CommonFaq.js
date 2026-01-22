"use client";

import { useState } from "react";

export default function CommonFaq({
  title = "Frequently Asked Questions",
  faqData = [],
  columns = 2, // control grid columns
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="custom-container mx-auto my-10 px-4 py-5">
      {title && (
        <h2 className="responsiveheading2 font-semibold text-white mb-6 md:mb-10 text-center">{title}</h2>
      )}

      <div className={`grid grid-cols-1 ${columns === 2 ? "md:grid-cols-2 md:gap-x-20" : ""} gap-y-6`} >
        {faqData.map((faq, index) => (
          <div key={index} className="w-full">
            <button onClick={() => toggle(index)} className="w-full text-left border-b border-gray-300 pb-3 flex justify-between items-center" >
              <span className="font-semibold! text-white responsive-text"> {faq.q} </span>
              <span className="text-white text-xl"> {openIndex === index ? "−" : "+"} </span>
            </button>
            {openIndex === index && (
              <p className="text-gray-300 mt-3 responsive-text leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
