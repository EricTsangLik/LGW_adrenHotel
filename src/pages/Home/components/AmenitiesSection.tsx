import { 
  Coffee, 
  Clock, 
  Cigarette, 
  Ban, 
  Monitor, 
  Wifi, 
  Phone, 
  Car, 
  Umbrella 
} from 'lucide-react';

const amenities = [
  { 
    icon: Coffee, 
    title: "免費早餐糕點", 
    desc: "以新鮮糕點開始新的一天" 
  },
  { 
    icon: Clock, 
    title: "24小時客戶服務", 
    desc: "隨時為您提供協助" 
  },
  { 
    icon: Cigarette, 
    title: "指定吸煙區", 
    desc: "舒適的戶外空間" 
  },
  { 
    icon: Ban, 
    title: "非吸煙客房", 
    desc: "清新潔淨的環境" 
  },
  { 
    icon: Monitor, 
    title: "iMac 電腦角", 
    desc: "商務中心連接" 
  },
  { 
    icon: Wifi, 
    title: "免費無線上網", 
    desc: "高速互聯網連接" 
  },
  { 
    icon: Phone, 
    title: "免費本地通話", 
    desc: "保持本地聯繫" 
  },
  { 
    icon: Car, 
    title: "豪華轎車服務", 
    desc: "舒適時尚的出行體驗" 
  },
  { 
    icon: Umbrella, 
    title: "雨傘借用服務", 
    desc: "為任何天氣做好準備" 
  },
];

export default function AmenitiesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/image/home/amenities.jpg" 
          alt="Amenities Background" 
          className="w-full h-full object-cover blur-sm opacity-30" 
        />
        <div className="absolute inset-0 bg-white/70"></div> {/* White overlay to ensure text readability */}
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Premium Services</span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">貼心設施與服務</h2>
          <div className="w-px h-16 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-8 border border-white/50 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-white transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              <div className="relative z-10 w-full">
                <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 ease-out mx-auto shadow-sm">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-serif text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs text-gray-500 font-light tracking-wide group-hover:text-gray-700 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
              
              {/* Subtle background fade on hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
