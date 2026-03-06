export default function ManagementMessage() {
  return (
    <section className="py-24 bg-gray-50 text-center">
      <div className="container mx-auto px-4 max-w-5xl">
         <h2 className="text-3xl md:text-5xl font-serif mb-16 text-primary">管理層的話</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 shadow-sm">
               <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6"></div>
               <h3 className="text-xl font-bold mb-2 font-serif text-primary">General Manager | 總裁</h3>
               <p className="text-sm uppercase tracking-widest text-secondary mb-6">Mr. Owen Yau</p>
               <p className="text-gray-600 font-light italic leading-relaxed">
                 "我們致力於為每一位賓客創造難忘的回憶。期待您的光臨，體驗 Arden Hotel 的獨特魅力。"
               </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm">
               <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6"></div>
               <h3 className="text-xl font-bold mb-2 font-serif text-primary">Duty Manager ｜副總裁</h3>
               <p className="text-sm uppercase tracking-widest text-secondary mb-6">Mr. Henry Banson</p>
               <p className="text-gray-600 font-light italic leading-relaxed">
                 "您的滿意是我們最大的動力。無論您有任何需求，我們都會竭誠為您服務。"
               </p>
            </div>
         </div>
      </div>
    </section>
  );
}
