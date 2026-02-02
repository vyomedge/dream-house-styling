import { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationCard";
import axios from "axios";

const Recommendations = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Product/`,
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products in Recommendation", products);
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
          {products.map((data) => {
            return <RecommendationCard cardData={data} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
