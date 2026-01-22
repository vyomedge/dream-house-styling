"use client";
import OtpModal from "@/components/OTP/OtpModal";
import { useState } from "react";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  return (
    <>
      <div className="relative">
        <div className="absolute flex h-screen w-full">
          <div className="hidden lg:block w-1/2 relative h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Luxurious room with artistic wallpaper"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACFNaGCRbsuuwYfb6uLwGNa0iiZJ8-ffawktBwFeE-Yn4S1VYaC56cDJEuXtn8FkDdXdtxO-bsrMow7s2IzXRvzYWqLrc7KSaCuN9H6Fu3qdBFwPR97yr6CfgIiQx2Yi1s5WWum949FGvNE3MPbNigA0E98u7MB8I8v8rttTKYgmZkCwPf4NrvPJTW_ar2iSVbOtOTPE1UaSxFFLkINFaylpDZMlL88GVXsj6zjkZZWWlLRt-Mts5Sve2H1QfjVghpYjLtEEtUZrk')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-deep-charcoal/40"></div>
            <div className="absolute top-12 left-12 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">
                grid_view
              </span>
              <h1 className="text-2xl font-black tracking-tighter uppercase">
                DREAM HOUSE STYLING
              </h1>
            </div>
            <div className="absolute bottom-16 left-12 max-w-md">
              <h2 className="text-4xl font-bold mb-4 leading-tight uppercase tracking-tight">
                The Art of{" "}
                <span className="italic text-(--primaryColor)">Living</span>
              </h2>
              <p className="text-deep-charcoal/70 text-sm leading-relaxed tracking-wide font-medium">
                Enter your private gallery and curate your world with our
                exclusive textile and paper collections.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-deep-charcoal flex items-center justify-center p-8 md:p-16 relative">
            <div className="absolute top-8 left-8 lg:hidden flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">
                grid_view
              </span>
              <span className="font-black uppercase tracking-tighter">
                Luxe Walls
              </span>
            </div>
            <div className="w-full max-w-md">
              <div className="mb-12">
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">
                  Welcome Back
                </h3>
                <p className="text-white/40 text-sm">
                  Please enter your details to access your account.
                </p>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/20 focus:ring-primary focus:border-primary input-glow transition-all outline-none"
                    placeholder="name@aesthetic.com"
                    type="email"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2 px-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor)">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/20 focus:ring-primary focus:border-primary input-glow transition-all outline-none"
                      placeholder="••••••••"
                      type={showPass ? "text" : "password"}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white cursor-pointer"
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {showPass ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  <div className="flex justify-end items-right mt-2 px-1">
                    <a
                      className="text-[10px] uppercase tracking-[0.1em] font-bold  hover:text-(--primaryColor) transition-colors"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                {/* <div className="flex items-center gap-3 py-2">
              <input
                className="w-4 h-4 rounded border-white/10 bg-white/5 text-primary focus:ring-primary focus:ring-offset-background-dark"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-xs text-white/40 font-medium cursor-pointer select-none"
                for="remember"
              >
                Stay logged in for 30 days
              </label>
            </div> */}
                <button
                  onClick={() => setShowOtpModal(!showOtpModal)}
                  type="button"
                  className="w-full bg-[#00D4C8] hover:bg-[#00D4C8]/80 cursor-pointer text-white font-black uppercase tracking-widest text-sm py-5 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                >
                  Sign In
                </button>
              </form>
              {/* <div className="mt-10">
            <div className="relative flex items-center justify-center mb-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5"></div>
              </div>
              <span className="relative bg-deep-charcoal px-4 text-[10px] uppercase tracking-widest text-white/30 font-bold">
                Or continue with
              </span>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 rounded-lg py-3 hover:bg-white/5 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.90 3.16-1.84 4.12-1.16 1.16-2.92 2.04-5.64 2.04-4.88 0-8.76-3.96-8.76-8.84s3.88-8.84 8.76-8.84c2.64 0 4.6 1.04 6 2.36l2.32-2.32C19.16 1.16 16.32 0 12.48 0 5.6 0 0 5.6 0 12.48S5.6 24.96 12.48 24.96c3.68 0 6.48-1.2 8.64-3.48 2.24-2.24 2.96-5.44 2.96-8.04 0-.52-.04-1.04-.12-1.52H12.48z"
                    fill="#EA4335"
                  ></path>
                </svg>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 rounded-lg py-3 hover:bg-white/5 transition-all">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.96.95-2.06 1.92-3.37 1.92-1.27 0-1.7-.77-3.18-.77-1.47 0-1.95.74-3.18.77-1.25.03-2.52-1.15-3.48-2.1C1.88 18.15.38 14.54.38 11.23c0-3.33 2.15-5.1 4.22-5.1 1.08 0 2.1.75 2.77.75.65 0 1.83-.88 3.1-.88 1.32 0 2.5.5 3.3.8-.3 4.1 3.53 5.48 3.55 5.5-.02.05-.55 1.9-1.85 3.82l1.58 4.16zM13.25 3.9c0-1.06-.88-2.12-1.9-2.12-.1 0-.2.02-.3.04.1 2.22 2.35 4.3 2.35 4.3s-.15-2.22-.15-2.22z"></path>
                </svg>
              </button>
            </div>
          </div> */}
              <div className="mt-16 text-center">
                <p className="text-sm text-white/40 font-medium">
                  Don't have an account?
                  <a
                    className="text-white hover:text-(--primaryColor) transition-colors font-bold ml-1 border-b border-white/20 hover:border-primary pb-0.5"
                    href="/signup"
                  >
                    Sign Up
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
        {showOtpModal && <OtpModal modalClose={() => setShowOtpModal(false)} />}
      </div>
    </>
  );
};

export default Login;
