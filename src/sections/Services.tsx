import { Factory, Warehouse, ShoppingCart, Car, FlaskConical, Dumbbell } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Factory,
    title: 'Производственные помещения',
    desc: 'Полный цикл работ для цехов, складов, подсобных помещений с упрочняющими покрытиями',
  },
  {
    icon: Warehouse,
    title: 'Складские комплексы',
    desc: 'Бетонные полы с топпингом для складов любой площади. Работы до 1 500 м² за смену',
  },
  {
    icon: ShoppingCart,
    title: 'Торговые комплексы',
    desc: 'Устройство полов для гипермаркетов, ТЦ, выставочных залов с декоративными покрытиями',
  },
  {
    icon: Car,
    title: 'Автосервисы и паркинги',
    desc: 'Полимерные покрытия для СТО, парковок, автосалонов с разметкой движения',
  },
  {
    icon: FlaskConical,
    title: 'Лаборатории и медучреждения',
    desc: 'Антистатические и химстойкие покрытия для чистых производств, лабораторий, медицинских центров',
  },
  {
    icon: Dumbbell,
    title: 'Спортивные объекты',
    desc: 'Спортивные покрытия для комплексов, теннисных кортов, площадок',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className="py-28 bg-[#111827]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
            Наши услуги
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white mb-4">
            Полный цикл работ по устройству промышленных полов
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-[700px] mx-auto">
            От проектирования до финишного покрытия — выполняем все виды работ для любых объектов
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
  isVisible,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group p-8 bg-[#1E293B] border border-[#334155] rounded-2xl transition-all duration-500 hover:border-[#F97316] hover:glow-orange hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-[rgba(249,115,22,0.15)] flex items-center justify-center text-[#F97316] mb-5 group-hover:bg-[rgba(249,115,22,0.25)] transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-[#94A3B8] leading-relaxed">{desc}</p>
    </div>
  );
}
