"use client";
import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import { textToSlug } from "@/utills/utills";
import { Check, Loader2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { BsCartCheck } from "react-icons/bs";
import ProductCard from "@/common-components/ProductCard/ProductCard";

const Products = ({ products }) => {
  const { addToCart } = useCart();
  const { checkUserLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="">
      <section className="py-8 md:py-10 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-dm responsiveheading2 font-semibold! tracking-tight mb-2 text-[#cd6632]">{` Featured Products`}</h2>
            <p className="font-dm text-muted-foreground text-black">
              {" "}
              {` Our best-selling designs curated for your home.`}
            </p>
          </div>

          {loading ? (
            <p className="text-(--primaryColor) text-center">Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, idx) => (
                  <span key={idx}>
                    <ProductCard productData={product} />
                  </span>
                ))}
              </div>

              {/* <div className="flex justify-center mt-10 text-[#cd6632]">
                <Link href={"/category/wallpaper/3"}>
                  <button className="cursor-pointer font-dm border border-foreground bg-transparent text-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-foreground hover:text-background inline-flex items-center gap-2">
                    {` Load More Products`}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </div> */}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
