
export default function IntroductionSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
              <img 
                src="/image/home/Entrance-1.webp" 
                alt="Location View" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
          
          {/* Right Text */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary tracking-wide">
              便利位置
            </h2>
            <div className="w-16 h-1 bg-secondary mb-8"></div>
            <p className="text-base md:text-lg text-gray-600 leading-loose font-light">
              我們位於便利的位置，公共交通和名勝古跡都在步行距離之內。
              <br className="mb-4 block" />
              附近是港澳碼頭、電車站（叮叮）和地鐵站，步行 5 分鐘即可到達（港鐵上環站 A2 出口）。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
