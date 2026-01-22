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
              className="flex flex-col glass2 items-start p-6 bg-background border text-[#fff] border-[#fff] rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <feature.icon className="w-6 h-6 text-primary mb-3 " />
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
