"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const AuthGuard = ({ children }) => {
  const router = useRouter();
  const cookies = new Cookies();

  useEffect(() => {
    const access_token = cookies.get("Access_Token");

    if (!access_token) {
      router.replace("/login"); // prevent back navigation
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
