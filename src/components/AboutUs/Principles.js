import { FaLeaf, FaShieldAlt, FaPenNib } from "react-icons/fa";

const principles = [
  {
    title: "Quality Materials",
    description:
      "We use premium fabrics, durable wallpapers, and reliable fittings to ensure long-lasting beauty and comfort in every space.",
    icon: FaLeaf,
  },
  {
    title: "Customization",
    description: (
      <>
        {` Every home is different. That’s why we tailor our wallpapers,
        curtains, blinds, sofa covers, and carpets based on`}{" "}
        <strong className="font-bold">
          {`size, color, design, and lifestyle needs`}
        </strong>.
      </>
    ),
    icon: FaShieldAlt,
  },
  {
    title: "Design Expertise",
    description:
      "Led by architectural insight, our designs balance aesthetics and functionality — helping you create interiors that look beautiful and feel practical.",
    icon: FaPenNib,
  },
];


export default function Principles() {
  return (
    <section className="py-20">
      <div className="custom-container max-w-7xl mx-auto px-6 text-center">
        <h2 className="responsiveheading2 font-semibold text-gray-700">{`THE PRINCIPLES WE LIVE BY`}</h2>
        <p className="responsive-text mt-4  mx-auto text-gray-400">{`Our work is guided by values that define how we design, customize, and deliver every project.`} </p>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="mx-auto max-w-[300] bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition" >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#cd6632]/10">
                  <Icon className="text-[#cd6632] text-xl" />
                </div>
                <h3 className="responsiveheading5 font-semibold text-gray-900">{item.title} </h3>
                <p className="mt-3 text-[16px] text-gray-500 leading-relaxed"> {item.description} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
