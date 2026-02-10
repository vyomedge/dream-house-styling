"use client";
import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import { textToSlug } from "@/utills/utills";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Products = () => {
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
                  <div key={idx} className="group">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden soft-shadow bg-[#15242a] mb-6">
                      {/* Image */}

                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${product?.images[0]?.image ? product?.images[0]?.image : "/images/no-image.jpg"})`,
                        }}
                      />

                      {/* Badge */}
                      {product?.badge && (
                        <div className="absolute top-4 right-4 bg-background-dark/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase">
                          {product.badge}
                        </div>
                      )}

                      {/* Hover Actions */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <Link
                          href={`/category/${textToSlug(product.category_name)}/${product.Category_id}/${textToSlug(product.Product_Name)}/${product.id}`}
                        >
                          <button className="flex cursor-pointer bg-white text-background-dark p-3 rounded-full hover:bg-(--primaryColor) text-black hover:text-white transition-colors">
                            <span className="material-symbols-outlined ">
                              visibility
                            </span>
                          </button>
                        </Link>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="font-dm flex cursor-pointer bg-white  text-background-dark p-3 rounded-full hover:bg-(--primaryColor) text-black hover:text-white transition-colors"
                        >
                          <span className="material-symbols-outlined  ">
                            {` shopping_cart`}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <h5 className="font-dm text-lg font-bold text-(--primaryColor) transition-colors">
                      {product.Product_Name}
                    </h5>
                    {/* <p
                      className="font-dm text-(--primaryColor2) text-sm mt-1 uppercase tracking-wider"
                      dangerouslySetInnerHTML={{
                        __html: product.Product_Description,
                      }}
                    /> */}

                    <div className="d-flex space-x-1">
                      <span className="text-sm font-black text-gray-600 font-normal line-through ">
                        ₹ {product.Prices[0].Price[0].Price}
                      </span>
                      {product.Prices[0].Price[0].Discount && (
                        <span className="text-sm font-black text-(--primaryGreen) font-normal ">
                          ({product.Prices[0].Price[0].Discount}% off)
                        </span>
                      )}
                    </div>

                    <p className="font-dm text-(--primaryColor2) text-gray-900 font-bold mt-2">
                      ₹{product.Prices[0].Price[0].SalePrice}
                    </p>
                  </div>
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
