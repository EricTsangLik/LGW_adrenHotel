import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PageLinks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-6">
          <div className="text-left">
            <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Discover More</span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary">探索精彩體驗</h2>
          </div>
          <Link to="/explore" className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm uppercase tracking-widest group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
          {/* Large Item - About */}
          <Link to="/about" className="md:col-span-7 relative group overflow-hidden block h-[300px] md:h-full">
             <div className="absolute inset-0 bg-slate-200 transition-transform duration-1000 group-hover:scale-105">
               <img src="/image/about/about.jpg" alt="About Us" className="w-full h-full object-cover" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
             
             <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
               <span className="text-secondary text-xs uppercase tracking-widest mb-2 block font-bold">Our Story</span>
               <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">關於鏈居</h3>
               <p className="text-gray-300 font-light text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                 深入了解鏈居的品牌故事與設計理念，感受獨特的待客之道。
               </p>
               <div className="mt-6 flex items-center text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                 Read More <ArrowRight className="w-3 h-3 ml-2" />
               </div>
             </div>
          </Link>
          
          <div className="md:col-span-5 flex flex-col gap-6 h-full">
            {/* Small Item 1 - Gallery */}
            <Link to="/gallery" className="flex-1 relative group overflow-hidden block h-[250px] md:h-auto">
               <div className="absolute inset-0 bg-slate-300 transition-transform duration-1000 group-hover:scale-105">
                 <img src="/image/gallery/gallery.jpg" alt="Gallery" className="w-full h-full object-cover" />
               </div>
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
               <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 border border-white/0 group-hover:border-white/20 m-4 transition-all duration-500">
                 <h3 className="text-2xl font-serif mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">藝廊</h3>
                 <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">Visual Journey</p>
               </div>
            </Link>
            
            {/* Small Item 2 - Contact */}
            <Link to="/contact" className="flex-1 relative group overflow-hidden block h-[250px] md:h-auto">
               <div className="absolute inset-0 bg-primary transition-colors duration-300 group-hover:bg-primary/10">
               </div>
               <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
                 <h3 className="text-2xl font-serif mb-4">預訂您的住宿</h3>
                 <p className="text-xs font-light text-gray-300 mb-6 max-w-xs mx-auto">體驗上環核心地帶的雅緻生活，立即預訂享受最優惠價格。</p>
                 <span className="inline-block border border-white/30 px-6 py-2 text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-colors">
                   Book Now
                 </span>
               </div>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/explore" className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-widest">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
