"use client";

import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import CategoryBanner from "./CategoryBanner";

export default function CustomQuoteForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        category: "",
        requirements: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Full name is required";
        if (!form.phone.trim())
            newErrors.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "")))
            newErrors.phone = "Enter a valid 10-digit phone number";

        if (form.email && !/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Enter a valid email address";

        if (!form.city.trim()) newErrors.city = "City is required";
        if (!form.category) newErrors.category = "Please select a category";
        if (!form.requirements.trim())
            newErrors.requirements = "Please describe your requirements";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Form Submitted:", form);
        // API call here
    };

    return (
        <>
            <CategoryBanner
                title="Request a Custom Quote"
                subtitle="Fill out the form below and our team will get back to you shortly"
            />

            <div className="custom-container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <form onSubmit={handleSubmit}
                        className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 md:p-8" >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="font-dm text-sm font-medium text-gray-700">
                                    {` Full Name `}<span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                                />
                                {errors.name && (
                                    <p className="font-dm text-xs text-red-500 mt-1">{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <label className="font-dm text-sm font-medium text-gray-700">
                                    {` Phone Number`} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                                />
                                {errors.phone && (
                                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                                )}
                            </div>
                            <div>
                                <label className="font-dm text-sm font-medium text-gray-700">
                                    {` Email`}
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                                />
                                {errors.email && (
                                    <p className="font-dm text-xs text-red-500 mt-1">{errors.email}</p>
                                )}
                            </div>
                            <div>
                                <label className="font-dm text-sm font-medium text-gray-700">
                                    {`  City `}<span className="text-red-500">*</span>
                                </label>
                                <input
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    placeholder="Bhopal"
                                    className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                                />
                                {errors.city && (
                                    <p className="font-dm text-xs text-red-500 mt-1">{errors.city}</p>
                                )}
                            </div>
                        </div>
                        <div className="mt-5">
                            <label className="font-dm text-sm font-medium text-gray-700">
                                {` Product Category `} <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="category"
                                value={form.category}
                                onChange={handleChange}
                                className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                            >
                                <option value="">{`Select a category`}</option>
                                <option>{`Wallpapers`}</option>
                                <option>{`Wall Panels`}</option>
                                <option>{`Custom Décor`}</option>
                            </select>
                            {errors.category && (
                                <p className="font-dm text-xs text-red-500 mt-1">{errors.category}</p>
                            )}
                        </div>
                        <div className="mt-5">
                            <label className="font-dm text-sm font-medium text-gray-700">
                                {`Your Requirements `} <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="requirements"
                                value={form.requirements}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Tell us about your requirements, preferred colors, room size, etc."
                                className="font-dm w-full bg-white/10 border border-[#cd6632] rounded-lg px-4 py-4 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-[#cd6632]/40 focus:border-[#cd6632] transition-all outline-none "
                            />
                            {errors.requirements && (
                                <p className="font-dm text-xs text-red-500 mt-1">{errors.requirements}</p>
                            )}
                        </div>

                        <div className="font-dm mt-4 rounded-md bg-[#cd6632]/20 px-4 py-3 text-sm text-gray-600">
                            <strong>{`Note : `}</strong>{` Our team will contact you within 24 hours to discuss your requirements and schedule a free consultation.`}
                        </div>

                        <button type="submit"
                            className="font-dm mt-6 w-full rounded-md bg-[#cd6632] py-3 text-sm font-medium text-white hover:bg-[#cd6632]/50 transition" >
                            {`Request Callback`}
                        </button>
                    </form>
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="font-dm responsiveheading3 font-semibold! text-gray-800 mb-4">{`Contact Information`}</h3>
                            <div className="space-y-4 text-sm text-gray-600">
                                <div className="flex gap-3 items-start">
                                    <FiPhone className="mt-1" />
                                    <div>
                                        <p className=" font-dm font-medium text-gray-800">{`Phone`}</p>
                                        <p className=" font-dm font-medium text-gray-600">{`+91 98765 43210`}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FiMail className="mt-1" />
                                    <div>
                                        <p className=" font-dm font-medium text-gray-800">{`Email`}</p>
                                        <p className=" font-dm font-medium text-gray-600">{`info@dreamhomestyling.in`}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <FiMapPin className="mt-1" />
                                    <div>
                                        <p className=" font-dm font-medium text-gray-800">{`Address`}</p>
                                        <p className=" font-dm font-medium text-gray-600">{` 123 MP Nagar, Bhopal `}<br />{` Madhya Pradesh 462011`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl bg-[#cd6632] p-6 text-white">
                            <h3 className="font-dm responsiveheading3 font-semibold! mb-2">{`Free Consultation`}</h3>
                            <p className="font-dm responsive-text opacity-90">{` Get expert advice on product selection, customization options,and pricing at no cost.`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
