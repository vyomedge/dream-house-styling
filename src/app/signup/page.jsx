"use client";
import OtpModal from "@/components/OTP/OtpModal";
import React, { useState } from "react";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  return (
    <div className="relative">
      <div className="absolute flex h-screen w-full">
        <div className="hidden lg:block w-1/2 relative h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACFNaGCRbsuuwYfb6uLwGNa0iiZJ8-ffawktBwFeE-Yn4S1VYaC56cDJEuXtn8FkDdXdtxO-bsrMow7s2IzXRvzYWqLrc7KSaCuN9H6Fu3qdBFwPR97yr6CfgIiQx2Yi1s5WWum949FGvNE3MPbNigA0E98u7MB8I8v8rttTKYgmZkCwPf4NrvPJTW_ar2iSVbOtOTPE1UaSxFFLkINFaylpDZMlL88GVXsj6zjkZZWWlLRt-Mts5Sve2H1QfjVghpYjLtEEtUZrk')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-deep-charcoal/40"></div>
          <div className="absolute top-12 left-12 flex items-center gap-3">
            <span className="material-symbols-outlined text-cyan-blue text-4xl">
              grid_view
            </span>
            <h1 className="text-2xl font-black tracking-tighter uppercase text-deep-charcoal">
              DREAM HOUSE STYLING
            </h1>
          </div>
          <div className="absolute bottom-16 left-12 max-w-md">
            <h2 className="text-4xl font-bold mb-4 leading-tight uppercase tracking-tight text-deep-charcoal">
              The Art of{" "}
              <span className="italic text-(--primaryColor)">Living</span>
            </h2>
            <p className="text-deep-charcoal/70 text-sm leading-relaxed tracking-wide font-medium">
              Join our curated collective and transform your space into a
              masterpiece of contemporary design.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-deep-charcoal flex items-center justify-center p-8 md:p-16 relative">
          <div className="absolute top-8 left-8 lg:hidden flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-blue text-2xl">
              grid_view
            </span>
            <span className="font-black uppercase tracking-tighter">
              Luxe Walls
            </span>
          </div>
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">
                Create Account
              </h3>
              <p className="text-white/40 text-sm">
                Become part of the most exclusive wallpaper gallery.
              </p>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Full Name
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/20 focus:ring-cyan-blue focus:border-cyan-blue input-glow transition-all outline-none"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Email Address
                </label>
                <input
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/20 focus:ring-cyan-blue focus:border-cyan-blue input-glow transition-all outline-none"
                  placeholder="yourmail@gmail.com"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/20 focus:ring-cyan-blue focus:border-cyan-blue input-glow transition-all outline-none"
                    placeholder="••••••••"
                    type={showPass ? "text" : "password"}
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined text-xl cursor-pointer"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>
              {/* <div className="flex items-center gap-3 py-2">
              <input
                className="w-5 h-5 rounded border-white/10 bg-white/5 text-cyan-blue focus:ring-cyan-blue focus:ring-offset-deep-charcoal cursor-pointer"
                id="newsletter"
                type="checkbox"
              />
              <label
                className="text-xs text-white/60 font-medium cursor-pointer select-none"
                for="newsletter"
              >
                Join our exclusive newsletter for early access
              </label>
            </div> */}
              <button
                onClick={() => setShowOtpModal(!showOtpModal)}
                className="w-full bg-[#00D4C8] hover:bg-[#00D4C8]/80 mt-4 cursor-pointer text-deep-charcoal font-black uppercase tracking-widest text-sm py-5 rounded-lg transition-all shadow-lg shadow-cyan-blue/10 active:scale-[0.98]"
                type="button"
              >
                Create Account
              </button>
            </form>
            {/* <div className="mt-8">
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <span className="relative bg-deep-charcoal px-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
                Or sign up with
              </span>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 rounded-lg py-3 hover:bg-white/5 transition-all group">
                <svg
                  className="w-5 h-5 opacity-60 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.90 3.16-1.84 4.12-1.16 1.16-2.92 2.04-5.64 2.04-4.88 0-8.76-3.96-8.76-8.84s3.88-8.84 8.76-8.84c2.64 0 4.6 1.04 6 2.36l2.32-2.32C19.16 1.16 16.32 0 12.48 0 5.6 0 0 5.6 0 12.48S5.6 24.96 12.48 24.96c3.68 0 6.48-1.2 8.64-3.48 2.24-2.24 2.96-5.44 2.96-8.04 0-.52-.04-1.04-.12-1.52H12.48z"
                    fill="#FFF"
                  ></path>
                </svg>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 rounded-lg py-3 hover:bg-white/5 transition-all group">
                <svg
                  className="w-5 h-5 opacity-60 group-hover:opacity-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.96.95-2.06 1.92-3.37 1.92-1.27 0-1.7-.77-3.18-.77-1.47 0-1.95.74-3.18.77-1.25.03-2.52-1.15-3.48-2.1C1.88 18.15.38 14.54.38 11.23c0-3.33 2.15-5.1 4.22-5.1 1.08 0 2.1.75 2.77.75.65 0 1.83-.88 3.1-.88 1.32 0 2.5.5 3.3.8-.3 4.1 3.53 5.48 3.55 5.5-.02.05-.55 1.9-1.85 3.82l1.58 4.16zM13.25 3.9c0-1.06-.88-2.12-1.9-2.12-.1 0-.2.02-.3.04.1 2.22 2.35 4.3 2.35 4.3s-.15-2.22-.15-2.22z"></path>
                </svg>
              </button>
            </div>
          </div> */}
            <div className="mt-12 text-center">
              <p className="text-sm text-white/40 font-medium">
                Already have an account?
                <a
                  className="text-white hover:text-(--primaryColor) transition-colors font-bold ml-1 border-b border-white/20 hover:border-cyan-blue pb-0.5"
                  href="/login"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
          {/* <div className="absolute bottom-8 flex gap-6 text-[9px] uppercase tracking-widest font-bold text-white/20">
          <a className="hover:text-white transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Terms
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Sustainability
          </a>
        </div> */}
        </div>
      </div>
      {showOtpModal && (
        <OtpModal
          modalClose={() => setShowOtpModal(false)}
          pageType={"signup"}
        />
      )}
    </div>
  );
};

export default SignUp;
