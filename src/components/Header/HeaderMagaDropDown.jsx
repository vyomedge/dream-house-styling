"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const rooms = [
  {
    title: "Living Room",
    description: "Bold statements for social spaces.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUysLIps5b1YijtlC8wkIyDeWOYITS9cJwqm3JSSXBo66gmrZoYL0Uf0EmLh0JoXW3YzcDGXkJcvxOVYGUTmKF_lOM4U2qYCjua0kz_7SctpRuJEo04PgU6w2fxanwjxjP4o4424Ccf0tr29XfqeV3ybgCyy4YZdwjqKqEEf5uL2WLfNnLDXv-FbcChECGu4Ll27Akz2LhMeUUl78dM7wiPxXWYgi09YYsv2TjhLS1dH_XSR2_AkTkYlbc80KmsrTPQ9xLF_5Xwg",
  },
  {
    title: "Bedroom",
    description: "Serene textures for restful nights.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACFNaGCRbsuuwYfb6uLwGNa0iiZJ8-ffawktBwFeE-Yn4S1VYaC56cDJEuXtn8FkDdXdtxO-bsrMow7s2IzXRvzYWqLrc7KSaCuN9H6Fu3qdBFwPR97yr6CfgIiQx2Yi1s5WWum949FGvNE3MPbNigA0E98u7MB8I8v8rttTKYgmZkCwPf4NrvPJTW_ar2iSVbOtOTPE1UaSxFFLkINFaylpDZMlL88GVXsj6zjkZZWWlLRt-Mts5Sve2H1QfjVghpYjLtEEtUZrk",
    hover: "group-hover/card:scale-110",
  },
  {
    title: "Nursery",
    description: "Gentle patterns for little ones.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0vXw4wJt7WP3l1kgHIHhxlQz22QVhEDnoxGYcoB1QG6FOW6rVuMdwgd-cQUVV8sHbZ-dnB-kj7xhZoyfGLw9Z0z3BjLh75vOJ1Qb5CK_3UR4Wk6H_28kkJPgdnLB13ZJLWHa96L8KC3OaSnrzXDj7_i2G4iNekW0oul4LYpJ5gh9OAaNDURCWTbqUyfMljczkfnjXDycJ9okg5xhYf7Jy8Vr_PfEuqdrq8lwtsGFMW0twSxTYSzJL2htBbYNcy6ig2UG70spaIdM",
  },
  {
    title: "Study",
    description: "Sophisticated tones for focus.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClEPoN6J-K9nijCKXwQRR1OUHUkuThbfVRu-Nw9hy0veNxuwopJQTogAU01SaC6LDuPv5Nkcaenk7YEuAxgpnT0_wya49gzT1-pWtMLQ6XQMVnubOHqn7b-L6qTz7UC-opUkWeAxR-xFTVjmGlqt0am6YSMwnbppJS8eV1tVGBUVHGIH5g3RD_J791kuZ-KzvhHhiU94g9LAeeaTXw__nx3vHYKXk47eX_YajvZS9jscLM4O1naMzF3FGR_4V2gtc8VVaEOTcahxg",
  },
  {
    title: "Kitchen",
    description: "Durable elegance for culinary hearts.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaRjBNps1PYUsZkYtbdAP92adYfUbrTdP_dXxe7T7RldoSWV5Z9LRwYuI3ASyQ5zhkvPmzopUoeGxWtUeqobxwPugacxRC5rLErXyo8pBVTfno4__jFdkZWBIjFknhqHSkO9IZIy7WTeUEpuqyIaVdjFAxQlqSXKsRx1LU7Elc_RC6XtYuhVZ_02YLtqY0Lr3uV4P-fPml9-Oyn-sp4ncl-5N-7VQ_IOSG3hPVn0H2tsWanfYKZpOa8ONBJ3iq3V5Bod-xCGdU8gQ",
  },
];

const HeaderMagaDropDown = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Get-Categories/`
        );

        setCategories(response.data || []);
      } catch (error) {
        console.error("Category fetch error:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mega-menu invisible opacity-0 absolute top-20 left-0 w-full glass transition-all duration-300 translate-y-2 group-hover:translate-y-0  border-t-0 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-5 gap-6 font-dm">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={`/category/${cat.slug}`}
              className="group/card block"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-4 border border-white/10 group-hover:border-primary/50 transition-colors">
                <div
                  className="w-full h-full bg-cover bg-center group-hover/card:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url("${cat?.image && cat.image.trim() !== ""
                        ? cat.image
                        : "/images/pattern-floral.jpg"
                      }")`,
                  }}
                />
              </div>

              <p className="font-dm text-sm font-bold uppercase tracking-wider group-hover:text-primary transition-colors">
                {cat.name}
              </p>

              <p className="font-dm text-[11px] text-gray-100 mt-1 leading-relaxed">
                {cat.description || "Explore curated designs & textures."}
              </p>
            </Link>
          ))}

        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
          <span className="font-dm text-[10px] tracking-[0.3em] uppercase text-gray-100">
            Curated by Interior Architects
          </span>
          <Link
            className="font-dm text-xs font-bold text-primary flex items-center gap-2 hover:gap-4 transition-all"
            href="/category"
          >
            View All Categories{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderMagaDropDown;
