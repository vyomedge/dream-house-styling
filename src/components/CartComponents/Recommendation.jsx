"use client";

import { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";

const Recommendations = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/catalog/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const LimetedProducts = products.slice(0, 6);

  return (
    <div className="pt-24 pb-12">
      <h4 className="font-dm text-xl text-(--primaryColor) font-bold uppercase tracking-widest mb-10 flex items-center gap-4">
        You May Also Like
        <span className="h-[1px] flex-1 bg-white/10" />
      </h4>

      {loading ? (
        <div className="text-(--primaryColor) text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {LimetedProducts.map((data) => (
            <RecommendationCard
              key={data.id}
              cardData={data}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
