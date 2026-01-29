"use client";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };
  return (
    <section className="py-8 md:py-10 lg:py-15 bg-secondary custom-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-dm responsiveheading2 font-bold! text-gray-700 mb-4">
          {`See Our Wallpapers in Action`}
        </h2>

        <div className="relative  mx-auto mt-10">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              controls={playing}
              className="w-full aspect-video object-cover"
              poster="/images/video-preview.jpg"
            >
              <source src="/images/wallpaper-video.mp4"></source>
            </video>
            {!playing && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button
                  onClick={playVideo}
                  className="font-dm h-16  md:h-15  mt-8 inline-flex items-center bg-white/10 hover:bg-white/15   gap-2 px-4 py-2  text-white rounded-full cursor-pointer transition-colors"
                >
                  <div className="bg-[#cd6632] p-4 rounded-full">
                    <Play className="w-6 h-6 md:w-5 md:h-5  ml-1" fill="#fff" />
                  </div>
                 {` Watch Our Process`}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
