"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaShoppingCart,
  FaCommentDots,
  FaRuler,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import CustomQuoteForm from "./CustomQuoteForm";
import ProductDetailDiscription from "./ProductDetailDiscription";
import { textToSlug } from "@/utills/utills";
import { useCart } from "@/Context/CartContext";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

export default function ProductDetail({ product, category }) {
  const [activeImg, setActiveImg] = useState("/wallpaper-1.png");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const { addToCart, items, removeFromCart } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [inCart, setInCart] = useState(false);
  const { checkUserLoggedIn } = useAuth();
  const [cartId, setCartId] = useState(null);

  const handleAddToCart = async () => {
    try {
      if (checkUserLoggedIn()) {
        setLoading(true);
        await addToCart(product);
        setInCart(true);
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
    const isInCart = items.find((item) => item.Product_id === product.id);
    isInCart && setCartId(isInCart.id);
    isInCart ? setInCart(true) : setInCart(false);
  }, [items]);

  useEffect(() => {
    setActiveImg(product.images[0].image);
  }, [product]);

  return (
    <>
      <section className="bg-white ">
        <div className=" mx-auto ">
          {showQuoteForm ? (
            <div className="">
              <CustomQuoteForm />
            </div>
          ) : (
            <>
              {/* Breadcrumb */}
              <div className="">
                <div className="custom-container py-12">
                  <div className="font-dm text-sm text-gray-700 mb-4">
                    <Link
                      href="/"
                      className="hover:text-[#cd6632]"
                    >{` Home`}</Link>{" "}
                    /
                    <Link
                      href={`/category/${textToSlug(category.name)}/3`}
                      className="mx-1 hover:text-[#cd6632]"
                    >
                      {category.name.toLowerCase()}
                    </Link>{" "}
                    /
                    <span className="font-dm text-gray-400">
                      {product.Product_Name}
                    </span>
                  </div>
                  <Link
                    href="/categories"
                    className="font-dm inline-flex items-center gap-2 text-sm text-[#cd6632] mb-6"
                  >
                    {" "}
                    <FaArrowLeft /> {`Back to Category`}
                  </Link>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div>
                      <div className="relative w-full  h-[320] sm:h-[420] rounded-xl overflow-hidden border border-gray-200">
                        <Image
                          src={activeImg ?? "/images/no-image.jpg"}
                          alt="Elegant Floral Wallpaper"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>

                      <div className="flex gap-4 mt-4">
                        {product.images.map((img, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setActiveImg(img.image)}
                            className={`relative w-20 h-20 rounded-lg overflow-hidden border cursor-pointer ${
                              activeImg === img.image
                                ? "border-[#cd6632]"
                                : "border-gray-200"
                            }`}
                          >
                            <Image
                              src={img?.image ?? "/images/no-image.jpg"}
                              alt=""
                              fill
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className="font-dm responsiveheading2 text-gray-700 font-semibold mb-2">
                        {product.Product_Name}
                      </h2>

                      <div
                        className="font-dm text-sm text-gray-700 max-w-md mb-4"
                        dangerouslySetInnerHTML={{
                          __html: product?.Product_Description || "",
                        }}
                      ></div>
                      <p className="font-dm text-2xl font-semibold text-[#cd6632] mb-6">
                        ₹ {product.Prices[0].Price[0].SalePrice}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-dm text-sm font-semibold text-gray-700 mb-2">{`Size`}</h4>
                        <ul className="font-dm text-sm text-gray-400 space-y-1">
                          <li>{`• Standard`}</li>
                          <li>{`• Custom Size (Request Measurement)`}</li>
                        </ul>
                      </div>
                      <div className="mb-8">
                        <h4 className="font-dm text-sm font-semibold mb-3 text-gray-700">{`Color`}</h4>
                        <div className="flex gap-3">
                          {["#f5f5dc", "#2563eb", "#16a34a", "#facc15"].map(
                            (c, i) => (
                              <span
                                key={i}
                                className="w-8 h-8 rounded-full border border-gray-400 cursor-pointer"
                                style={{ backgroundColor: c }}
                              />
                            ),
                          )}
                        </div>
                      </div>
                      {/* Actions */}
                      <div className="space-y-3 max-w-sm">
                        <Button
                          onClick={inCart ? handleRemoveCart : handleAddToCart}
                          loading={loading}
                          startIcon={<FaShoppingCart />}
                          variant="contained"
                          className="font-dm w-full flex items-center justify-center gap-3 bg-[#cd6632] text-white cursor-pointer py-3 rounded-lg text-sm font-medium hover:opacity-95"
                          style={{
                            background: `var(--primaryColor)`,
                            textTransform: "none",
                          }}
                          sx={{
                            paddingBlock: 1,
                            marginBottom: 1,
                          }}
                        >
                          {inCart ? "Remove from Cart" : "Add to Cart"}
                        </Button>

                        <button
                          type="button"
                          onClick={() => setShowQuoteForm(true)}
                          className="font-dm w-full flex items-center justify-center gap-3 border border-[#cd6632] text-[#cd6632] hover:text-white cursor-pointer py-3 rounded-lg text-sm font-medium hover:bg-[#cd6632]"
                        >
                          <FaCommentDots /> {` Get Custom Quote`}
                        </button>

                        <button
                          type="button"
                          onClick={() => setShowQuoteForm(true)}
                          className="font-dm w-full flex items-center justify-center gap-3 border border-gray-300 text-gray-700 hover:text-gray-700 py-3 rounded-lg text-sm font-medium hover:bg-gray-50"
                        >
                          <FaRuler /> {` Request Measurement`}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-6">
                  <ProductDetailDiscription />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
