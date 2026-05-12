import { FileCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certificates = [
  { name: 'Mapei', desc: 'Официальный сертификат дилера' },
  { name: 'MC-Bauchemie Russia', desc: 'Сертификат партнёра' },
  { name: 'MC-Bauchemie Russia', desc: 'Удостоверение специалиста' },
  { name: 'Технологический сертификат', desc: 'Промышленные полы' },
  { name: 'Construction', desc: 'Удостоверение' },
  { name: 'Construction', desc: 'Удостоверение' },
];

export default function Certificates() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-28 bg-[#0A0E17]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
            Сертификаты
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white">
            Подтверждённая компетенция
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={i}
              className={`p-6 glass rounded-2xl transition-all duration-500 hover:border-[#F97316] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(249,115,22,0.15)] flex items-center justify-center text-[#F97316] mb-4">
                <FileCheck size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
              <p className="text-sm text-[#94A3B8]">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
