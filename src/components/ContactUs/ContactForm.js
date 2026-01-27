"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm({ hide }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
    setServerError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSuccess(true);
      reset();
    } catch (error) {
      console.error("Form submit error:", error);
      setServerError("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="mx-w-[600px] mx-auto border-1 border-white p-6 rounded-lg">
      <h5 className="responsiveheading5 font-bold text-gray-500 mb-1">{`Send Us a Message`}</h5>
      <p className="responsive-text text-gray-400 mb-6">{`Please fill in the form below and our team will get in touch within 24 hours.`}</p>
      {success && (
        <p className="responsive-text text-green-600 mb-4">{`Your message has been sent successfully!`}</p>
      )}

      {serverError && (
        <p className="responsive-text text-red-600 mb-4">{serverError}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block responsive-text mb-1">{`Full Name`}</label>
          <input
            type="text"
            placeholder="Full Name (required)"
            className="w-full rounded-md border border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
            {...register("fullName", {
              required: "Full name is required",
              minLength: { value: 2, message: "Name is too short" },
            })}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label className="block responsive-text mb-1">{`Email`}</label>
          <input
            type="email"
            placeholder="Email (required)"
            className="w-full rounded-md border border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block responsive-text mb-1">{`Phone`}</label>
          <input
            type="text"
            placeholder="Phone (required)"
            className="w-full rounded-md border border-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block responsive-text mb-1">{`Message`}</label>
          <textarea
            rows="3"
            placeholder="Message"
            className="w-full rounded-md border border-gray-500 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-[#1f3d2b]"
            {...register("message", {
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>
        <button type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#cd6632] hover:bg-[#cd6632]/80 text-white py-3 rounded-md  transition disabled:opacity-70">
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
}
