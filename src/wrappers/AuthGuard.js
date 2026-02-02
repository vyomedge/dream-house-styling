"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "universal-cookie";

const protectedRoutes = ["/add-to-cart"];

const AuthGuard = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const cookies = new Cookies();

  useEffect(() => {
    const access_token = cookies.get("Access_Token");

    const isProtected = protectedRoutes.some((route) =>
      pathname.startsWith(route),
    );

    if (isProtected && !access_token) {
      router.replace("/login");
    }
  }, [pathname, router]);

  return <>{children}</>;
};

export default AuthGuard;
