"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

const protectedRoutes = ["/add-to-cart"];

const AuthGuard = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    const isProtected = protectedRoutes.some((route) =>
      pathname.startsWith(route),
    );

    if (isProtected && !session?.user) {
      router.replace("/login");
    }
  }, [pathname, router, session, loading]);

  return <>{children}</>;
};

export default AuthGuard;
