"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/Context/AuthContext";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [Loading, setLoading] = useState(false);
  const { fetchUserData } = useAuth();
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
      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        if (
          error.message?.toLowerCase().includes("invalid login credentials")
        ) {
          setError("email", {
            type: "custom",
            message: "Email or password is incorrect",
          });
        } else {
          toast.error(error.message || "Unable to sign in");
        }

        setLoading(false);
        return;
      }

      await fetchUserData();

      toast.success("Logged In Successfully");
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
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
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACFNaGCRbsuuwYfb6uLwGNa0iiZJ8-ffawktBwFeE-Yn4S1VYaC56cDJEuXtn8FkDdXtxO-bsrMow7s2IzXRvzYWqLrc7KSaCuN9H6Fu3qdBFwPR97yr6CfgIiQx2Yi1s5WWum949FGvNE3MPbNigA0E98u7MB8I8v8rttTKYgmZkCwPf4NrvPJTW_ar2iSVbOtOTPE1UaSxFFLkINFaylpDZMlL88GVXsj6zjkZZWWlLRt-Mts5Sve2H1QfjVghpYjLtEEtUZrk')",
              }}
            />
          </div>

          <div className="w-full lg:w-1/2 bg-deep-charcoal flex items-center justify-center p-8 md:p-16 relative">
            <div className="w-full max-w-md">
              <div className="mb-12">
                <h3 className="font-dm responsiveheading3 font-bold uppercase tracking-tight mb-2 text-[#cd6632]">
                  Welcome Back
                </h3>
                <p className="font-dm text-black responsive-text">
                  Please enter your details to access your account.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                    Email Address
                  </label>

                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none"
                    placeholder="name@aesthetic.com"
                    type="email"
                  />

                  {errors.email && (
                    <p className="font-dm text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none"
                      placeholder="••••••••"
                      type={showPass ? "text" : "password"}
                    />

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                      onClick={() => setShowPass(!showPass)}
                    >
                      <span className="material-symbols-outlined text-xl">
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

                <button
                  type="submit"
                  disabled={Loading}
                  className="font-dm w-full bg-[#cd6632] cursor-pointer hover:bg-[#cd6632]/80 text-white font-black uppercase tracking-widest text-sm py-5 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98] disabled:opacity-60"
                >
                  {Loading ? "Verifying..." : "Sign In"}
                </button>
              </form>

              <div className="mt-16 text-center">
                <p className="font-dm text-sm text-gray-600 font-medium">
                  Don't have an account?
                  <a
                    className="font-dm text-(--primaryColor) transition-colors font-bold ml-1 border-b border-white/20 hover:border-primary pb-0.5"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
