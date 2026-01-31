"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const AuthContext = createContext();

const initialState = {
  userData: {},
  loading: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_USER":
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };

    case "CLEAR_USER":
      return initialState;

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // -----------------------
  // Helper
  // -----------------------
  const refetchAccessToken = () => {
    const access_token = cookies.get("Access_Token");

    return access_token;
  };

  const fetchUserData = async () => {
    const access_token = refetchAccessToken();
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-GetUserProfile/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      dispatch({ type: "SET_USER", payload: res.data });
      console.log("user data", res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    if (refetchAccessToken()) {
      fetchUserData();
    }
  } ,[]);

  return (
    <AuthContext.Provider
      value={{
        userData: state.userData,
        loading: state.loading,
        fetchUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
