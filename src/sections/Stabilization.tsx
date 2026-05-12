import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  'Оценка состояния конструкций',
  'Разработка решения',
  'Составление тех. карты',
  'Выполнение работ',
  'Приборная фиксация результата',
];

export default function Stabilization() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal(0.15);
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.15);

  return (
    <section className="py-28 bg-gradient-to-b from-[#111827] to-[#0A0E17]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            ref={imgRef}
            className={`order-2 lg:order-1 transition-all duration-700 ${
              imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/images/stabilization.jpg"
                alt="Геополимерная стабилизация"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef}
            className={`order-1 lg:order-2 transition-all duration-700 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
              Инновационная технология
            </p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white mb-6">
              Стабилизация и лифтинг оснований
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8 leading-relaxed">
              Выполняем работы по стабилизации и лифтингу оснований по технологии глубинного
              инъецирования современными геополимерными материалами. Работы выполняются в сжатые
              сроки — во многих случаях в одну смену, эксплуатация возможна спустя несколько часов.
            </p>

            {/* Timeline */}
            <div className="relative pl-8">
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#334155]" />
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`relative mb-6 last:mb-0 transition-all duration-500 ${
                    textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{i + 1}</span>
                  </div>
                  <p className="text-white font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
