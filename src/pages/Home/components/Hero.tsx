import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* First Section: Full Screen Welcome */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image/home/hero1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div> {/* Subtle Overlay */}
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-center items-start">
          <div className="max-w-xl text-left pl-4 md:pl-0">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wide drop-shadow-lg leading-tight">
              歡迎來到 <br/>
              <br/>
              <span className="font-bold">鏈居酒店 | 香港</span>
            </h1>
            <br/>
            <button 
              onClick={scrollToNext}
              className="mt-8 border border-white text-white px-8 py-3 hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xl font-sans flex items-center gap-2 group"
            >
              探索我們的酒店
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Second Section: Split Content with Blurred Background */}
      <div ref={nextSectionRef} className="relative min-h-screen w-full flex items-center overflow-hidden py-20">
        {/* Blurred Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
          style={{ backgroundImage: "url('/image/home/hero1.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div> {/* Blue tint overlay */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Left Side: Image Container */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="/image/home/hero2.webp" 
                  alt="Hotel Interior" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Right Side: Quote Text */}
            <div className="w-full md:w-1/2 text-white text-left flex justify-center md:justify-start">
              <div className="border-l-2 border-white/30 pl-8 md:pl-12 py-4 max-w-lg">
                <h2 className="text-xl md:text-2xl font-serif leading-relaxed mb-6 tracking-wide">鏈居 | 讓每一次入住都充滿溫馨與歸屬感</h2>
                <h3 className="text-xl md:text-xl font-serif leading-relaxed mb-6 tracking-wide">
                  "開啟精品旅館的新時代－<br/>
                  每一次入住都是一個故事，<br/>
                  每個空間都充滿靈魂，<br/>
                  每一次互動都充滿人情味。"
                  </h3>
                <p className="text-sm uppercase tracking-[0.2em] opacity-80 font-sans">
                  The New Era of Boutique Hotels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
