"use client";

import { useEffect, useState } from "react";
import FloatingWhatsapp from "@/components/FloatingWhatsapp/FloatingWhatsapp";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function LayoutWrapper({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function loadCategories() {
      try {
        const response = await fetch("/api/catalog/categories", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Categories request failed: ${response.status}`);
        }

        const data = await response.json();

        if (!cancelled) {
          setCategories(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Failed to load categories:", error);

        if (!cancelled) {
          setCategories([]);
        }
      }
    }

    loadCategories();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Header categories={categories} />
      {children}
      <FloatingWhatsapp />
      <Footer categories={categories} />
    </>
  );
}
