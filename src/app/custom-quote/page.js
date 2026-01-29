"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function CustomQuoteForm() {
    return (
        <div className="custom-container mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="font-dm text-sm font-medium text-gray-700"> {`  Full Name `}<span className="text-red-500">*</span> </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 w-full rounded-md bg-[#f7f7e8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#8b7355]"
                            />
                        </div>
                        <div>
                            <label className="font-dm text-sm font-medium text-gray-700"> {` Phone Number`} <span className="text-red-500">*</span> </label>
                            <input
                                type="text"
                                placeholder="+91 98765 43210"
                                className="mt-1 w-full rounded-md bg-[#f7f7e8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#8b7355]"
                            />
                        </div>

                        <div>
                            <label className="font-dm text-sm font-medium text-gray-700"> {` Email`}</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="mt-1 w-full rounded-md bg-[#f7f7e8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#8b7355]"
                            />
                        </div>

                        <div>
                            <label className="font-dm text-sm font-medium text-gray-700"> {` City`} <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                placeholder="Bhopal"
                                className="mt-1 w-full rounded-md bg-[#f7f7e8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#8b7355]"
                            />
                        </div>
                    </div>

                    <div className="mt-5">
                        <label className="font-dm text-sm font-medium text-gray-700"> {` Product Category `}<span className="text-red-500">*</span> </label>
                        <select className="font-dm mt-1 w-full rounded-md bg-[#f7f7e8] px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#8b7355]">
                            <option>{`Select a category`}</option>
                            <option>{`Wallpapers`}</option>
                            <option>{`Wall Panels`}</option>
                            <option>{`Custom Décor<`}</option>
                        </select>
                    </div>

                    <div className="mt-5">
                        <label className="font-dm text-sm font-medium text-gray-700"> {` Your Requirements `}<span className="text-red-500">*</span> </label>
                        <textarea
                            rows="4"
                            placeholder="Tell us about your requirements, preferred colors, room size, etc."
                            className="mt-1 w-full rounded-md bg-[#f7f7e8] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#8b7355]"
                        />
                    </div>

                    <div className="mt-4 rounded-md bg-[#f7f7e8] px-4 py-3 text-sm text-gray-600">
                        <strong>{`Note : `}</strong> {`Our team will contact you within 24 hours to discuss your requirements and schedule a free consultation.`}
                    </div>

                    <button className="font-dm mt-6 w-full rounded-md bg-[#8b7355] py-3 text-sm font-medium text-white hover:bg-[#7a654c] transition">
                        {` Request Callback`}
                    </button>
                </div>

                {/* Right Info */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-dm text-lg font-semibold text-gray-800 mb-4">{` Contact Information`}</h3>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex gap-3 items-start">
                                <FiPhone className="mt-1 text-[#8b7355]" />
                                <div>
                                    <p className="font-dm font-medium text-gray-800">{`Phone`}</p>
                                    <p className="font-dm font">{`+91 98765 43210`}</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <FiMail className="mt-1 text-[#8b7355]" />
                                <div>
                                    <p className="font-dm font-medium text-gray-800">{`Email`}</p>
                                    <p className="font-dm font">{`info@dreamhomestyling.in`}</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <FiMapPin className="mt-1 text-[#8b7355]" />
                                <div>
                                    <p className="font-dm font-medium text-gray-800">{`Address`}</p>
                                    <p className="font-dm font"> {`123 MP Nagar, Bhopal,`} <br />{`Madhya Pradesh 462011`}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-[#8b7355] p-6 text-white">
                        <h3 className="font-dm text-lg font-semibold mb-2">{`Free Consultation`}</h3>
                        <p className="font-dm text-sm opacity-90">{`Get expert advice on product selection, customization options, and pricing at no cost.`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
