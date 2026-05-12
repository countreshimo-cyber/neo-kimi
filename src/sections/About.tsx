import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const advantages = [
  'Парк современного оборудования для полного цикла работ',
  'Партнёры — ведущие российские и зарубежные производители',
  'Все сопутствующие работы: ремонт, демонтаж, гидроизоляция',
  'Высококвалифицированные специалисты',
  'Скорость 1 500 м² в смену',
  'Конкурентные цены без потери качества',
];

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.15);
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="py-28 bg-[#0A0E17]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div
            ref={sectionRef}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
              О компании
            </p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white mb-6">
              Строительная компания «НеоСтрой»
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
              Основана в 2007 году и производит высокотехнологичные промышленные полы на больших площадях. 
              Все работы осуществляются с помощью современного импортного оборудования. 
              Мы всегда удерживаем самые низкие цены на рынке.
            </p>
            <ul className="space-y-4">
              {advantages.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <CheckCircle size={20} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                  <span className="text-[#CBD5E1]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div
            ref={imgRef}
            className={`relative transition-all duration-700 ${
              imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="/images/about-floor.jpg"
                alt="Промышленный пол"
                className="w-full h-full object-cover"
              />
              {/* Floating card */}
              <div
                className={`absolute -bottom-6 -right-6 glass rounded-xl p-5 transition-all duration-700 ${
                  imgVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <p className="text-3xl font-extrabold text-[#F97316]">18+</p>
                <p className="text-sm text-[#94A3B8]">Лет на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
