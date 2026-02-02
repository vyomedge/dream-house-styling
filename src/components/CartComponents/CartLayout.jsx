import CartItemList from "./CartItemList";
import OrderSummary from "./OrderSummary";
import Recommendations from "./Recommendation";

const CartLayout = ({ cartItems }) => {
  console.log("cartItems", cartItems);
  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-2/3 space-y-8">
        <CartItemList itemList={cartItems} />
        <Recommendations />
      </div>

      <div className="lg:w-1/3">
        <OrderSummary cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartLayout;
