export default function BrandStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
           <div className="h-[500px] bg-slate-200 relative">
             <img src="/image/logo.jpg" alt="Brand Story" className="w-full h-full object-cover" />
           </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
           <h2 className="text-3xl md:text-4xl font-serif mb-8 text-primary">品牌故事 - 鏈居酒店集團</h2>
           <p className="text-gray-600 leading-relaxed mb-6">
             鏈居酒店 - 誕生於對香港文化的深刻理解與熱愛。我們相信，一家好的酒店不僅僅是提供住宿，更是連接旅客與當地文化的橋樑。
           </p>
           <p className="text-gray-600 leading-relaxed">
           鏈居酒店集團是一家精品酒店管理公司，致力於打
造充滿靈魂和故事的酒店。我們融合靈感設計、當
地文化和真誠服務，創造連結人與地理的真實體驗，
讓每一次入住都成為個人化、難忘且真實的回憶。
           </p>
        </div>
      </div>
    </section>
  );
}
