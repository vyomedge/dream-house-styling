"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useCart } from "@/Context/CartContext";
import HeaderMagaDropDown from "./HeaderMagaDropDown";

const Header = () => {
  const { items, fetchCartItems } = useCart();
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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12 h-full">
          <div className="flex items-center gap-3">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Inhyma Logo"
                height={40}
                width={140}
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  height: "40px",
                }}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 h-full">
            <a
              className="text-sm font-medium hover:text-(--primaryColor) transition-colors"
              href="#"
            >
              Collections
            </a>

            <div class="mega-menu-trigger h-full flex items-center group">
              <button class="text-sm font-medium hover:text-(--primaryColor) cursor-pointer transition-colors flex items-center gap-1 h-full">
                Shop
                <span class="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
              <HeaderMagaDropDown />
            </div>

            <Link
              className="text-sm font-medium hover:text-(--primaryColor) transition-colors"
              href="about-us"
            >
              About Us
            </Link>
            <a
              className="text-sm font-medium hover:text-(--primaryColor) transition-colors"
              href="contact-us"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <SearchBar />
          </div>
          <button className="material-symbols-outlined text-white/70 hover:text-white">
            favorite
          </button>
          <Link href={"/add-to-cart"}>
            <button className="cursor-pointer  material-symbols-outlined text-white/70 hover:text-white relative mb-2">
              <Badge
                badgeContent={items.length}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "var(--primaryColor)",
                    color: "white",
                  },
                }}
              >
                shopping_bag
              </Badge>
            </button>
          </Link>
          <button className="bg-[#00D4C8] hover:bg-[#00D4C8]/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
            <Link href={"/login"}>Sign In</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
