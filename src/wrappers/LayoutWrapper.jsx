import FloatingWhatsapp from "@/components/FloatingWhatsapp/FloatingWhatsapp";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const fetchCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`,
      { next: { revalidate: 3600 } },
    );
    const data = await res.json();
    return data || [];
  } catch (err) {
    console.error("Category API error:", err);
  }
};

export default async function LayoutWrapper({ children }) {
  const categories = await fetchCategories();
  return (
    <>
      <Header categories={categories} />
      {children}
      <FloatingWhatsapp />
      <Footer categories={categories} />
    </>
  );
}
