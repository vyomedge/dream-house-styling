"use client";

import { createContext, useContext, useReducer, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";

const CartContext = createContext();

const initialState = {
  items: [],
  loading: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

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

export const refetchAccessToken = () => {
  return null;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const getUser = async () => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  };

  const getOrCreateCart = async (userId) => {
    const supabase = createClient();

    const { data: existingCart, error: fetchError } = await supabase
      .from("carts")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();

    if (fetchError) throw fetchError;

    if (existingCart) {
      return existingCart;
    }

    const { data: newCart, error: createError } = await supabase
      .from("carts")
      .insert({ user_id: userId })
      .select("id")
      .single();

    if (createError) throw createError;

    return newCart;
  };

  const fetchCartItems = useCallback(async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const user = await getUser();

      if (!user) {
        dispatch({ type: "SET_CART", payload: [] });
        return [];
      }

      const cart = await getOrCreateCart(user.id);
      const supabase = createClient();

      const { data, error } = await supabase
        .from("cart_items")
        .select(`
          id,
          quantity,
          product_id,
          products (
            *,
            categories (
              id,
              name,
              slug
            ),
            product_images (
              id,
              image_url,
              alt_text,
              sort_order,
              is_primary
            ),
            product_customization (
              id,
              point,
              sort_order
            ),
            product_faqs (
              id,
              question,
              answer,
              sort_order
            )
          )
        `)
        .eq("cart_id", cart.id)
        .order("created_at", { ascending: true });

      if (error) throw error;

      const items = (data || []).map((item) => {
        const product = item.products;

        const regularPrice = Number(product?.regular_price || 0);
        const salePrice = Number(
          product?.sale_price ?? product?.regular_price ?? 0,
        );
        const discount = Number(product?.discount || 0);
        const quantity = Number(item.quantity || 1);

        const productImages = (product?.product_images || [])
          .slice()
          .sort(
            (a, b) =>
              (a.sort_order || 0) - (b.sort_order || 0),
          );

        const primaryImage =
          productImages.find((image) => image.is_primary) ||
          productImages[0];

        const totalPrice = salePrice * quantity;

        return {
          ...(product || {}),

          // Database fields
          id: item.id,
          product_id: product?.id,
          cart_id: cart.id,
          cart_item_id: item.id,

          // Legacy cart compatibility
          Product_id: product?.id,
          ProductName: product?.name || "",
          Product_Name: product?.name || "",
          Product_Description: product?.description || "",
          Short_Description: product?.short_description || "",
          Image: primaryImage?.image_url || "",

          category_id: product?.category_id,
          Category_id: product?.category_id,
          category_name: product?.categories?.name || "",

          Price: [
            {
              Price: [
                {
                  Price: regularPrice,
                  SalePrice: salePrice,
                  Discount: discount,
                },
              ],
            },
          ],

          Prices: [
            {
              Price: [
                {
                  Price: regularPrice,
                  SalePrice: salePrice,
                  Discount: discount,
                },
              ],
            },
          ],

          Cart_Quantity: quantity,
          TotalPrice: totalPrice,

          images: productImages.map((image) => ({
            id: image.id,
            image: image.image_url,
            alt_text: image.alt_text || product?.name || "",
            sort_order: image.sort_order || 0,
            is_primary: image.is_primary || false,
          })),
        };
      });

      dispatch({ type: "SET_CART", payload: items });

      return items;
    } catch (error) {
      console.error("Error fetching cart:", error);
      dispatch({ type: "SET_CART", payload: [] });
      return [];
    }
  }, []);

  const addToCart = async (payload) => {
    const user = await getUser();

    if (!user) {
      throw new Error("Please sign in before adding items to cart.");
    }

    const cart = await getOrCreateCart(user.id);
    const supabase = createClient();

    dispatch({ type: "SET_LOADING", payload: true });

    const { data: existingItem, error: existingItemError } = await supabase
      .from("cart_items")
      .select("id, quantity")
      .eq("cart_id", cart.id)
      .eq("product_id", payload.id)
      .maybeSingle();

    if (existingItemError) {
      throw existingItemError;
    }

    if (existingItem) {
      const { error } = await supabase
        .from("cart_items")
        .update({
          quantity: existingItem.quantity + 1,
        })
        .eq("id", existingItem.id);

      if (error) throw error;
    } else {
      const { error } = await supabase.from("cart_items").insert({
        cart_id: cart.id,
        product_id: payload.id,
        quantity: 1,
      });

      if (error) throw error;
    }

    await fetchCartItems();
  };

  const updateCartItem = async (payload, cartId) => {
    const supabase = createClient();

    const quantity = Number(
      payload?.Cart_Quantity ??
        payload?.quantity ??
        payload?.Quantity ??
        1,
    );

    if (quantity <= 0) {
      return removeFromCart(cartId);
    }

    dispatch({ type: "SET_LOADING", payload: true });

    const { error } = await supabase
      .from("cart_items")
      .update({ quantity })
      .eq("id", cartId);

    if (error) throw error;

    await fetchCartItems();
  };

  const removeFromCart = async (cartItemId) => {
    const supabase = createClient();

    dispatch({ type: "SET_LOADING", payload: true });

    const { error } = await supabase
      .from("cart_items")
      .delete()
      .eq("id", cartItemId);

    if (error) throw error;

    await fetchCartItems();
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
