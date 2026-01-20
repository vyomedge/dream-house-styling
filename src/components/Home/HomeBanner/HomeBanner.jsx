import { ArrowRight } from "lucide-react";

const HomeBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDDw1PkMNSn3pBwOO3877SlbW7NZqo3FAmQMis0mqhti8REedjyeRulb-VjepoCvqlJfLK_xK45ECywhg2en7SFYQ4G5uUbRIN0eAJ0NZh6LHq-rTJvQVW1zh8jRT2zqodlEy9jJdna6G85tlAiY--1JbsrWCvm_IQo2egBU2E2yJ1UvTy_HqWYs4hjCNxr2_p6coV3RM7lXInDpNBo86dWr0HPUe5ktkbrZzZp7B0rpzbr6vESLo-BiEQ5j_5WSeowo0Fk9ogLuOs)`,
        }}
      >
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20, 30, 50, 0.95) 0%, rgba(20, 30, 50, 0.7) 50%, transparent 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
          <div className="max-w-lg">
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "rgba(0, 212, 200, 0.2)",
                color: "#00D4C8",
              }}
            >
              NEW COLLECTION 2024
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "#ffffff" }}
            >
              Transform Your Space
            </h1>

            <p
              className="text-lg mb-8 max-w-md"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              Discover premium quality wallpapers designed for the modern home.
              Sustainable materials, effortless installation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg"
                style={{ backgroundColor: "#00D4C8", color: "#ffffff" }}
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                className="px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.4)",
                  color: "#ffffff",
                }}
              >
                Free Samples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
