import { Leaf, Package, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Eco-friendly",
    description: "Sustainable non-toxic materials",
  },
  {
    icon: Package,
    title: "Free Samples",
    description: "Order up to 5 free swatches",
  },
  {
    icon: ShieldCheck,
    title: "Proudly Serving Madhya Pradesh",
    description: "Focused service delivery in Bhopal & nearby cities",
  },
];

const Features = () => {
  return (
    <div children=" bg-[#E6A07A]">
      <section className="custom-container py-8  border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-dm grid grid-cols-1 md:grid-cols-3 gap-4  ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="  w-full   flex justify-center items-center "
              >
                {/* <div className="relative inset-0 bg-pattern filter blur-xl scale-110 brightness-50"></div>
                <div className="fixed inset-0 bg-linear-to-tr from-charcoal-dark/90 via-transparent to-charcoal-dark/90"></div> */}
                <div className=" w-full max-w-lg px-6 h-full">
                  <div className=" p-10 rounded-[1rem]  relative overflow-hidden group bg-[#101d22] h-full">
                    <feature.icon className="w-8 h-8 text-primary mb-3 text-[#cd6632]" />
                    <h3 className="font-dm responsiveheading3 font-semibold! mb-1 text-2xl text-[#cd6632]">
                      {feature.title}
                    </h3>
                    <p className="font-dm responsive-textt  ">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
