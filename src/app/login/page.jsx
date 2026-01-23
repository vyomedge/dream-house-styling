"use client";
import OtpModal from "@/components/OTP/OtpModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const cookies = new Cookies();
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/UserPanel/Login/`,
        data,
      );

      if (response.status === 200) {
        // setShowOtpModal(true);
        toast.success("Logged In Successfully..");
        let date = new Date();
        date.setTime(date.getTime() + 60 * 60 * 8000);
        cookies.set("Access_Token", response.data.tokens.access, {
          expires: date,
        });
        router.push("/");
      }
    } catch (error) {
      setLoading(false);
      const err = error?.response?.data;
      console.log("error", error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
      if (err?.non_field_errors) {
        setError("email", {
          type: "custom",
          message: err.non_field_errors[0],
        });
      }

      if (err?.error === "Password not Match") {
        setError("password", {
          type: "custom",
          message: "Password does not match",
        });
      }

      if (err?.error === "User Not Found") {
        setError("email", {
          type: "custom",
          message: "This email is not registered",
        });
      }
    }
  };

  return (
    <>
      <div className="relative">
        <div className="absolute flex h-screen w-full">
          <div className="hidden lg:block w-1/2 relative h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACFNaGCRbsuuwYfb6uLwGNa0iiZJ8-ffawktBwFeE-Yn4S1VYaC56cDJEuXtn8FkDdXdtxO-bsrMow7s2IzXRvzYWqLrc7KSaCuN9H6Fu3qdBFwPR97yr6CfgIiQx2Yi1s5WWum949FGvNE3MPbNigA0E98u7MB8I8v8rttTKYgmZkCwPf4NrvPJTW_ar2iSVbOtOTPE1UaSxFFLkINFaylpDZMlL88GVXsj6zjkZZWWlLRt-Mts5Sve2H1QfjVghpYjLtEEtUZrk')",
              }}
            />
          </div>

          <div className="w-full lg:w-1/2 bg-deep-charcoal flex items-center justify-center p-8 md:p-16 relative">
            <div className="w-full max-w-md">
              <div className="mb-12">
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">
                  Welcome Back
                </h3>
                <p className="text-white/40 text-sm">
                  Please enter your details to access your account.
                </p>
              </div>

              {/* 🔴 FORM */}
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* EMAIL */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/20 focus:ring-primary focus:border-primary input-glow transition-all outline-none"
                    placeholder="name@aesthetic.com"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white placeholder:text-white/20 focus:ring-primary focus:border-primary input-glow transition-all outline-none"
                      placeholder="••••••••"
                      type={showPass ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                      onClick={() => setShowPass(!showPass)}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {showPass ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-[#00D4C8] hover:bg-[#00D4C8]/80 cursor-pointer text-white font-black uppercase tracking-widest text-sm py-5 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                >
                  {Loading ? "Verifying..." : "Sign In"}
                </button>
              </form>

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
          </div>
        </div>

        {showOtpModal && <OtpModal modalClose={() => setShowOtpModal(false)} />}
      </div>
    </>
  );
};

export default Login;
