"use client";

import Image from "next/image";

export default function DistributorSupportCards() {
  return (
    <div className="custom-container  mx-auto mt-10 px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-cyan-400 bg-[#F1F7FF]">
          <div className="flex justify-between items-center gap-[6vmin] px-5 py-3 md:px-10 md:py-8">
            <div>
              <h3 className="font-dm responsiveheading5 text-[#1f3d2b] font-bold ">{` Book a Free Design Consultation`}</h3>
              <p className="font-dm text-[#1f3d2b] text-[16px] mb-1 mt-2"> {`Interested in customizing your home or office interiors?`} </p>
              <p className="font-dm text-[#1f3d2b] text-[16px] mb-3">{`Our expert team will help you choose the right:`}</p>
              <ul className="font-dm responsive-text list-disc pl-12  text-[#1A2E33]  font-medium  mb-2 ">
                <li>{`Wallpapers`}</li>
                <li>{`Curtains & Blinds`}</li>
                <li>{`Upholstery & Carpets`}</li>
                <li>{`Complete interior solutions`}</li>
              </ul>
              <button className="font-dm bg-[#cd6632] hover:bg-[#cd6632]/80 text-white responsive-text px-4 py-1.5 w-full mt-3">
                {`Schedule a free consultation today`}
              </button>
            </div>

            <div className="relative w-[15vmin] h-[15vmin] md:w-[10vmin] md:h-[10vmin]">
              <Image
                src="/hands.png"
                alt="Become Distributor"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-cyan-400 bg-[#F1F7FF]">
          <div className="flex justify-between items-center gap-[6vmin] px-5 py-3 md:px-10 md:py-8">
            <div>
              <h3 className="font-dm text-[#1f3d2b] font-bold responsiveheading5 ">{` Need After-Sales Support?`}</h3>
              <p className="font-dm text-[#1f3d2b] text-[16px] mb-1 mt-2"> {`Already purchased from us?`} </p>
              <p className="font-dm text-[#1f3d2b] text-[16px] mb-3">{`Get assistance with:`}</p>
              <ul className="font-dm responsive-text list-disc pl-12  text-[#1A2E33]  font-medium  mb-2 ">
                <li>{`Installation guidance`}</li>
                <li>{`Product care & maintenance`}</li>
                <li>{`Custom order support`}</li>
              </ul>
              <p className="font-dm text-[#1f3d2b] text-[16px] mb-3">{`Call us or send a message — we’re happy to help.`}</p>
              <button className="font-dm bg-[#cd6632] hover:bg-[#cd6632]/80 text-white responsive-text px-4 py-1.5 w-[140]">{`Apply Now`}</button>
            </div>

            <div className="relative w-[15vmin] h-[15vmin] md:w-[10vmin] md:h-[10vmin]">
              <Image
                src="/headphones.png"
                alt="After Sales Support"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
