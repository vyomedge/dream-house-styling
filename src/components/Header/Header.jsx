"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Badge from "@mui/material/Badge";
import { useCart } from "@/Context/CartContext";
import { useAuth } from "@/Context/AuthContext";
import HeaderMagaDropDown from "./HeaderMagaDropDown";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SearchResultsCom from "./SearchResults";
import {
  debounce,
  groupProductsByCategoryArray,
  textToSlug,
} from "@/utills/utills";

const Header = ({ categories }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const { items, fetchCartItems } = useCart();
  const { session, logout } = useAuth();

  const pathname = usePathname();
  const router = useRouter();

  const [SearchResults, setSearchResults] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [resultsType, setResultType] = useState("suggested");

  const hideLayout = ["/login", "/register", "/signup"].includes(pathname);
  const validUser = Boolean(session?.user);

  const fetchCartProducts = async () => {
    try {
      await fetchCartItems();
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    if (hideLayout) return;

    fetchCartProducts();
  }, [hideLayout]);

  useEffect(() => {
    if (!openMenu) {
      setShopOpen(false);
    }
  }, [openMenu]);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(path + "/");
  };

  const logoutHandle = async () => {
    await logout();
    router.replace("/login");
  };

  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const fetchSearchData = async (value) => {
    try {
      setSearchLoading(true);

      const normalizedSearch = value.trim().toLowerCase();

      if (!normalizedSearch) {
        setVisibleProducts(suggestedProducts);
        setResultType("suggested");
        return;
      }

      const filteredProducts = suggestedProducts.filter((product) => {
        const name = String(product.Product_Name || "").toLowerCase();
        const description = String(
          product.Short_Description ||
            product.Product_Description ||
            product.description ||
            "",
        ).toLowerCase();

        const category = String(
          product.category_name || product.category?.name || "",
        ).toLowerCase();

        return (
          name.includes(normalizedSearch) ||
          description.includes(normalizedSearch) ||
          category.includes(normalizedSearch)
        );
      });

      setVisibleProducts(filteredProducts);
      setResultType("searched");
    } catch (error) {
      console.error("Search failed:", error);
      setVisibleProducts([]);
      setResultType("searched");
    } finally {
      setSearchLoading(false);
    }
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      fetchSearchData(value);
    }, 500),
    [suggestedProducts],
  );

  useEffect(() => {
    if (hideLayout) return;

    if (searchStr.trim().length) {
      debouncedSearch(searchStr.trim());
    } else {
      setVisibleProducts(suggestedProducts);
      setResultType("suggested");
    }
  }, [searchStr, debouncedSearch, hideLayout, suggestedProducts]);

  const fetchProducts = async () => {
    try {
      setSearchLoading(true);
      setSearchResults(true);

      const response = await fetch("/api/catalog/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      const productList = Array.isArray(data) ? data : [];

      setSuggestedProducts(productList);
      setVisibleProducts(productList);
      setSearchResults(false);
    } catch (error) {
      setSearchResults(false);
      console.error("Error fetching products:", error);
      setSuggestedProducts([]);
      setVisibleProducts([]);
    } finally {
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    if (hideLayout) return;

    fetchProducts();
  }, [hideLayout]);

  const structuredProducts = groupProductsByCategoryArray(visibleProducts);

  if (hideLayout) return <></>;

  return (
    <>
      <header className="bg-[#101d22] sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
        <div className="custom-container mx-auto px-6! h-20 py-2 flex items-center justify-between">
          <div className="flex items-center gap-12 h-full">
            <div className="flex items-center gap-3">
              <Link href="/" onClick={handleLogoClick}>
                <div className="relative w-[90px] sm:w-[120px] md:w-[100px] h-[50px] sm:h-[150px] md:h-[130px] mb-2 sm:mb-4">
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
              <Link
                href="/categories"
                className={`font-dm text-sm font-medium transition-colors relative ${
                  isActive("/categories")
                    ? "text-[#cd6632]"
                    : "text-white hover:text-[#cd6632]"
                }`}
              >
                Collections

                {isActive("/categories") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#cd6632]" />
                )}
              </Link>

              <div className="mega-menu-trigger h-full flex items-center group">
                <button
                  className={`font-dm text-sm font-medium cursor-pointer transition-colors flex items-center gap-1 h-full ${
                    isActive("/shop")
                      ? "text-[#cd6632]"
                      : "text-white hover:text-[#cd6632]"
                  }`}
                >
                  Shops

                  <span className="font-dm material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>

                <HeaderMagaDropDown />
              </div>

              <Link
                href="/about-us"
                className={`font-dm text-sm font-medium transition-colors whitespace-nowrap relative ${
                  isActive("/about-us")
                    ? "text-[#cd6632]"
                    : "text-white hover:text-[#cd6632]"
                }`}
              >
                About Us

                {isActive("/about-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#cd6632]" />
                )}
              </Link>

              <Link
                href="/contact-us"
                className={`font-dm text-sm font-medium transition-colors relative ${
                  isActive("/contact-us")
                    ? "text-[#cd6632]"
                    : "text-white hover:text-[#cd6632]"
                }`}
              >
                Contact

                {isActive("/contact-us") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#cd6632]" />
                )}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative search-trigger">
              <SearchBar
                onSearch={(e) => setSearchStr(e.target.value)}
                value={searchStr}
              />
            </div>

            <SearchResultsCom
              results={structuredProducts}
              resultsType={resultsType}
              loading={searchLoading}
            />

            <Link href="/add-to-cart">
              <button className="font-dm cursor-pointer material-symbols-outlined text-white/70 hover:text-white relative mb-2">
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

            {validUser ? (
              <button
                onClick={logoutHandle}
                className={`whitespace-nowrap font-dm px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer hidden md:block ${
                  isActive("/login")
                    ? "bg-white text-[#cd6632] border-2 border-[#cd6632]"
                    : "bg-[#cd6632] hover:bg-[#ad6d4c]/90 text-white"
                }`}
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button
                  className={`whitespace-nowrap font-dm px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer hidden md:block ${
                    isActive("/login")
                      ? "bg-white text-[#cd6632] border-2 border-[#cd6632]"
                      : "bg-[#cd6632] hover:bg-[#ad6d4c]/90 text-white"
                  }`}
                >
                  Sign In
                </button>
              </Link>
            )}

            <button
              onClick={() => setOpenMenu(true)}
              className="md:hidden! material-symbols-outlined text-white text-3xl"
            >
              menu
            </button>
          </div>
        </div>
      </header>

      {openMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setOpenMenu(false)}
          />

          <div className="fixed right-0 top-0 h-screen w-[80%] max-w-sm bg-black/90 p-6 flex flex-col z-[70]">
            <div className="flex justify-between items-center mb-6">
              <Link href="/" onClick={() => setOpenMenu(false)}>
                <div className="relative w-[80px] h-[40px]">
                  <Image
                    src="/images/logo.png"
                    alt="DHS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              <button
                onClick={() => setOpenMenu(false)}
                className="material-symbols-outlined text-white text-3xl cursor-pointer hover:text-gray-300"
              >
                close
              </button>
            </div>

            <nav className="flex flex-col gap-2 text-white">
              <Link
                onClick={() => setOpenMenu(false)}
                href="/categories"
                className={`py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  isActive("/categories")
                    ? "bg-[#cd6632] text-white font-bold border-white"
                    : "hover:bg-white/10 hover:pl-6"
                }`}
              >
                {isActive("/categories") && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
                Collections
              </Link>

              <div className="flex flex-col">
                <button
                  onClick={() => setShopOpen(!shopOpen)}
                  className={`py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    isActive("/shop")
                      ? "bg-[#cd6632] text-white font-bold"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isActive("/shop") && (
                      <span className="w-2 h-2 bg-white rounded-full" />
                    )}
                    Shop
                  </span>

                  <span
                    className={`material-symbols-outlined text-sm transition-transform duration-300 ${
                      shopOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {shopOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-1 border-l-2 border-[#cd6632]/50 pl-4">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        onClick={() => setOpenMenu(false)}
                        href={`/category/${textToSlug(cat.name)}/${cat.id}`}
                        className={`py-2 px-3 rounded-lg transition-all duration-300 text-sm ${
                          isActive(
                            `/category/${textToSlug(cat.name)}/${cat.id}`,
                          )
                            ? "bg-[#cd6632]/80 text-white font-semibold"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {cat.name
                          ?.trimStart()
                          .replace(/^\w/, (c) => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                onClick={() => setOpenMenu(false)}
                href="/about-us"
                className={`py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  isActive("/about-us")
                    ? "bg-[#cd6632] text-white font-bold border-white"
                    : "hover:bg-white/10 hover:pl-6"
                }`}
              >
                {isActive("/about-us") && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
                About Us
              </Link>

              <Link
                onClick={() => setOpenMenu(false)}
                href="/contact-us"
                className={`py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  isActive("/contact-us")
                    ? "bg-[#cd6632] text-white font-bold border-white"
                    : "hover:bg-white/10 hover:pl-6"
                }`}
              >
                {isActive("/contact-us") && (
                  <span className="w-2 h-2 bg-white rounded-full" />
                )}
                Contact
              </Link>

              {validUser ? (
                <button
                  onClick={async () => {
                    setOpenMenu(false);
                    await logoutHandle();
                  }}
                  className="mt-6 text-center py-3 rounded-lg font-bold transition-all duration-300 bg-[#cd6632] hover:bg-[#b55528]"
                >
                  Logout
                </button>
              ) : (
                <Link
                  onClick={() => setOpenMenu(false)}
                  href="/login"
                  className={`mt-6 text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                    isActive("/login")
                      ? "bg-white text-[#cd6632] border-2 border-[#cd6632]"
                      : "bg-[#cd6632] hover:bg-[#b55528]"
                  }`}
                >
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
