import { useScrollReveal } from '../hooks/useScrollReveal';
import { Cog } from 'lucide-react';

const equipment = [
  { name: 'Плавающая виброрейка Proscreed', type: 'Виброрейки' },
  { name: 'Allen MP215', type: 'Двухроторная затирочная машина' },
  { name: 'Allen MP235', type: 'Двухроторная затирочная машина' },
  { name: 'Allen MP315', type: 'Двухроторная затирочная машина' },
  { name: 'Allen MSP415', type: 'Двухроторная затирочная машина' },
  { name: 'Allen 436', type: 'Однороторная затирочная машина, кромочник' },
];

export default function Equipment() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="equipment" className="py-28 bg-[#111827]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
            Оборудование
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white mb-4">
            Профессиональное оборудование
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-[600px] mx-auto">
            Современный парк техники для выполнения полного цикла работ
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, i) => (
            <div
              key={i}
              className={`group p-6 bg-[#1E293B] border border-[#334155] rounded-2xl transition-all duration-500 hover:border-[#F97316] hover:glow-orange hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(249,115,22,0.15)] flex items-center justify-center text-[#F97316] mb-4 group-hover:bg-[rgba(249,115,22,0.25)] transition-colors">
                <Cog size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
              <p className="text-sm text-[#94A3B8]">{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
