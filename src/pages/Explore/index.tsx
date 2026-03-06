import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Explore() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="pt-24 pb-12 bg-primary text-white text-center">
        <h1 className="text-4xl font-serif">探索體驗</h1>
      </div>
      
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-12 text-center text-primary">最新活動</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="flex flex-col md:flex-row gap-8 items-start border-b pb-8">
               <div className="w-full md:w-1/3 h-48 bg-gray-200 shrink-0">
                <img src="/image/explore/summer-food.jpg" alt="Summer Menu" className="w-full h-full object-cover" />
               </div>
               <div>
                  <span className="text-xs uppercase tracking-widest text-secondary font-bold">JULY 2026</span>
                  <h3 className="text-2xl font-serif my-3 text-primary">夏季限定菜單</h3>
                  <p className="text-gray-600 mb-4">我們的主廚為您精心準備了夏季限定菜單，選用當季新鮮食材，為您帶來清新的味蕾體驗。</p>
                  <button className="text-primary border-b border-primary uppercase text-sm tracking-widest hover:text-secondary transition-colors">了解更多</button>
               </div>
            </div>
            
             <div className="flex flex-col md:flex-row gap-8 items-start border-b pb-8">
               <div className="w-full md:w-1/3 h-48 bg-gray-200 shrink-0">
                <img src="/image/explore/art.jpg" alt="Art Exhibition" className="w-full h-full object-cover" />
               </div>
               <div>
                  <span className="text-xs uppercase tracking-widest text-secondary font-bold">AUGUST 2026</span>
                  <h3 className="text-2xl font-serif my-3 text-primary">藝術展覽：城市的聲音</h3>
                  <p className="text-gray-600 mb-4">Arden Hotel 榮幸地邀請到本地藝術家舉辦個人展覽，探討城市與聲音的關係。</p>
                  <button className="text-primary border-b border-primary uppercase text-sm tracking-widest hover:text-secondary transition-colors">了解更多</button>
               </div>
            </div>
        </div>
        
        <h2 className="text-3xl font-serif mb-12 text-center text-primary">周邊探索</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">☕</div>
              <h3 className="text-xl font-serif mb-3 text-primary">特色咖啡店</h3>
              <p className="text-sm text-gray-500 mb-4">Discover Local Cafes</p>
              <p className="text-gray-600 text-sm">上環擁有眾多特色咖啡店，是您享受午後時光的好去處。</p>
           </div>
           
           <div className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">🏛️</div>
              <h3 className="text-xl font-serif mb-3 text-primary">歷史建築</h3>
              <p className="text-sm text-gray-500 mb-4">Historical Buildings</p>
              <p className="text-gray-600 text-sm">探索附近的文武廟、PMQ元創方等歷史建築，感受香港的文化底蘊。</p>
           </div>
           
           <div className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">🛍️</div>
              <h3 className="text-xl font-serif mb-3 text-primary">古董街</h3>
              <p className="text-sm text-gray-500 mb-4">Antique Street</p>
              <p className="text-gray-600 text-sm">漫步於摩羅上街（古董街），尋找獨特的古玩珍寶。</p>
           </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
