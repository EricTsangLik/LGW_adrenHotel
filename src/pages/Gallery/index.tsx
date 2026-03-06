import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const facilities = [
  { src: "/image/gallery/Entrance-1.webp", alt: "Hotel Entrance", title: "酒店入口" },
  { src: "/image/gallery/Smoking-Lounge-1.webp", alt: "Smoking Lounge", title: "吸煙休息室" },
  { src: "/image/gallery/Internet-Corner.webp", alt: "Internet Corner", title: "互聯網角" },
  { src: "/image/gallery/hotel_exterior.webp", alt: "Hotel Exterior", title: "酒店外觀" },
];

const rooms = [
  { src: "/image/gallery/Signature-Suite-1-scaled.webp", alt: "Signature Suite", title: "標誌套房" },
  { src: "/image/gallery/Signature-Room-1-scaled.webp", alt: "Signature Room", title: "標誌客房" },
  { src: "/image/gallery/Premier-Room-Twin-Hero-1.webp", alt: "Premier Twin Room", title: "高級雙人房" },
  { src: "/image/gallery/Premier-Double-Room-1.webp", alt: "Premier Double Room", title: "高級大床房" },
  { src: "/image/gallery/Classic-Room-Hero-1.webp", alt: "Classic Room", title: "經典客房" },
  { src: "/image/gallery/Wardrobe-Designated-Room-Type-1.webp", alt: "Wardrobe", title: "客房衣櫥" },
];

export default function Gallery() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      
      {/* Gallery Hero Section with Background */}
      <div className="relative pt-52 pb-60 text-white text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image/gallery/gallery.jpg" 
            alt="Gallery Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/35 mix-blend-multiply"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide">相片藝廊</h1>
          <p className="mt-4 text-sm uppercase tracking-widest opacity-80">Gallery</p>
        </div>
      </div>
      
      <section className="py-24 container mx-auto px-4 max-w-6xl">
         {/* Facilities Section */}
         <div className="mb-24">
           <div className="text-center mb-12">
             <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Our Facilities</span>
             <h2 className="text-3xl font-serif text-primary">酒店設施</h2>
             <div className="w-12 h-[1px] bg-primary/20 mx-auto mt-6"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {facilities.map((item, index) => (
                <div key={index} className="group relative overflow-hidden shadow-lg aspect-[4/3]">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-serif tracking-wide">{item.title}</h3>
                  </div>
                </div>
              ))}
           </div>
         </div>
         
         {/* Rooms Section */}
         <div>
           <div className="text-center mb-12">
             <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Accommodation</span>
             <h2 className="text-3xl font-serif text-primary">客房鑑賞</h2>
             <div className="w-12 h-[1px] bg-primary/20 mx-auto mt-6"></div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rooms.map((item, index) => (
                <div key={index} className="group relative overflow-hidden shadow-lg aspect-[3/4]">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                    <h3 className="text-lg font-serif tracking-wide mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                    <div className="w-8 h-[1px] bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  </div>
                </div>
              ))}
           </div>
         </div>
      </section>
      
      <Footer />
    </div>
  );
}
