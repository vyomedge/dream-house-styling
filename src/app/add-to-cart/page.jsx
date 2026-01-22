import { CartComponent } from "@/components/CartComponents/CartComponent";
import EmptyCartPage from "@/components/CartComponents/CartEmptyComponents/EmptyCartPage";
import React from "react";

const AddToCart = () => {
  return <CartComponent cartItems={[]} />;
};

export default AddToCart;
