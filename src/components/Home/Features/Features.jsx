import { Leaf, Package, Globe } from "lucide-react";

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
    icon: Globe,
    title: "Global Shipping",
    description: "Fast delivery to over 50 countries",
  },
];

const Features = () => {
  return (
    <section className="py-8  border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="  w-full   flex justify-center items-center  z-50"
            >
              <div className="relative inset-0 bg-pattern filter blur-xl scale-110 brightness-50"></div>
              <div className="fixed inset-0 bg-linear-to-tr from-charcoal-dark/90 via-transparent to-charcoal-dark/90"></div>
              <div className=" w-full max-w-lg px-6">
                <div className="glass-modal p-10 rounded-[1rem]  relative overflow-hidden group">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-(--primaryColor)/20 blur-[80px] rounded-full"></div>
                  <feature.icon className="w-8 h-8 text-primary mb-3 " />
                  <h3 className="font-semibold mb-1 text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-(--primaryColor)/10 blur-[80px] rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
