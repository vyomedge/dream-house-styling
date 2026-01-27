export default function OurHeritage() {
  return (
    <div className="bg-[#FBC19A]">
      <section className="custom-container  py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div className="grid gap-6">
              <h2 className="responsiveheading2 font-semibold text-white">{`OUR HERITAGE`}</h2>
              <p className="responsive-text text-gray-500 leading-relaxed max-w-xl">{`Founded in 2020 by an experienced architect, Dream Home Styling (DHS) was created with a clear vision — to offer high-quality, customized home décor solutions in Bhopal that combine creativity with functionality.`}</p>
              <p className="responsive-text text-gray-500 leading-relaxed max-w-xl">{`What began as a design-focused studio has grown into a trusted home décor store in Bhopal, serving residential and commercial clients across Bhopal, Indore, and Madhya Pradesh.`}</p>
              <p className="responsive-text text-gray-500 leading-relaxed max-w-xl">{`While trends evolve, our foundation remains the same — attention to detail, quality craftsmanship, and personalized design.`}</p>
              <p className="responsive-text text-gray-500 leading-relaxed max-w-xl">{`Every wallpaper texture, fabric choice, and color palette is carefully curated to ensure your space feels thoughtful, refined, and timeless.`}</p>
              <div className="grid grid-cols-[auto_32px_auto] items-center mt-6 max-w-md">
                <div className="col-span-1">
                  <p className="responsive-text font-semibold text-[#cd6632]">{`5+`}</p>
                  <p className="text-sm tracking-widest text-gray-600 uppercase">{` Years of Design Expertise`}</p>
                </div>
                <div className="col-span-1 flex justify-center">
                  <div className="w-px h-14 bg-gray-300"></div>
                </div>
                <div className="col-span-1">
                  <p className="responsive-text font-semibold text-[#cd6632]">{`500+`}</p>
                  <p className="text-sm tracking-widest text-gray-600 uppercase">{`Customized Home Décor Projects`}</p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center lg:place-items-start">
              <div className="max-w-[300] md:h-[520] rounded-xl shadow-xl overflow-hidden">
                <img
                  src="/ourheritage.jpg"
                  alt="Heritage Pattern"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
