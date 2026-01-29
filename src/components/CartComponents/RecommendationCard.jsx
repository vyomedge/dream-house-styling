const RecommendationCard = ({ title, price, image }) => (
  <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
    <img
      src={image}
      alt={title}
      className="w-full aspect-square object-cover rounded-lg mb-4 grayscale hover:grayscale-0 transition-all"
    />

    <h5 className="font-dm font-bold text-sm uppercase">{title}</h5>
    <p className="font-dm text-white/40 text-xs mt-1">{price}</p>

    <button className="font-dm mt-4 w-full py-2 border border-white/10 rounded text-[10px] font-bold uppercase">
      Add To Bag
    </button>
  </div>
);

export default RecommendationCard;
