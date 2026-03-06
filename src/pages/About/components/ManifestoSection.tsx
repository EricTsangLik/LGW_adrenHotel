export default function ManifestoSection() {
  return (
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/image/about/manifesto-background.jpg" 
          alt="Manifesto Background" 
          className="w-full h-full object-cover blur-sm opacity-50 scale-105" 
        />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="md:w-1/2">
            <span className="text-secondary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Our Mission</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">使命宣言</h2>
            <div className="w-16 h-[1px] bg-secondary mb-8"></div>
            
            <div className="text-lg font-light leading-relaxed space-y-6 opacity-90">
              <p>
                在鏈居酒店集團，我們致力於打造充滿個性、充滿活力的場所。透過匠心獨運的設計、貼心周到的服務和地道的本地故事，我們精心打造精品體驗，將人們與文化、社區和歸屬感緊密相連。
              </p>
              <p>
                我們的使命是，一次打造一間飯店，為現代飯店業注入個性與溫度。
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 w-full">
            <div className="relative h-[500px] w-full group overflow-hidden border-4 border-white/10 shadow-2xl">
              {/* Image */}
              <div className="absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="/image/about/manifesto.jpg" 
                  alt="Manifesto" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              
              {/* Decorative Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
