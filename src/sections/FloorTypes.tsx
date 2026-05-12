import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const floorTypes = [
  {
    num: '01',
    title: 'Топпинговые покрытия',
    content:
      'Железобетонные полы с упрочняющими покрытиями. Кварцевый наполнитель для умеренных нагрузок, корундовый — для высоких физических и химических воздействий. Повышенная прочность, пониженное пылеобразование, долговечность, экономичность, эстетичность.',
  },
  {
    num: '02',
    title: 'Антистатические покрытия',
    content:
      'Для чистых производств, зерноперерабатывающих, сахарных, цементных, угольных производств, электронной промышленности, серверных, медицинских центров.',
  },
  {
    num: '03',
    title: 'Химстойкие покрытия',
    content:
      'Повышенная прочность, устойчивость к химическим и физическим воздействиям, безопасность в медицинских учреждениях и лабораториях.',
  },
  {
    num: '04',
    title: 'Полиуретановые покрытия',
    content:
      'Эластичность, ударопрочность, механостойкость, высокая устойчивость к истиранию.',
  },
  {
    num: '05',
    title: 'Эпоксидные полы',
    content:
      'Защита от вредных воздействий, декоративность, высокая адгезия, износостойкость, бюджетность.',
  },
  {
    num: '06',
    title: 'Полиуретанцементные',
    content:
      'Устойчивость к химическим и физическим воздействиям, высоким температурам. Соответствуют санитарным требованиям для пищевых производств и медицины.',
  },
];

export default function FloorTypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
            Виды покрытий
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white">
            Технологии под любые задачи
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {floorTypes.map((floor, i) => (
            <div
              key={i}
              className={`border border-[#334155] rounded-xl overflow-hidden transition-all duration-500 ${
                openIndex === i ? 'border-l-4 border-l-[#F97316]' : 'hover:border-[#475569]'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left"
              >
                <span className="text-[#F97316] font-bold text-lg md:text-xl">{floor.num}</span>
                <span className="flex-1 text-lg md:text-xl font-semibold text-white">
                  {floor.title}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-[#94A3B8] transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pl-14 md:pl-20">
                  <p className="text-[#94A3B8] leading-relaxed">{floor.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
