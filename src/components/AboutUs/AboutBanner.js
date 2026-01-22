import Image from "next/image";

export default function AboutBanner() {
  return (
    <section className="relative mn-h-[100vh] md:min-h-[90vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/aboutbanner.png"
        alt="Wallpaper background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/25"></div>
      <div className="custom-container relative z-10 text-center px-6 max-w-4xl">
        <span className="inline-block mb-5 px-4 py-1 rounded-full text-xs tracking-widest uppercase text-[#00D4C8] border border-cyan-400/40 bg-cyan-400/10">{` Our Essence`}</span>
        <h1 className="responsive-heading  font-bold leading-tight text-white">{` Crafting Homes`}{" "} <span className="block text-[#00D4C8]"> {`with Style & Comfort`}</span> </h1>
        <p className="mt-6 text-gray-200 text-base responsive-text ">{` At Dream Home Styling, we believe every home deserves a personality.`}</p>
        <p className="mt-1 text-gray-200 text-base responsive-text"> {` More than just décor products, we create customized interior solutions that bring warmth, balance, and elegance to your living and working spaces.`}</p>
        <p className="mt-1 text-gray-200 text-base responsive-text"> {`From premium wallpapers to designer curtains, blinds, upholstery, and carpets, our collections are designed to complement modern lifestyles while reflecting your unique taste.`}</p>
        <p className="mt-1 text-gray-200 text-base responsive-text"> {`We don’t just decorate spaces — we style homes.`}</p>

      </div>
    </section>
  );
}
