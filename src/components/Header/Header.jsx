"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";
import { useCart } from "@/Context/CartContext";
import HeaderMagaDropDown from "./HeaderMagaDropDown";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { items, fetchCartItems } = useCart();
  const pathname = usePathname();

  // Function to check if link is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname === path || pathname.startsWith(path + "/");
  };

  const navLinks = [
    { href: "/category", label: "Collections" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact" },
  ];

  const fetchProducts = async () => {
    try {
      await fetchCartItems();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (!items.length) {
      fetchProducts();
    }
  }, []);

  return (
    <>
      <header className="bg-[#101d22] sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md py-3">
        <div className="custom-container mx-auto px-6! h-20 py-2 flex items-center justify-between">
          <div className="flex items-center gap-12 h-full">
            <div className="flex items-center gap-3">
              <Link href="/">
                <div className="relative w-[120px] md:w-[150px] h-[150px] md:h-[130px] mb-2 sm:mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="DHS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8 h-full">
              <Link href="/category" className={`font-dm text-sm font-medium transition-colors relative ${isActive("/category")
                ? "text-[#cd6632]"
                : "text-white hover:text-[#cd6632]"
                }`}>
                {` Collections`}
                {isActive("/category") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#cd6632]"></span>
                )}
              </Link>

              <div className="mega-menu-trigger h-full flex items-center group">
                <button className={`font-dm text-sm font-medium cursor-pointer transition-colors flex items-center gap-1 h-full ${isActive("/shop")
                  ? "text-[#cd6632]"
                  : "text-white hover:text-[#cd6632]"
                  }`}>
                  {` Shop`}
                  <span className="font-dm material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
                <HeaderMagaDropDown />
              </div>
              <Link href="/about-us"
                className={`font-dm text-sm font-medium transition-colors whitespace-nowrap relative ${isActive("/about-us")
                  ? "text-[#cd6632]"
                  : "text-white hover:text-[#cd6632]"
                  }`}>
                {`About Us`}
                {isActive("/about-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#cd6632]"></span>
                )}
              </Link>
              <Link href="/contact-us" className={`font-dm text-sm font-medium transition-colors relative ${isActive("/contact-us")
                ? "text-[#cd6632]"
                : "text-white hover:text-[#cd6632]"
                }`} >
                {`Contact`}
                {isActive("/contact-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#cd6632]"></span>
                )}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative hidden lg:block">
              <SearchBar />
            </div>

            <button className="font-dm material-symbols-outlined text-white/70 hover:text-white">
              favorite
            </button>

            <Link href={"/add-to-cart"}>
              <button className="font-dm cursor-pointer material-symbols-outlined text-white/70 hover:text-white relative mb-2">
                <Badge badgeContent={items.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "var(--primaryColor)",
                      color: "white",
                    },
                  }}>
                  shopping_bag
                </Badge>
              </button>
            </Link>

            <Link href={"/login"}>
              <button className={`whitespace-nowrap font-dm px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer hidden md:block ${isActive("/login")
                ? "bg-white text-[#cd6632] border-2 border-[#cd6632]"
                : "bg-[#cd6632] hover:bg-[#ad6d4c]/90 text-white"
                }`}>
                {`Sign In`}
              </button>
            </Link>

            <button onClick={() => setOpenMenu(true)}
              className="md:hidden! material-symbols-outlined text-white text-3xl">
              {`menu`}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {openMenu && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[60]" onClick={() => setOpenMenu(false)} />
          <div className="fixed right-0 top-0 h-screen w-[80%] max-w-sm bg-black/90 p-6 flex flex-col z-[70]">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" onClick={() => setOpenMenu(false)}>
                <div className="relative w-[100px] h-[50px]">
                  <Image
                    src="/images/logo.png"
                    alt="DHS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <button onClick={() => setOpenMenu(false)} className="material-symbols-outlined text-white text-3xl cursor-pointer hover:text-gray-300" >
                close
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-4 text-white">
              {navLinks.map((link) => (
                <Link key={link.href} onClick={() => setOpenMenu(false)} href={link.href}
                  className={`py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${isActive(link.href)
                    ? "bg-[#cd6632] text-white font-bold  border-white"
                    : "hover:bg-white/10 hover:pl-6"
                    }`}>
                  {isActive(link.href) && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                  {link.label}
                </Link>
              ))}
              <Link onClick={() => setOpenMenu(false)} href="/login"
                className={`mt-6 text-center py-3 rounded-lg font-bold transition-all duration-300 ${isActive("/login")
                  ? "bg-white text-[#cd6632] border-2 border-[#cd6632]"
                  : "bg-[#cd6632] hover:bg-[#b55528]"
                  }`}>
                {` Sign In`}
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;