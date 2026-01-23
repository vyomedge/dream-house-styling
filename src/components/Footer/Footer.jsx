import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="custom-container relative w-full overflow-hidden text-white/80">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-alt="Dark dramatic floral wallpaper pattern with deep reds and purples"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq6of0mqRU2evYFSn3lmP5Hk4UsxnX32IAC_nnWcOcKcT8FO3Ac7HDlsd8mZe0DGvc_9N6nDXp-sd2iGFFjm0ppeSNeIQzjo95Rsi0oYvI_CtmuBVbIAyHrsOqQbLuJ9nZ8JiczAPqwviEu_B6g_kRm3F4lwtYRQhG4shjqLNCHleoCux3TGfA61EiU2-xxKLl423LWT3npJwMKMjJ5HlrGEH8qKRzRUwJ1Xx77IrNsRjANMCm2eqw31GI_HqSf-TgCHH7YxfHapk')`,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
                        to top,
                        rgba(16, 29, 34, 1),
                        rgba(16, 29, 34, 0.95),
                        rgba(16, 29, 34, 0.9)
                        )`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
          <div className="glass2 p-12 rounded-2xl max-w-4xl mx-auto mb-32 text-center border border-white/20">
            <h4 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">
              Join the Aesthetic Circle
            </h4>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Get early access to limited edition drops and interior design tips
              from our curators.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                className="flex-1 bg-white/10 border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/30 focus:ring-primary focus:border-primary"
                placeholder="Your aesthetic email..."
                type="email"
              />
              <button className="bg-primaryColor hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-all">
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 text-white mb-6">
                <Link href="/">
                  <div className="relative w-[100px] md:w-[100px] h-[150px]  md:h-[127px] mb-2 sm:mb-4 ">
                    <Image
                      src="/images/logo.png"
                      alt="DHS Logo"
                      fill
                      className=" object-contain"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-sm leading-relaxed mb-6 italic">
                "Redefining vertical surfaces with a blend of haute couture and
                home comfort since 2012."
              </p>
              <div className="flex gap-4">
                <a
                  className="text-gold hover:text-white transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a
                  className="text-gold hover:text-white transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </a>
                <a
                  className="text-gold hover:text-white transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                Collection
              </h5>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Modern Geometric
                  </a>
                </li>
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Floral &amp; Organic
                  </a>
                </li>
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Industrial Textures
                  </a>
                </li>
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Bespoke Murals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                Support
              </h5>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Installation Guide
                  </a>
                </li>
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Sample Request
                  </a>
                </li>
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Shipping &amp; Returns
                  </a>
                </li>
                <li>
                  <a
                    className="text-gold hover:text-white transition-colors"
                    href="#"
                  >
                    Trade Program
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
                Contact
              </h5>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-gold text-sm">
                    location_on
                  </span>
                  <span>
                    42 Artisan Lane, Design District
                    <br />
                    Milan, IT 20121
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-gold text-sm">
                    mail
                  </span>
                  <span className="text-gold">atelier@luxewalls.design</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
            <p>© 2024 LUXE WALLS EXPERIENCE. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a className="hover:text-gold" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-gold" href="#">
                Terms of Art
              </a>
              <a className="hover:text-gold" href="#">
                Sustainability
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
