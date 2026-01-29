"use client";
import OtpModal from "@/components/OTP/OtpModal";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const router = useRouter();
  const [Loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const Details = {
      email: data.email,
      password: data.password,
      username: data.username,
      user_type: "Customer",
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/RegisterAPI/`,
        Details,
      )
      .then(() => {
        toast.success("User Register Successfully..");
        // setShowOtpModal(true);
        router.push("/login");
        reset();
      })
      .catch((error) => {
        toast.error("Somethin Went Wrong");
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="relative">
      <div className="absolute flex h-screen w-full">
        {/* LEFT IMAGE SECTION — unchanged */}
        <div className="hidden lg:block w-1/2 relative h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACFNaGCRbsuuwYfb6uLwGNa0iiZJ8-ffawktBwFeE-Yn4S1VYaC56cDJEuXtn8FkDdXdtxO-bsrMow7s2IzXRvzYWqLrc7KSaCuN9H6Fu3qdBFwPR97yr6CfgIiQx2Yi1s5WWum949FGvNE3MPbNigA0E98u7MB8I8v8rttTKYgmZkCwPf4NrvPJTW_ar2iSVbOtOTPE1UaSxFFLkINFaylpDZMlL88GVXsj6zjkZZWWlLRt-Mts5Sve2H1QfjVghpYjLtEEtUZrk')",
            }}
          />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full lg:w-1/2 bg-deep-charcoal flex items-center justify-center p-8 md:p-16 relative">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h3 className="font-dm responsiveheading3 text-[#cd6632] font-bold uppercase tracking-tight mb-2">
                Create Account
              </h3>
              <p className="font-dm text-black responsive-text">
                Become part of the most exclusive wallpaper gallery.
              </p>
            </div>

            {/* 🔴 FORM */}
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              {/* USERNAME */}
              <div>
                <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Username
                </label>
                <input
                  {...register("username", {
                    required: "Name is required",
                  })}
                  className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                  placeholder="Create a username"
                  type="text"
                />
                {errors.username && (
                  <p className="font-dm text-red-400 text-xs mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                  placeholder="yourmail@gmail.com"
                  type="email"
                />
                {errors.email && (
                  <p className="font-dm text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                    placeholder="••••••••"
                    type={showPass ? "text" : "password"}
                  />
                  <button
                    className="font-dm absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500"
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                  >
                    <span className="material-symbols-outlined text-xl cursor-pointer">
                      {showPass ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
                {errors.password && (
                  <p className="font-dm text-red-400 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* SUBMIT */}
              <button
                className="font-dm w-full bg-[#cd6632] hover:bg-[#cd6632]/80 mt-4 cursor-pointer text-deep-charcoal font-black uppercase tracking-widest text-sm py-5 rounded-lg transition-all shadow-lg shadow-cyan-blue/10 active:scale-[0.98]"
                type="submit"
              >
                {Loading ? "Creating..." : "Create Account"}
              </button>
            </form>

            <div className="mt-12 text-center">
              <p className="font-dm text-sm text-gray-600 font-medium">
                Already have an account?
                <a
                  className="font-dm text-blue-700 hover:text-(--primaryColor) transition-colors font-bold ml-1 border-b border-white/20 hover:border-cyan-blue pb-0.5"
                  href="/login"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showOtpModal && (
        <OtpModal modalClose={() => setShowOtpModal(false)} pageType="signup" />
      )}
    </div>
  );
};

export default SignUp;
