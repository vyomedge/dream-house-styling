import Link from "next/link";
import React from "react";

const products = [
  {
    title: "Midnight Flora",
    subtitle: "Deep Botanical • $125.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDddcDj73KuwXyb7KKAnTSyl34IzI47kZA_b4LQzdGYTa5SnPL78XZbwMJY-g1nMloSV9yV3wSWOZxnOT-6uXssvnLq1ix81sWXMqAG3kNwdojVo_p0sc6H3Izg5f-hMSJ3bQYk6dZsvUOEbgBGLsB8sh_IDACh7UjcNMS_yWhZ1MtsBskUyr0dkgCWGUiX1jY3wY0rlV4Y7ln02ScJ_Akf_3s2InCAVmoFDMK94UntSnLTN-okxr7LZ0Y5McQZo-uKqpedJutevys",
  },
  {
    title: "Geometric Azure",
    subtitle: "Modern Art • $145.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvbQounX5xGGIPIn-bIeqIpMA-aQrtKQWoQD6rH1vDJk6OWEDLoPDQLS6Gz4RQ-XR11dMTftViB3a_wM-xIjNguNeK2A3pc3oTjYAvCG45YaHPGSvbEYwzOCse8Ek2q5kjDDP6SVRHWca2VfVVW8MzZcIlTBSy3gl2R6jpw4tlUhgeXMxjHlRYQBvocl1eeKdHg7IATr2G4eZX7OqPzbQVJ0uEYzNkELsDveGEiBzedDEdYY9VJ7u5CsMFKtxubkRylygoc2wDL2s",
  },
  {
    title: "Obsidian Slate",
    subtitle: "Natural Stone • $110.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClEPoN6J-K9nijCKXwQRR1OUHUkuThbfVRu-Nw9hy0veNxuwopJQTogAU01SaC6LDuPv5Nkcaenk7YEuAxgpnT0_wya49gzT1-pWtMLQ6XQMVnubOHqn7b-L6qTz7UC-opUkWeAxR-xFTVjmGlqt0am6YSMwnbppJS8eV1tVGBUVHGIH5g3RD_J791kuZ-KzvhHhiU94g9LAeeaTXw__nx3vHYKXk47eX_YajvZS9jscLM4O1naMzF3FGR_4V2gtc8VVaEOTcahxg",
  },
  {
    title: "Ivory Silk",
    subtitle: "Textured Minimalist • $135.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBq6of0mqRU2evYFSn3lmP5Hk4UsxnX32IAC_nnWcOcKcT8FO3Ac7HDlsd8mZe0DGvc_9N6nDXp-sd2iGFFjm0ppeSNeIQzjo95Rsi0oYvI_CtmuBVbIAyHrsOqQbLuJ9nZ8JiczAPqwviEu_B6g_kRm3F4lwtYRQhG4shjqLNCHleoCux3TGfA61EiU2-xxKLl423LWT3npJwMKMjJ5HlrGEH8qKRzRUwJ1Xx77IrNsRjANMCm2eqw31GI_HqSf-TgCHH7YxfHapk",
  },
];

const EmptyCartPage = () => {
  return (
    <main>
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Minimalist empty room"
            className="w-full h-full object-cover opacity-40 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDddcDj73KuwXyb7KKAnTSyl34IzI47kZA_b4LQzdGYTa5SnPL78XZbwMJY-g1nMloSV9yV3wSWOZxnOT-6uXssvnLq1ix81sWXMqAG3kNwdojVo_p0sc6H3Izg5f-hMSJ3bQYk6dZsvUOEbgBGLsB8sh_IDACh7UjcNMS_yWhZ1MtsBskUyr0dkgCWGUiX1jY3wY0rlV4Y7ln02ScJ_Akf_3s2InCAVmoFDMK94UntSnLTN-okxr7LZ0Y5McQZo-uKqpedJutevys"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10, 18, 21, 0.2) 0%, rgba(18, 29, 33, 1) 100%)",
            }}
          ></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <span className="font-dm material-symbols-outlined text-primary text-6xl mb-8 block opacity-50">
            shopping_cart_off
          </span>
          <h1 className="font-dm  responsive-heading font-black uppercase tracking-tighter mb-6 leading-none">
            Your Selection is Empty
          </h1>
          <p className="font-dm text-white/60 text-lg md:text-xl font-light mb-12 tracking-wide">
            It looks like you haven't discovered your perfect wall yet. Let us
            help you find the texture for your next vision.
          </p>
          <Link
            className=" font-dm inline-block bg-[#cd6632] hover:bg-[#cd6632]/80 text-white font-black px-12 py-5 rounded-full uppercase tracking-[0.2em] text-sm transition-all shadow-xl shadow-primary/20"
            href="/"
          >
            Start Browsing
          </Link>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h3 className="font-dm responsiveheading3 text-[#cd6632] uppercase tracking-tighter">
              Curated Picks
            </h3>
            <p className="font-dm responsive-text text-gray-500 uppercase tracking-[0.3em] text-[10px] mt-2 font-bold">
              Recommended for your refined taste
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-[#cd6632] mx-12 hidden md:block"></div>
          <a
            className="font-dm text-[10px] font-bold uppercase tracking-widest text-[#cd6632] hover:text-[#cd6632]/80 transition-colors"
            href="#"
          >
            View All Collections
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-white/5 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="font-dm flex cursor-pointer bg-[#cd6632] hover:bg-[#cd6632]/80 p-3 rounded-full  transition-colors">
                    <span className="font-dm material-symbols-outlined">
                      shopping_cart
                    </span>
                  </button>
                </div>
              </div>

              <h4 className="font-dm responsiveheading6 font-bold uppercase tracking-widest text-sm text-[#cd6632]">
                {item.title}
              </h4>
              <p className="font-dm text-gray-600 responsive-text mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default EmptyCartPage;
