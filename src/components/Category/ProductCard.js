import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="max-w-[300] bg-white rounded-xl border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)] group">
      <div className="relative h-[180] w-full overflow-hidden rounded-t-xl">
        <Image
          src="/wallpaper1.jpg"
          alt="Elegant Floral Wallpaper"
          fill
          className=" object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[15px] font-semibold text-black leading-snug"> {` Elegant Floral `} {""}<br />{` Wallpaper`}</h3>
          <p className="text-[11px] bg-[#00D4C8] text-[#101d22] px-2 py-3 rounded-md ">{`Customizable`}</p>
        </div>
        <p className="text-[13px] text-gray-600 mt-2 "> {`Premium floral design wallpaper perfect for living rooms and bedrooms`}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-[16px] font-semibold text-[#101d22]">{`₹2,500`}</p>
          <p className="text-[13px] text-gray-500 transition-all duration-300 group-hover:text-[#101d22] group-hover:translate-x-1 ">
            {` View Details →`}
          </p>
        </div>
      </div>
    </div>
  );
}
