import Link from "next/link";
import { FiHome, FiShoppingCart, FiPhone, FiMapPin } from "react-icons/fi";
import { MdOutlinePalette } from "react-icons/md";

export const metadata = {
    title: "404 Page Not Found | Dream Home Styling",
    description: "The page you are looking for was not found. Explore Dream Home Styling’s home décor collections or visit our store in Bhopal.",
    keywords: ["contact dream home styling", "home decor store contact bhopal", " interior decor shop bhopal contact,", "wallpaper curtain store bhopa", " customized home decor bhopal", "interior designer bhopal", " home furnishing store madhya pradesh", " home furnishing store madhya pradesh", " interior decor store indore"],
    alternates: { canonical: "https://www.dreamhomestyling.com/not-found" },
    openGraph: {
        title: "404 Page Not Found | Dream Home Styling",
        description: "The page you are looking for was not found. Explore Dream Home Styling’s home décor collections or visit our store in Bhopal.",
        url: "https://www.dreamhomestyling.com/",
        images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "404 Page Not Found | Dream Home Styling",
        description: "The page you are looking for was not found. Explore Dream Home Styling’s home décor collections or visit our store in Bhopal.",
        images: [{ url: "https://res.cloudinary.com/djxgpbncu/image/upload/v1769672836/logo_xhl9o6.png" }],
    },
    robots: {
        index: false,
        follow: true,

    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-transparent">
            <div className="max-w-5xl w-full bg-[#1f3d2b] text-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                    <h1 className="font-dm text-7xl font-extrabold text-[#b45309]">{`404`}</h1>
                    <h2 className="font-dm responsiveheading2 font-semibold mt-2 text-[#e6f1ec]">{` Page Not Found`}</h2>
                    <p className="font-dm mt-4 text-[#d6e7df] leading-relaxed">{` Oops! The page you’re looking for doesn’t exist or may have been moved.`} <br /> {` But don’t worry — your perfect home décor is just a click away.`}</p>
                    <div className="mt-8 flex flex-wrap gap-3 font-dm">
                        {[
                            { href: "/", label: "Home", icon: <FiHome /> },
                            { href: "/shop", label: "Shop", icon: <FiShoppingCart /> },
                            { href: "/customize", label: "Customize", icon: <MdOutlinePalette /> },
                            { href: "/contact", label: "Contact", icon: <FiPhone /> },
                        ].map((btn) => (
                            <Link key={btn.label} href={btn.href}
                                className="font-dm flex items-center gap-2 px-5 py-2.5 rounded-full  bg-[#b45309] font-semibold text-sm hover:bg-[#9a4308] hover:-translate-y-0.5 hover:shadow-lg transition ">
                                {btn.icon}
                                {btn.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="bg-[#14281d] rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="font-dm text-lg font-semibold text-[#e6f1ec] mb-3">{`Need Help ?`} </h3>
                        <p className="font-dm flex items-center gap-2 text-sm text-[#d6e7df] hover:text-[#b45309] transition cursor-pointer mb-2">
                            <FiMapPin /> <span> {` Visit our store in `}<strong>{` Neelbad, Bhopal`}</strong> </span> </p>
                        <p className="font-dm flex items-center gap-2 text-sm text-[#d6e7df] hover:text-[#b45309] transition cursor-pointer">
                            <FiPhone /> <strong>{`075096 66466`}</strong>
                        </p>
                    </div>
                    <p className="font-dm text-center text-sm text-[#c8dbd2] mt-6">{` Let’s turn this wrong turn into the right design choice ✨`}</p>
                </div>
            </div>
        </div>
    );
}
