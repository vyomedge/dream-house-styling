import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";

const RecommendationCard = ({ cardData }) => {
  const { addToCart } = useCart();
  const { checkUserLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAddToCart = async (cartdata) => {
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
      if (checkUserLoggedIn()) {
        setLoading(true);
        await addToCart(data);
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

  return (
    <div className="glass p-4 rounded-xl hover:bg-white/5 hover:scale-[1.03] hover:duration-300 transition-all cursor-pointer">
      <img
        src={cardData.images[0].image}
        alt={cardData.Product_Name}
        className="w-full aspect-square object-cover rounded-lg mb-4  transition-all"
      />

      <h5 className="font-dm font-bold text-(--primaryColor) text-sm uppercase">
        {cardData.Product_Name}
      </h5>
      <p className="font-dm text-white text-xs mt-1">
        ₹ {cardData.Prices?.[0]?.Price[0].Price}
      </p>

      <Button
        onClick={() => handleAddToCart()}
        loading={true}
        startIcon={<FaShoppingCart />}
        variant="outlined"
        className="font-dm mt-4 w-full py-2  border cursor-pointer border-white/10 rounded text-[10px] font-bold uppercase"
        style={{
          textTransform: "none",
          color: "white",
          borderColor: "white",
        }}
        sx={{
          background: "transparent",
          mt: 1,
          ":hover": {
            background: `var(--primaryColor)`,
            borderColor: "none",
            outline: "none",
          },
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default RecommendationCard;
