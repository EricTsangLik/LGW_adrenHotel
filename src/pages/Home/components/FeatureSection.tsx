export default function FeatureSection() {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-3 block">Welcome to Hong Kong</span>
        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-primary tracking-wide leading-tight">
          歡迎來到 鏈居
        </h2>
        <p className="text-base md:text-lg font-light leading-relaxed text-gray-600 mb-12 max-w-2xl mx-auto">
          坐落於充滿活力的上環，鏈居 以現代設計融合傳統韻味，為您打造獨一無二的住宿體驗。<br className="hidden md:block"/>
          無論是商務出行還是休閒度假，我們都致力於為您提供最貼心的服務與最舒適的環境。
        </p>
        
        <div className="w-px h-16 bg-secondary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           {/* Feature 1 */}
           <div className="group cursor-pointer">
             <div className="h-64 bg-gray-100 mb-6 overflow-hidden relative">
               <img src="/image/home/feature-accommodation.jpg" alt="Accommodation" className="w-full h-full object-cover" />
               <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
               <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-500 m-3"></div>
             </div>
             <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors text-gray-800">精緻客房</h3>
             <p className="text-xs font-light text-gray-500 tracking-wide uppercase">Accommodation</p>
           </div>
           
           {/* Feature 2 */}
           <div className="group cursor-pointer">
             <div className="h-64 bg-gray-100 mb-6 overflow-hidden relative">
               <img src="/image/home/feature-dinning.jpg" alt="Dining" className="w-full h-full object-cover" />
               <div className="w-full h-full bg-slate-300 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
               <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-500 m-3"></div>
             </div>
             <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors text-gray-800">特色餐飲</h3>
             <p className="text-xs font-light text-gray-500 tracking-wide uppercase">Dining</p>
           </div>
           
           {/* Feature 3 */}
           <div className="group cursor-pointer">
             <div className="h-64 bg-gray-100 mb-6 overflow-hidden relative">
               <img src="/image/home/feature-location.jpg" alt="Location" className="w-full h-full object-cover" />
               <div className="w-full h-full bg-slate-400 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
               <div className="absolute inset-0 border border-transparent group-hover:border-white/20 transition-colors duration-500 m-3"></div>
             </div>
             <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors text-gray-800">優越位置</h3>
             <p className="text-xs font-light text-gray-500 tracking-wide uppercase">Location</p>
           </div>
        </div>
      </div>
    </section>
  );
}
