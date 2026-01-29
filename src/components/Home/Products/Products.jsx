"use client";
import { useCart } from "@/Context/CartContext";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const products2 = [
  {
    id: 1,
    title: "Midnight Flora",
    subtitle: "Deep Botanical • Textured Paper",
    price: "$125 / roll",
    badge: "Premium",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDddcDj73KuwXyb7KKAnTSyl34IzI47kZA_b4LQzdGYTa5SnPL78XZbwMJY-g1nMloSV9yV3wSWOZxnOT-6uXssvnLq1ix81sWXMqAG3kNwdojVo_p0sc6H3Izg5f-hMSJ3bQYk6dZsvUOEbgBGLsB8sh_IDACh7UjcNMS_yWhZ1MtsBskUyr0dkgCWGUiX1jY3wY0rlV4Y7ln02ScJ_Akf_3s2InCAVmoFDMK94UntSnLTN-okxr7LZ0Y5McQZo-uKqpedJutevys",
  },
  {
    id: 2,
    title: "Geometric Azure",
    subtitle: "Modern Art • Gold Foil",
    price: "$145 / roll",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvbQounX5xGGIPIn-bIeqIpMA-aQrtKQWoQD6rH1vDJk6OWEDLoPDQLS6Gz4RQ-XR11dMTftViB3a_wM-xIjNguNeK2A3pc3oTjYAvCG45YaHPGSvbEYwzOCse8Ek2q5kjDDP6SVRHWca2VfVVW8MzZcIlTBSy3gl2R6jpw4tlUhgeXMxjHlRYQBvocl1eeKdHg7IATr2G4eZX7OqPzbQVJ0uEYzNkELsDveGEiBzedDEdYY9VJ7u5CsMFKtxubkRylygoc2wDL2s",
  },
  {
    id: 3,
    title: "Sandstone Drift",
    subtitle: "Earth Tones • Matt Finish",
    price: "$110 / roll",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1S_VBIidq9yMMmy2YDHhOhixwTM3ThvQbxsceTSko1BSEITu1FjxKr_XSjDLdU16uBP0nbO1PISIkqG_8pSSejeHVW2SO70tZMW72UV_qNRbgU8x7HORVjgVQgTqGzW-B_rsFDetzFbhz8TchtzNO0BcG2UklNbQkHYCqx_uxaMH6mIcDyNT_7az7xBMQ27mXIQUV5bAib4m5ScTg5511eShfzAmlwAkVIlQ54LRjSPseu_DtQpD_NvS5f2iPakx7Gn3yoxHVAeY",
  },
  {
    id: 4,
    title: "Statuario Marble",
    subtitle: "Luxury Stone • High Gloss",
    price: "$160 / roll",
    badge: "Best Seller",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaRjBNps1PYUsZkYtbdAP92adYfUbrTdP_dXxe7T7RldoSWV5Z9LRwYuI3ASyQ5zhkvPmzopUoeGxWtUeqobxwPugacxRC5rLErXyo8pBVTfno4__jFdkZWBIjFknhqHSkO9IZIy7WTeUEpuqyIaVdjFAxQlqSXKsRx1LU7Elc_RC6XtYuhVZ_02YLtqY0Lr3uV4P-fPml9-Oyn-sp4ncl-5N-7VQ_IOSG3hPVn0H2tsWanfYKZpOa8ONBJ3iq3V5Bod-xCGdU8gQ",
  },
];
const productImages = products2.map((product) => product.image);
const getRandomImage = () => {
  return productImages[Math.floor(Math.random() * productImages.length)];
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const cookies = new Cookies();
  const token_data = cookies.get("Access_Token");
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Product/`,
        {
          headers: {
            Authorization: `Bearer ${token_data}`,
          },
        },
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
    console.log("cardData", cartdata?.Prices[0].Price[0].SalePrice);
    const data = {
      Cart_Quantity: 1,
      category: cartdata?.category_name,
      Sub_Category_id: cartdata?.Sub_Category_id,
      Store_id: cartdata?.Store_id,
      TotalPrice: cartdata?.Prices[0].Price[0].SalePrice,
      Price: cartdata?.Prices,
      Image_id: 4,
      Country: "India",
      State: cartdata?.Store_Country,
      City: cartdata?.Store_City,
      Copuon: cartdata?.copuon,
      free: "no",
      Brand_Id: cartdata?.Brand_id,
      Product_id: cartdata?.id,
    };
    try {
      await addToCart(data);
    } catch (error) {
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
                          backgroundImage: `url(${product?.images[0]?.image ? product?.images[0]?.image : getRandomImage()})`,
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
                        {/* <button className="flex cursor-pointer bg-white text-background-dark p-3 rounded-full hover:bg-(--primaryColor) text-black hover:text-white transition-colors">
                    <span className="material-symbols-outlined ">
                      visibility
                    </span>
                  </button> */}
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
                    <p
                      className="font-dm text-(--primaryColor2) text-sm mt-1 uppercase tracking-wider"
                      dangerouslySetInnerHTML={{
                        __html: product.Product_Description,
                      }}
                    />

                    <p className="font-dm text-(--primaryColor2) font-bold mt-2">
                      ₹{product.Prices[0].Price[0].SalePrice}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10 text-[#cd6632]">
                <button className="cursor-pointer font-dm border border-foreground bg-transparent text-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-foreground hover:text-background inline-flex items-center gap-2">
                  {` Load More Products`}
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
