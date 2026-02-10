"use client";
import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const CartContext = createContext();

const initialState = {
  items: [],
  loading: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_CART":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // -----------------------
  // Helper
  // -----------------------
  const refetchAccessToken = (items) => {
    const access_token = cookies.get("Access_Token");

    return access_token;
  };

  // -----------------------
  // Helper
  // -----------------------
  const setCartFromApi = (items) => {
    dispatch({ type: "SET_CART", payload: items });
  };

  // -----------------------
  // SINGLE ITEM
  // -----------------------
  const addToCart = async (payload) => {
    const data = {
      Cart_Quantity: 1,
      category: payload?.category_name,
      Sub_Category_id: payload?.Sub_Category_id,
      Store_id: payload?.Store_id,
      TotalPrice: payload?.Prices[0].Price[0].SalePrice,
      Price: payload?.Prices,
      Image_id: payload?.images[0]?.id,
      Country: "India",
      State: payload?.Store_Country,
      City: payload?.Store_City,
      Copuon: payload?.copuon,
      free: "no",
      Brand_Id: payload?.Brand_id,
      Product_id: payload?.id,
    };

    try {
      const access_token = refetchAccessToken();
      dispatch({ type: "SET_LOADING" });

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Add-AddtoCart/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      fetchCartItems();
    } catch (err) {
      console.error("Add to cart failed", err);
      throw new Error(err);
    }
  };

  // -----------------------
  // BULK ITEMS ✅
  // -----------------------
  const fetchCartItems = async () => {
    const access_token = refetchAccessToken();
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Addtocart/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      setCartFromApi(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // -----------------------
  // UPDATE
  // -----------------------
  const updateCartItem = async (payload, cartId) => {
    const access_token = refetchAccessToken();
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Update-AddtoCart/${cartId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      fetchCartItems();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  // -----------------------
  // REMOVE
  // -----------------------
  const removeFromCart = async (cartItemId) => {
    const access_token = refetchAccessToken();
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/DeleteAddtoCart/${cartItemId}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      fetchCartItems();
    } catch (err) {
      throw new Error(err);
      console.error("Remove failed", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        addToCart,
        fetchCartItems,
        updateCartItem,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
