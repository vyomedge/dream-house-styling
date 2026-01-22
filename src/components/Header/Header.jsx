"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { useCart } from "@/Context/CartContext";

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
    <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-12">
          <div class="flex items-center gap-3">
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
          <nav class="hidden md:flex items-center gap-8">
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Collections
            </a>
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Shop by Room
            </a>
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Textures
            </a>
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Bespoke
            </a>
          </nav>
        </div>
        <div class="flex items-center gap-6">
          <div class="relative hidden lg:block">
            <SearchBar />
          </div>
          <button class="material-symbols-outlined text-white/70 hover:text-white">
            favorite
          </button>
          <Link href={"/add-to-cart"}>
            <button class="cursor-pointer  material-symbols-outlined text-white/70 hover:text-white relative mb-2">
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
          <button class="bg-[#00D4C8] hover:bg-[#00D4C8]/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
