export default function AboutHero() {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-gray-800">
      {/* Background Image - Absolute Positioned */}
      <div className="absolute inset-0">
        <img src="/image/about/about.jpg" alt="About Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content - Centered on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide drop-shadow-lg">關於鏈居</h1>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase">About Us</p>
      </div>
    </div>
  );
}
