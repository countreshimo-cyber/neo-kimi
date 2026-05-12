import { useEffect, useState } from 'react';
import { Building2, Gauge, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Промышленный пол"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,14,23,0.92)] via-[rgba(10,14,23,0.75)] to-[rgba(10,14,23,0.6)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 pt-24 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-[700px]">
          <p
            className={`text-[#F97316] text-sm font-medium tracking-[3px] uppercase mb-6 transition-all duration-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Промышленные полы с 2007 года
          </p>
          <h1
            className={`text-[clamp(36px,6vw,72px)] font-extrabold leading-[1.1] tracking-tight text-white mb-6 transition-all duration-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Современные промышленные полы по всей России
          </h1>
          <p
            className={`text-lg md:text-xl text-[#94A3B8] mb-8 max-w-[600px] transition-all duration-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Производство и монтаж бетонных, полимерных и наливных полов. Площадь выполненных работ — более 300 000 м²
          </p>
          <div
            className={`flex flex-wrap gap-4 transition-all duration-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <a
              href="tel:+79185314302"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F97316] hover:bg-[#FB923C] text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Получить консультацию
              <ArrowRight size={18} />
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#334155] hover:border-[#F97316] text-white font-semibold rounded-full transition-all duration-200 hover:bg-[rgba(249,115,22,0.1)]"
            >
              Наши работы
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        className={`relative z-10 w-full transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="bg-[rgba(17,24,39,0.8)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.08)]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <Stat icon={<Building2 size={24} />} value="300 000+" label="Выполненных м²" />
              <Stat icon={<Gauge size={24} />} value="1 500" label="М² в смену" />
              <Stat icon={<Calendar size={24} />} value="2007" label="Год основания" />
              <Stat icon={<MapPin size={24} />} value="РФ и СНГ" label="География работ" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[rgba(249,115,22,0.15)] flex items-center justify-center text-[#F97316]">
        {icon}
      </div>
      <div>
        <p className="text-xl md:text-2xl font-bold text-white">{value}</p>
        <p className="text-sm text-[#94A3B8]">{label}</p>
      </div>
    </div>
  );
}
