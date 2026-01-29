import { FiPhone, FiMail, FiMapPin, } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaYoutube, } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import Link from "next/link";

const socialLinks = [
  { icon: LiaFacebookF, url: "https://facebook.com" },
  { icon: FaTwitter, url: "https://twitter.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaYoutube, url: "https://youtube.com" },
];

export default function Address() {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0   bg-cover bg-center blur-[3px] scale-105" aria-hidden="true" />
      <div className="absolute inset-0 bg-white/70" aria-hidden="true" />
      <div className="relative mx-w-[600px] mx-auto p-6">
        <h6 className="font-dm responsiveheading6 text-[#1f3d2b]">{`  Visit Our Store –`}{" "}
          <span className="font-dm font-bold">{`Bhopal`}</span>
        </h6>
        <div className="flex items-start gap-2 mt-4">
          <span className="bg-[#dff3ea] text-[#1f3d2b] p-1.5 rounded-full"> <FiMapPin /></span>
          <p className="font-dm responsive-text  text-[#1f3d2b]"> {`Dream Home Styling Ground Floor, Maran Complex, Shop No. 9, Opposite HP Petrol Pump, Neelbad Square, Bhopal, Madhya Pradesh – 462044`} </p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <span className="bg-[#dff3ea] text-[#1f3d2b] p-1.5 rounded-full"><FiPhone /></span>
          <p className="font-dm responsive-text  text-[#1f3d2b]">{` +91 075096 66466 `}</p>
        </div>
        <h6 className="font-dm responsiveheading6 text-[#1f3d2b] mt-8">{` Our Services Location –`}</h6>
        <div className="flex items-start gap-2 mt-4">
          <span className="bg-[#dff3ea] text-[#1f3d2b] p-1.5 rounded-full"> <FiMapPin /></span>
          <p className="font-dm responsive-text  text-[#1f3d2b]">{`We proudly serve customers across : `}{""} <strong className="font-bold">{`Madhya Pradesh`}</strong></p>
        </div>
        <ul className="font-dm responsive-text list-disc pl-12  text-[#1A2E33]  font-medium  mb-2 ">
          <li>{`Bhopal`}</li>
          <li>{`Indore`}</li>
        </ul>
        <p className="font-dm responsive-text  text-[#1f3d2b]">{`For site visits, measurements, and interior consultations, please contact us in advance.`}</p>
        <h6 className="font-dm responsiveheading6 text-[#1f3d2b] mt-8">{` Email –`}</h6>
        <div className="flex items-center gap-2 mt-4">
          <span className="bg-[#dff3ea] text-[#1f3d2b] p-1.5 rounded-full"><FiMail /></span>
          <Link href="mailto:info@dreamhomestyling.com" className=" font-dm responsive-text  text-[#1f3d2b] hover:underline">
            {` info@dreamhomestyling.com`}</Link>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1f3d2b] p-2 rounded-full text-white hover:opacity-90 transition">
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

      // bg-[url('/house.png')] 

