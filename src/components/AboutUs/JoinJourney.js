import Image from "next/image";

export default function JoinJourney() {
  return (
    <section className="custom-container py-20 px-6">
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl">
        <Image
          src="/colours.jpg"
          alt="Creative background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 px-6 py-20 text-center text-white">
          <h2 className="responsiveheading2 font-semibold"> {`READY TO STYLE YOUR SPACE?`}</h2>
          <p className="responsive-text mt-4 max-w-xl mx-auto text-gray-200 text-sm md:text-base">
            {` Whether you’re refreshing a single room or designing an entire home or office, Dream Home Styling is here to guide you every step of the way.`} </p>
          <p className="responsive-text mt-4 max-w-xl mx-auto text-gray-200 text-sm md:text-base">
            {`Explore our collections or connect with our team for customized home décor and interior design services in Bhopal.`} </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="rounded-lg bg-[#00D4C8] px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-cyan-500 transition">
              {` Explore Collections`}
            </button>

            <button className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-[#00D4C8] transition">
              {` Book Free Consultation`}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

