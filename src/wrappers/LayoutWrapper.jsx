import { headers } from "next/headers";
import FloatingWhatsapp from "@/components/FloatingWhatsapp/FloatingWhatsapp";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { getPublishedCategories } from "@/lib/catalog";

export default async function LayoutWrapper({ children }) {
  const requestHeaders = await headers();
  const isAdminRoute = requestHeaders.get("x-admin-route") === "true";

  if (isAdminRoute) {
    return <>{children}</>;
  }

  const categories = await getPublishedCategories();

  return (
    <>
      <Header categories={categories} />
      {children}
      <FloatingWhatsapp />
      <Footer categories={categories} />
    </>
  );
}
