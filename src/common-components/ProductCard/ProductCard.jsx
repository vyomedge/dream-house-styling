"use client";
import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import { textToSlug } from "@/utills/utills";
import { Check, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { toast } from "react-toastify";

const ProductCard = ({ productData }) => {
  const { addToCart, items, removeFromCart } = useCart();
  const { checkUserLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [cartId, setCartId] = useState(null);

  const [inCart, setInCart] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleAddToCart = async () => {
    try {
      if (checkUserLoggedIn()) {
        setLoading(true);
        await addToCart(productData);
        setInCart(true);
        setShowCheck(true);
        setAnimating(true);
        setTimeout(() => {
          setShowCheck(false);
          setAnimating(false);
        }, 2000);
        toast.success("Added into Cart");
        setLoading(false);
      } else {
        router.push("/login");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something Went Wrong");
      console.error("Error in adding products into cart:", error);
    }
  };

  const handleRemoveCart = async () => {
    try {
      if (checkUserLoggedIn()) {
        setLoading(true);
        await removeFromCart(cartId);
        setInCart(false);
        toast.success("Removed from Cart");
        setLoading(false);
      } else {
        router.push("/login");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something Went Wrong");
      console.error("Error in adding products into cart:", error);
    }
  };

  useEffect(() => {
    const isInCart = items.find((item) => item.Product_id === productData.id);
    isInCart && setCartId(isInCart.id);
    isInCart ? setInCart(true) : setInCart(false);
  }, [items]);

  return (
    <div className="group relative">
      <Link
        href={`/category/${textToSlug(productData.category_name)}/${productData.Category_id}/${textToSlug(productData.Product_Name)}/${productData.id}`}
      >
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden soft-shadow bg-[#15242a] mb-6">
          {/* Image */}

          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url(${productData?.images[0]?.image ? productData?.images[0]?.image : "/images/no-image.jpg"})`,
            }}
          />

          {/* Badge */}
          {productData?.badge && (
            <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
              {productData.badge}
            </div>
          )}

          {/* Hover Actions */}
        </div>

        {/* Content */}
        <h5 className="font-dm text-lg font-bold text-(--primaryColor) transition-colors">
          {productData.Product_Name}
        </h5>

        <div className="d-flex space-x-1">
          <span className="text-sm font-black text-gray-600 font-normal line-through ">
            ₹ {productData.Prices[0].Price[0].Price}
          </span>
          {productData.Prices[0].Price[0].Discount && (
            <span className="text-sm font-black text-(--primaryGreen) font-normal ">
              ({productData.Prices[0].Price[0].Discount}% off)
            </span>
          )}
        </div>

        <p className="font-dm text-(--primaryColor2) text-gray-900 font-bold mt-2">
          ₹{productData.Prices[0].Price[0].SalePrice}
        </p>
      </Link>
      <div className="absolute top-2 right-2 group/cart  transition-opacity   gap-3">
        <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-950 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap z-20 opacity-0 group-hover/cart:opacity-100 transition-opacity duration-200">
          {loading
            ? "Please wait..."
            : showCheck
              ? "Added successfully!"
              : inCart
                ? "Remove from cart"
                : "Add to cart"}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-950" />
        </div>
        <button
          onClick={inCart ? handleRemoveCart : handleAddToCart}
          className={`w-10 h-10 rounded-full flex items-center text-gray-900  justify-center transition-all duration-300 cursor-pointer ${
            showCheck
              ? "bg-green-500 text-white"
              : inCart
                ? "bg-white !text-[#cd6632]"
                : "bg-white text-foreground hover:bg-primary hover:text-primary-foreground"
          }`}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-gray-900" />
          ) : showCheck ? (
            <Check className={`w-5 h-5 ${animating ? "animate-bounce" : ""}`} />
          ) : inCart ? (
            <BsCartCheck style={{ fontSize: "24px" }} />
          ) : (
            <span className="material-symbols-outlined  ">
              {` shopping_cart`}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
