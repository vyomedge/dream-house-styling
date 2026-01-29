import React from "react";

const OtpModal = ({ modalClose, pageType = "signin" }) => {
  return (
    <>
      <div className="bg-background-dark h-screen w-full   flex justify-center items-center absolute z-50">
        <div className="relative inset-0 bg-pattern filter blur-xl scale-110 brightness-50"></div>
        <div className="fixed inset-0 bg-linear-to-tr from-charcoal-dark/90 via-transparent to-charcoal-dark/90"></div>
        <div className=" w-full max-w-lg px-6">
          <div className="glass-modal p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-(--primaryColor)/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-(--primaryColor)/10 blur-[80px] rounded-full"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-teal/10 border border-cyan-teal/20">
                <span className="material-symbols-outlined text-cyan-teal text-3xl">
                  lock_person
                </span>
              </div>
              <h2 className="font-dm text-3xl font-black uppercase tracking-tighter mb-2">
                Verify Your Account
              </h2>
              <p className="font-dm text-white/50 text-sm mb-10 max-w-[280px]">
                We've sent a 4-digit code to your email.
              </p>
              <div className="flex gap-4 mb-10">
                <input
                  autofocus=""
                  className=" font-dm w-16 h-16 rounded-full bg-charcoal-dark/50 border-2 border-white/10 text-center text-2xl font-bold transition-all duration-300  focus:outline-none focus:border-(--primaryColor) focus:bg-charcoal-dark focus:ring-0"
                  maxlength="1"
                  type="text"
                />
                <input
                  className=" font-dm w-16 h-16 rounded-full bg-charcoal-dark/50 border-2 border-white/10 text-center text-2xl font-bold transition-all duration-300  focus:outline-none focus:border-(--primaryColor) focus:bg-charcoal-dark focus:ring-0"
                  maxlength="1"
                  placeholder=""
                  type="text"
                />
                <input
                  className="font-dm w-16 h-16 rounded-full bg-charcoal-dark/50 border-2 border-white/10 text-center text-2xl font-bold transition-all duration-300
                  focus:outline-none focus:border-(--primaryColor) focus:bg-charcoal-dark focus:ring-0
                  "
                  maxlength="1"
                  placeholder=""
                  type="text"
                />
                <input
                  className=" font-dm w-16 h-16 rounded-full bg-charcoal-dark/50 border-2 border-white/10 text-center text-2xl font-bold transition-all duration-300  focus:outline-none focus:border-(--primaryColor) focus:bg-charcoal-dark focus:ring-0"
                  maxlength="1"
                  placeholder=""
                  type="text"
                />
              </div>
              <button className="font-dm w-full py-3  bg-[#00D4C8] hover:bg-[#00D4C8]/80 cursor-pointer text-white font-bold rounded-full hover:shadow-[0_10px_30px_-5px_rgba(17,164,212,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 text-md tracking-wide uppercase">
                Complete Verification
              </button>
              <div className="mt-8">
                <p className="font-dm text-white/40 ">
                  Resend in <span className="text-(--primaryColor)">0:59</span>
                </p>
              </div>
              <button
                onClick={modalClose}
                className=" font-dm mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 hover:text-white transition-colors cursor-pointer"
              >
                Back to {pageType === "signin" ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpModal;
