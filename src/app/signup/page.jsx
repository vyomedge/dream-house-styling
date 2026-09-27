"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { createClient } from "@/lib/supabase/client";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      phone: "+91",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const supabase = createClient();

      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            username: data.username,
            full_name: data.fullname,
            phone: data.phone.replace(/\s/g, ""),
            user_type: "Customer",
          },
        },
      });

      if (error) {
        if (error.message?.toLowerCase().includes("already registered")) {
          toast.error("This email is already registered.");
        } else {
          toast.error(error.message || "Unable to create account.");
        }

        setLoading(false);
        return;
      }

      if (authData.user) {
        const { error: profileError } = await supabase
          .from("profiles")
          .upsert({
            id: authData.user.id,
            full_name: data.fullname,
            role: "customer",
          });

        if (profileError) {
          console.error("Profile creation error:", profileError);
        }
      }

      toast.success("Account created successfully.");

      reset();

      router.push("/login");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
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
            <div className="mb-10">
              <h3 className="font-dm responsiveheading3 text-[#cd6632] font-bold uppercase tracking-tight mb-2">
                Create Account
              </h3>

              <p className="font-dm text-black responsive-text">
                Become part of the most exclusive wallpaper gallery.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Username
                </label>

                <input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none"
                  placeholder="Create a username"
                  type="text"
                />

                {errors.username && (
                  <p className="font-dm text-red-400 text-xs mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Full Name
                </label>

                <input
                  {...register("fullname", {
                    required: "Name is required",
                  })}
                  className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none"
                  placeholder="Enter your full name"
                  type="text"
                />

                {errors.fullname && (
                  <p className="font-dm text-red-400 text-xs mt-1">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div>
                <label className="font-dm block text-[10px] uppercase tracking-[0.2em] font-bold text-(--primaryColor) mb-2 px-1">
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none"
                  placeholder="yourmail@gmail.com"
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
                  Phone Number
                </label>

                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    validate: (value) =>
                      matchIsValidTel(value) || "Enter a valid mobile number",
                  }}
                  render={({ field }) => (
                    <MuiTelInput
                      {...field}
                      defaultCountry="in"
                      variant="outlined"
                      fullWidth
                      disableDropdown={false}
                      placeholder="Enter phone number"
                      className="font-dm"
                      inputProps={{
                        className:
                          "w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none",
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#cd6632",
                            borderRadius: "8px",
                          },
                          "&:hover fieldset": {
                            borderColor: "#cd6632",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#cd6632",
                            borderWidth: "1px",
                          },
                        },
                      }}
                    />
                  )}
                />

                {errors.phone && (
                  <p className="font-dm text-red-400 text-xs mt-1">
                    {errors.phone.message}
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
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none"
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

              <button
                className="font-dm w-full bg-[#cd6632] hover:bg-[#cd6632]/80 mt-4 cursor-pointer text-deep-charcoal font-black uppercase tracking-widest text-sm py-5 rounded-lg transition-all shadow-lg shadow-cyan-blue/10 active:scale-[0.98] disabled:opacity-60"
                type="submit"
                disabled={Loading}
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
    </div>
  );
};

export default SignUp;
