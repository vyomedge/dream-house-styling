import { useAuth } from "@/Context/AuthContext";
import { useCart } from "@/Context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";

const RecommendationCard = ({ cardData }) => {
  const { addToCart, items, removeFromCart } = useCart();
  const { checkUserLoggedIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [inCart, setInCart] = useState(false);
  const router = useRouter();
  const [cartId, setCartId] = useState(null);

  const handleAddToCart = async () => {
    try {
      if (checkUserLoggedIn()) {
        setLoading(true);
        await addToCart(cardData);
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
    const isInCart = items.find((item) => item.Product_id === cardData.id);
    isInCart && setCartId(isInCart.id);
    isInCart ? setInCart(true) : setInCart(false);
  }, [items]);

  return (
    <div className="glass p-4 rounded-xl hover:bg-white/5 hover:scale-[1.03] hover:duration-300 transition-all cursor-pointer">
      <img
        src={cardData.images[0].image}
        alt={cardData.Product_Name}
        className="w-full aspect-square object-cover rounded-lg mb-4  transition-all"
      />

      <h5 className="font-dm font-bold text-(--primaryColor) text-sm ">
        {cardData.Product_Name}
      </h5>
      <p className="font-dm text-white text-xs mt-1">
        ₹ {cardData.Prices?.[0]?.Price[0].Price}
      </p>

      <Button
        onClick={() => (inCart ? handleRemoveCart() : handleAddToCart())}
        loading={loading}
        startIcon={<FaShoppingCart />}
        variant="outlined"
        className="font-dm mt-4 w-full py-2  border cursor-pointer  rounded text-[10px] font-bold "
        sx={{
          color: "white",
          borderColor: "white",
          textTransform: "none",
          mt: 1,
          backgroundColor: loading ? `var(--primaryColor)` : "",
          ":hover": {
            background: `var(--primaryColor)`,
            borderColor: "none",
            outline: "none",
          },
        }}
      >
        {inCart ? "Remove" : "Add To Cart"}
      </Button>
    </div>
  );
};

export default RecommendationCard;
