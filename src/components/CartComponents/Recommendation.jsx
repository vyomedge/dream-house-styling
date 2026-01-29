import RecommendationCard from "./RecommendationCard";

const Recommendations = () => {
  return (
    <div className="pt-24 pb-12">
      <h4 className="font-dm text-xl font-bold uppercase tracking-widest mb-10 flex items-center gap-4">
        You May Also Like
        <span className="h-[1px] flex-1 bg-white/10" />
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <RecommendationCard
          title="Professional Paste Kit"
          price="$45.00"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuClEPoN6J-K9nijCKXwQRR1OUHUkuThbfVRu-Nw9hy0veNxuwopJQTogAU01SaC6LDuPv5Nkcaenk7YEuAxgpnT0_wya49gzT1-pWtMLQ6XQMVnubOHqn7b-L6qTz7UC-opUkWeAxR-xFTVjmGlqt0am6YSMwnbppJS8eV1tVGBUVHGIH5g3RD_J791kuZ-KzvhHhiU94g9LAeeaTXw__nx3vHYKXk47eX_YajvZS9jscLM4O1naMzF3FGR_4V2gtc8VVaEOTcahxg"
        />
        <RecommendationCard
          title="Texture Sample Pack"
          price="$12.00"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuClEPoN6J-K9nijCKXwQRR1OUHUkuThbfVRu-Nw9hy0veNxuwopJQTogAU01SaC6LDuPv5Nkcaenk7YEuAxgpnT0_wya49gzT1-pWtMLQ6XQMVnubOHqn7b-L6qTz7UC-opUkWeAxR-xFTVjmGlqt0am6YSMwnbppJS8eV1tVGBUVHGIH5g3RD_J791kuZ-KzvhHhiU94g9LAeeaTXw__nx3vHYKXk47eX_YajvZS9jscLM4O1naMzF3FGR_4V2gtc8VVaEOTcahxg"
        />
        <RecommendationCard
          title="Precision Toolset"
          price="$28.00"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuClEPoN6J-K9nijCKXwQRR1OUHUkuThbfVRu-Nw9hy0veNxuwopJQTogAU01SaC6LDuPv5Nkcaenk7YEuAxgpnT0_wya49gzT1-pWtMLQ6XQMVnubOHqn7b-L6qTz7UC-opUkWeAxR-xFTVjmGlqt0am6YSMwnbppJS8eV1tVGBUVHGIH5g3RD_J791kuZ-KzvhHhiU94g9LAeeaTXw__nx3vHYKXk47eX_YajvZS9jscLM4O1naMzF3FGR_4V2gtc8VVaEOTcahxg"
        />
      </div>
    </div>
  );
};

export default Recommendations;
