import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InfoSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        {/* Address */}
        <p className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-blue-900 uppercase mb-8 md:mb-12">
        鏈居酒店 <br/><br/> <span className="italic">香港上環文咸東街139-141號</span>
        </p>

        {/* Contact Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-primary">
          {/* Phone */}
          <a href="tel:+85262990323" className="text-lg md:text-2xl tracking-widest hover:text-secondary transition-colors font-serif">
            +852 6299 0323
          </a>

          <div className="hidden md:block w-px h-6 bg-primary/30"></div>

          {/* View Map */}
          <Link to="/contact" className="flex items-center gap-2 text-2xl md:text-2xl uppercase tracking-[0.2em] hover:text-secondary transition-colors group font-light">
            查看地圖 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="hidden md:block w-px h-6 bg-primary/30"></div>

          {/* Email */}
          <a href="mailto:owenyhk@gmail.com" className="text-2xl md:text-2xl uppercase tracking-[0.2em] hover:text-secondary transition-colors font-light">
            owenyhk@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
