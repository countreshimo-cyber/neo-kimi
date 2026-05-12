import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'О компании', href: '#about' },
  { label: 'Клиенты', href: '#clients' },
  { label: 'Оборудование', href: '#equipment' },
  { label: 'Контакты', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') return;
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled ? 'glass-strong' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-[20px] font-extrabold tracking-tight text-white">
              НЕОСТРОЙ
            </span>
            <span className="text-[11px] font-medium tracking-[2px] uppercase text-[#94A3B8]">
              Промышленные полы
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-[15px] font-medium text-[#94A3B8] hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F97316] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+79185314302"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#F97316] hover:bg-[#FB923C] text-white text-[15px] font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Позвонить
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-[rgba(10,14,23,0.95)] backdrop-blur-xl" />
        <nav className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-semibold text-white hover:text-[#F97316] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+79185314302"
            className="mt-4 flex items-center gap-2 px-8 py-3 bg-[#F97316] text-white text-lg font-semibold rounded-full"
          >
            <Phone size={20} />
            +7 (918) 531-43-02
          </a>
        </nav>
      </div>
    </>
  );
}
