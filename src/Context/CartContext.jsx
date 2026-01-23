"use client";
import { createContext, useContext, useReducer } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const access_token = cookies.get("Token_access");

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
  const setCartFromApi = (items) => {
    dispatch({ type: "SET_CART", payload: items });
  };

  // -----------------------
  // SINGLE ITEM
  // -----------------------
  const addToCart = async (payload) => {
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Add-AddtoCart/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );
      fetchCartItems();
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  // -----------------------
  // BULK ITEMS ✅
  // -----------------------
  const fetchCartItems = async () => {
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
