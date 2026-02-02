import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const EmptyCartPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const { checkUserLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Product/`,
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = async (cartdata) => {
    try {
      if (checkUserLoggedIn()) {
        await addToCart(cartdata);
        toast.success("Added into Cart");
      } else {
        router.push("/login");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.error("Error in adding products into cart:", error);
    }
  };

  const LimetedProducts = products.slice(0, 8);

  return (
    <main>
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Minimalist empty room"
            className="w-full h-full object-cover "
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDddcDj73KuwXyb7KKAnTSyl34IzI47kZA_b4LQzdGYTa5SnPL78XZbwMJY-g1nMloSV9yV3wSWOZxnOT-6uXssvnLq1ix81sWXMqAG3kNwdojVo_p0sc6H3Izg5f-hMSJ3bQYk6dZsvUOEbgBGLsB8sh_IDACh7UjcNMS_yWhZ1MtsBskUyr0dkgCWGUiX1jY3wY0rlV4Y7ln02ScJ_Akf_3s2InCAVmoFDMK94UntSnLTN-okxr7LZ0Y5McQZo-uKqpedJutevys"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <span className="font-dm material-symbols-outlined text-primary text-6xl mb-8 block opacity-50">
            shopping_cart_off
          </span>
          <h1 className="font-dm  responsive-heading font-black uppercase tracking-tighter mb-6 leading-none">
            Your Selection is Empty
          </h1>
          <p className="font-dm text-white/60 text-lg md:text-xl font-light mb-12 tracking-wide">
            It looks like you haven't discovered your perfect wall yet. Let us
            help you find the texture for your next vision.
          </p>
          <Link
            className=" font-dm inline-block bg-[#cd6632] hover:bg-[#cd6632]/80 text-white font-black px-12 py-5 rounded-full uppercase tracking-[0.2em] text-sm transition-all shadow-xl shadow-primary/20"
            href="/"
          >
            Start Browsing
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="font-dm responsiveheading3 text-[#cd6632] uppercase ">
              Curated Picks
            </h3>
            <p className="font-dm responsive-text text-gray-500 uppercase  text-[10px] mt-2 font-bold">
              Recommended for your refined taste
            </p>
          </div>

          <Link
            className="font-dm  font-bold uppercase  text-[#cd6632] hover:text-[#cd6632]/80 transition-colors"
            href="/category"
          >
            View All Collections
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <CircularProgress
              size={30}
              sx={{
                textAlign: "center",
                color: "var(--primaryColor)",
              }}
            />
          </div>
        ) : LimetedProducts.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LimetedProducts.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-white/5 relative">
                  <img
                    src={item.images?.[0]?.image ?? ""}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="font-dm flex cursor-pointer bg-[#cd6632] hover:bg-[#cd6632]/80 p-3 rounded-full  transition-colors">
                      <span
                        className="font-dm material-symbols-outlined"
                        onClick={() => handleAddToCart(item)}
                      >
                        shopping_cart
                      </span>
                    </button>
                  </div>
                </div>

                <h4 className="font-dm  font-bold uppercase  text-sm text-[#cd6632]">
                  {item.Product_Name}
                </h4>
                <div className="d-flex space-x-1">
                  <span className="text-sm font-black text-gray-600 font-normal line-through ">
                    ₹ {item.Prices[0].Price[0].Price}
                  </span>
                  {item.Prices[0].Price[0].Discount && (
                    <span className="text-sm font-black text-(--primaryGreen) font-normal ">
                      ({item.Prices[0].Price[0].Discount}% off)
                    </span>
                  )}
                </div>

                <p className="font-dm text-(--primaryColor2) text-gray-900 font-bold mt-2">
                  ₹{item.Prices[0].Price[0].SalePrice}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-(--primaryColor) text-center">
            No Product Found
          </div>
        )}
      </section>
    </main>
  );
};

export default EmptyCartPage;
