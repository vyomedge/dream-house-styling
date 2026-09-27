"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import { createClient } from "@/lib/supabase/client";

const AuthContext = createContext();

const initialState = {
  userData: {},
  loading: true,
  session: null,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_AUTH":
      return {
        ...state,
        session: action.payload.session,
        userData: action.payload.userData || {},
        loading: false,
      };

    case "CLEAR_USER":
      return {
        ...initialState,
        loading: false,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const supabase = createClient();

    const loadUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        dispatch({
          type: "SET_AUTH",
          payload: { session: null, userData: {} },
        });
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .maybeSingle();

      dispatch({
        type: "SET_AUTH",
        payload: {
          session,
          userData: profile || {
            id: session.user.id,
            email: session.user.email,
          },
        },
      });
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!session?.user) {
        dispatch({ type: "CLEAR_USER" });
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .maybeSingle();

      dispatch({
        type: "SET_AUTH",
        payload: {
          session,
          userData: profile || {
            id: session.user.id,
            email: session.user.email,
          },
        },
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkUserLoggedIn = () => Boolean(state.session?.user);

  const fetchUserData = async () => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      dispatch({ type: "CLEAR_USER" });
      return null;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    const userData = profile || {
      id: user.id,
      email: user.email,
    };

    dispatch({
      type: "SET_AUTH",
      payload: {
        session: state.session,
        userData,
      },
    });

    return userData;
  };

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    dispatch({ type: "CLEAR_USER" });
  };

  return (
    <AuthContext.Provider
      value={{
        userData: state.userData,
        loading: state.loading,
        session: state.session,
        fetchUserData,
        checkUserLoggedIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
