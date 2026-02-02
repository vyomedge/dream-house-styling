import { textToSlug } from "@/utills/utills";
import Link from "next/link";

const SearchResults = ({ results = [], resultsType, loading }) => {
  return (
    <div className="mega-search-dropdown bg-(--primaryColor2) opacity-0 invisible fixed top-11 left-1/2 -translate-x-1/2 w-[95vw] max-w-[1400px] mega-glass rounded-2xl p-6 lg:p-10 transition-all duration-500 translate-y-10 border border-white/10 soft-shadow z-[60] max-h-[65vh] flex flex-col">
      <div className="flex flex-col gap-6 h-full">
        {/* Top Bar */}
        {/* <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-8 overflow-hidden">
            <h5 className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-bold whitespace-nowrap">
              Suggested
            </h5>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {[
                "Art Deco",
                "Modern Minimalism",
                "Botanical Dream",
                "Industrial Loft",
                "Velvet",
              ].map((item) => (
                <a
                  key={item}
                  className="text-xs font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:text-primary transition-all whitespace-nowrap"
                  href="#"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 ml-8 shrink-0">
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">
              128 Results Found
            </span>
            <a
              className="bg-primary/20 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
              href="#"
            >
              View All
              <span className="material-symbols-outlined text-sm">
                trending_flat
              </span>
            </a>
          </div>
        </div> */}

        {/* Section Title */}
        <div className="flex flex-col border-b pb-6 border-white/10">
          <h2 className="text-lg font-black  font-normal">
            {resultsType === "suggested"
              ? "Recommended Products"
              : "Top Search Results"}
          </h2>
        </div>
        <div className="h-[42vh] overflow-x-auto custom-scrollbar overflow-x-hidden">
          {/* Grid */}
          {!loading ? (
            results.length ? (
              <div className="flex-1   pr-4 -mr-4">
                {results.map((category, idx) => {
                  return (
                    <div key={idx} className="mb-4">
                      <div className="text-base">{category.category_name}</div>
                      <div className="grid pr-3  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-4">
                        {category.products.map((item, index) => (
                          <Link
                            key={index}
                            className="group/card block"
                            href={`/category/${textToSlug(item.category_name)}/${item.Category_id}/${textToSlug(item.Product_Name)}/${item.id}`}
                          >
                            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3 border border-white/5 group-hover/card:border-primary/50 transition-all soft-shadow bg-white/5">
                              <div
                                className="w-full h-full bg-cover bg-center group-hover/card:scale-110 transition-transform duration-700"
                                style={{
                                  backgroundImage: `url('${item.images[0].image}')`,
                                }}
                              />
                            </div>
                            <div className="flex flex-col px-1">
                              <h4 className="text-base font-bold   text-(--primaryColor) transition-colors truncate">
                                {item.Product_Name}
                              </h4>
                              <div className="flex flex-col  mt-1">
                                {/* <p className="text-[9px] text-white/40 uppercase tracking-widest truncate mr-2">
                      {item.type}
                    </p> */}
                                <div className="d-flex space-x-1">
                                  <span className="text-sm font-black text-white/50 font-normal line-through ">
                                    ₹ {item.Prices[0].Price[0].Price}
                                  </span>
                                  {item.Prices[0].Price[0].Discount && (
                                    <span className="text-sm font-black text-(--primaryGreen) font-normal ">
                                      ({item.Prices[0].Price[0].Discount}% off)
                                    </span>
                                  )}
                                </div>

                                <span className="text-base font-black text-primary font-semibold">
                                  ₹ {item.Prices[0].Price[0].SalePrice}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="h-[40vh] flex justify-center items-center">
                <div className="text-center">
                  <p className="text-2xl text-(--primaryColor) mb-2">
                    No Product Found
                  </p>
                  <p className="text-center">
                    It looks like there are no products here right now. <br />{" "}
                    Don’t worry—try a different search or browse other
                    collections to find something you love.
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="h-[40vh] flex justify-center items-center">
              <div className="text-center">
                <p className="text-xl text-(--primaryColor) mb-2">
                  Searching Products...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
