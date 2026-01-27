import Image from "next/image";

const team = [
  {
    name: "Elena Vance",
    role: "Creative Director",
    image: "/team/elena.jpg",
  },
  {
    name: "Marcus Thorne",
    role: "Senior Pattern Artist",
    image: "/team/marcus.jpg",
  },
  {
    name: "Sophie Chen",
    role: "Color Specialist",
    image: "/team/sophie.jpg",
  },
  {
    name: "David Miller",
    role: "Technical Lead",
    image: "/team/david.jpg",
  },
];

export default function CreativeMinds() {
  return (
    <div className="bg-[#FBC19A]">
      <section className="custom-container  py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="responsiveheading2 font-semibold text-white">{`THE CREATIVE MINDS`}</h2>
          <p className="responsive-text mt-3 text-gray-500  mx-auto">
            {`Behind Dream Home Styling is a passionate team of `}  <strong className="font-bold">
              {`designers, stylists, and technical experts `}</strong>{` who work closely with clients to bring ideas to life.`}</p>
          <p className="responsive-text mt-3 text-gray-500  mx-auto">
            {`From concept discussions and material selection to `}<strong className="font-bold">{` 3D interior visualization and execution `}</strong>{` , our team ensures clarity, creativity, and precision at every stage.`}</p>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 responsive-text  font-semibold! text-gray-500"> {member.name} </h3>
                <p className="mt-1 text-sm tracking-widest uppercase text-[#cd6632]"> {member.role} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


