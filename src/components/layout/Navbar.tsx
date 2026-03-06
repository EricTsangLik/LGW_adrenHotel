import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Always show solid background on pages other than Home
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isHome 
    ? (isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4')
    : 'bg-white shadow-md py-2';

  const textClass = isHome && !isScrolled
    ? 'text-white'
    : 'text-primary';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/image/logo.jpg" alt="Arden Hotel Logo" className="h-12 md:h-16" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 items-center ${textClass}`}>
          <Link to="/about" className="hover:text-secondary transition-colors font-serif text-lg">關於鏈居</Link>
          <Link to="/gallery" className="hover:text-secondary transition-colors font-serif text-lg">藝廊</Link>
          <Link to="/explore" className="hover:text-secondary transition-colors font-serif text-lg">探索更多</Link>
          <Link to="/contact" className="hover:text-secondary transition-colors font-serif text-lg">聯絡我們</Link>
          <button className="bg-primary text-white px-6 py-2 rounded-none hover:bg-opacity-90 transition-colors uppercase tracking-wider font-sans text-sm">
            立即預訂
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={textClass}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 text-primary">
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors font-serif text-lg">關於我們</Link>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors font-serif text-lg">藝廊</Link>
          <Link to="/explore" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors font-serif text-lg">探索更多</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors font-serif text-lg">聯絡我們</Link>
          <button className="bg-primary text-white px-6 py-2 rounded-none hover:bg-opacity-90 transition-colors uppercase tracking-wider font-sans text-sm">
            立即預訂
          </button>
        </div>
      )}
    </nav>
  );
}
