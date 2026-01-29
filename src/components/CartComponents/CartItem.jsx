import { useCart } from "@/Context/CartContext";

const CartItem = ({
  title,
  subtitle,
  price,
  image,
  cartId,
  cardData,
  priceByQuanitity,
}) => {
  const { removeFromCart, updateCartItem } = useCart();

  const handleRemove = async () => {
    try {
      await removeFromCart(cartId);
    } catch (error) {
      console.error("Error remove product:", error);
    }
  };

  const handleUpdateQuantity = async (actionType) => {
    let quantity = cardData.Cart_Quantity;
    if (actionType === "inc") {
      quantity += 1;
    } else if (actionType === "dec") {
      quantity -= 1;
    }

    const totalPrice = quantity * price;

    console.log("totalPrice", totalPrice);

    const data = {
      Cart_Quantity: quantity,
      category: cardData?.category_name,
      Sub_Category_id: cardData?.Sub_Category_id,
      Store_id: cardData?.Store_id,
      TotalPrice: totalPrice.toFixed(2),
      Price: cardData?.Price,
      Image_id: 4,
      Country: "India",
      State: cardData?.Country,
      City: cardData?.City,
      Copuon: cardData?.Copuon,
      free: "no",
      Brand_Id: cardData?.Brand_id,
      Product_id: cardData?.Product_id,
    };
    try {
      await updateCartItem(data, cartId);
    } catch (error) {
      console.error("Error remove product:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start gap-8 py-8 border-b border-white/10 group">
      <div className="w-full sm:w-48 aspect-[3/4] rounded-lg overflow-hidden bg-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-dm responsiveheading3 font-bold mb-1">{title}</h3>
            <p className="font-dm text-white/40 text-sm mb-4">{subtitle}</p>
          </div>
          <button
            className="font-dm material-symbols-outlined text-white/30 hover:text-red-400 cursor-pointer"
            onClick={handleRemove}
          >
            close
          </button>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center border border-white/20 rounded-lg">
            <button
              className={`font-dm px-4 py-2  hover:text-(--primaryColor) ${cardData.Cart_Quantity === 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
              onClick={() => {
                cardData.Cart_Quantity !== 1 && handleUpdateQuantity("dec");
              }}
            >
              -
            </button>
            <span className="font-dm px-6 py-2 border-x border-white/20 font-bold">
              {cardData.Cart_Quantity}
            </span>
            <button
              className="font-dm px-4 py-2 cursor-pointer hover:text-(--primaryColor)"
              onClick={() => {
                handleUpdateQuantity("inc");
              }}
            >
              +
            </button>
          </div>
          <p className="font-dm text-2xl font-black text-primary">
            ₹ {priceByQuanitity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
