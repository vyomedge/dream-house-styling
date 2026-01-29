export default function Map() {
    return (
          <div className="bg-color">
        <section className=" py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="font-dm responsiveheading2 text-white">{`We’d Love to Welcome You`}</h2>
                <p className="font-dm mt-4 text-gray-200  mx-auto responsive-text">{` Step into our Dream Home Styling work place and explore beautiful interiors. Use the map below to plan your visit.`}</p>
                <div className="mt-10 rounded-xl overflow-hidden shadow-lg border">
                    <iframe
                        title="Dream Home Styling Location"
                        src="https://www.google.com/maps?q=Dream%20Home%20Styling%20Neelbad%20Square%20Bhopal&output=embed"
                        className="font-dm w-full h-[450]"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
        </div>
    );
}
