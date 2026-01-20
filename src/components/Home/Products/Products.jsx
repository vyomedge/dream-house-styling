import { ArrowUpRight } from "lucide-react";
import productMidnight from "@/assets/product-midnight-bloom.jpg";
import productArtDeco from "@/assets/product-art-deco.jpg";
import productDesert from "@/assets/product-desert-sands.jpg";
import productSlate from "@/assets/product-slate-linen.jpg";
import Image from "next/image";

const products = [
  {
    name: "Midnight Bloom",
    price: "$45.00",
    unit: "sq meter",
    image: productMidnight,
  },
  {
    name: "Art Deco Gold",
    price: "$52.00",
    unit: "sq meter",
    image: productArtDeco,
  },
  {
    name: "Desert Sands",
    price: "$38.00",
    unit: "sq meter",
    image: productDesert,
  },
  {
    name: "Slate Linen",
    price: "$42.00",
    unit: "sq meter",
    image: productSlate,
  },
];

const Products = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground">
            Our best-selling designs curated for your home.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col bg-background rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="pt-4">
                <h3 className="font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="text-sm">
                  <span className="text-primary font-medium">
                    {product.price}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    / {product.unit}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-foreground bg-transparent text-foreground px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-foreground hover:text-background inline-flex items-center gap-2">
            Load More Products
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
