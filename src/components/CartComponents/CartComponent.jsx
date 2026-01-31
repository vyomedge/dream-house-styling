"use client";
import React, { useEffect } from "react";
import CartHeader from "./CartHeader";
import CartLayout from "./CartLayout";
import EmptyCartPage from "./CartEmptyComponents/EmptyCartPage";
import { useCart } from "@/Context/CartContext";

export const CartComponent = () => {
  const { items, fetchCartItems } = useCart();
  const fetchProducts = async () => {
    try {
      await fetchCartItems();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log("cart items",items)

  useEffect(() => {
    if (!items.length) {
      fetchProducts();
    }
  }, []);

  if (!items.length) {
    return <EmptyCartPage />;
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <CartHeader />
      <CartLayout cartItems={items} />
    </main>
  );
};
