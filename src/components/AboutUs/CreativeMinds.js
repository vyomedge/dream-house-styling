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
    <div className="bg-color">
      <section className="custom-container  py-20">
        <div className=" mx-auto px-2 text-center">
          <h2 className="font-dm responsiveheading2 font-semibold text-white">{`THE CREATIVE MINDS`}</h2>
          <p className=" font-dm responsive-text mt-3 text-gray-200  ">
            {`Behind Dream Home Styling is a passionate team of `}  <strong className="font-bold">
              {`designers, stylists, and technical experts `}</strong>{` who work closely with clients to bring ideas to life.`}</p>
          <p className="font-dm responsive-text mt-3 text-gray-200  mx-auto">
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
                <h3 className="font-dm mt-4 responsive-text  font-semibold! text-gray-200"> {member.name} </h3>
                <p className="font-dm mt-1 text-sm tracking-widest uppercase text-white"> {member.role} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


