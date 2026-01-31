"use client";

import FloatingWhatsapp from "@/components/FloatingWhatsapp/FloatingWhatsapp";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout = ["/login", "/register", "/signup"].includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      <FloatingWhatsapp />
      {!hideLayout && <Footer />}
    </>
  );
}
