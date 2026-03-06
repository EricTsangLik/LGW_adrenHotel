import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 font-sans">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="text-3xl font-serif mb-6 tracking-wide">鏈居 | 香港</h3>
          <p className="font-light text-sm text-gray-300 leading-relaxed">
            位於香港上環的核心地帶，鏈居酒店 為您提供舒適與便利的完美結合。<br/>
            體驗獨特的設計風格與貼心的服務。
          </p>
          <div className="mt-6 text-sm text-gray-300 space-y-1">
            <p>香港上環文咸東街139-141號</p>
            <p>139-141 Bonham Strand, Sheung Wan, Hong Kong</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif mb-6 text-secondary">探索</h4>
          <ul className="space-y-3 text-sm font-light text-gray-300">
            <li><Link to="/about" className="hover:text-white transition-colors">關於鏈居</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">相片藝廊</Link></li>
            <li><Link to="/explore" className="hover:text-white transition-colors">探索更多</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-serif mb-6 text-secondary">聯絡</h4>
          <ul className="space-y-3 text-sm font-light text-gray-300">
            <li><Link to="/contact" className="hover:text-white transition-colors">聯絡鏈居</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">位置地圖</Link></li>
            <li className="pt-4 text-xs text-gray-500 uppercase tracking-widest">Follow Us</li>
            <li className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500 font-light tracking-wide">
        &copy; {new Date().getFullYear()} Arden Hotel. All Rights Reserved.
      </div>
    </footer>
  );
}
