import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contacts = [
  {
    icon: Phone,
    title: 'Телефоны',
    lines: ['(863) 262-40-15', '+7 (918) 531-43-02', '+7 (918) 563-91-94'],
    href: 'tel:+79185314302',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['neostroy.rostov@mail.ru'],
    href: 'mailto:neostroy.rostov@mail.ru',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    lines: ['344002, Ростов-на-Дону,', 'ул. Темерницкая, 41 Б, офис 26'],
    href: null,
  },
  {
    icon: Clock,
    title: 'Режим работы',
    lines: ['Пн-Пт: 9:00 — 18:00'],
    href: null,
  },
];

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal(0.15);
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal(0.15);

  return (
    <section id="contact" className="py-28 bg-gradient-to-br from-[#111827] to-[#0A0E17]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
              Контакты
            </p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white mb-8">
              Свяжитесь с нами
            </h2>

            <div className="space-y-4">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href || undefined}
                  className={`block glass rounded-xl p-6 transition-all duration-500 hover:border-[#F97316] ${
                    leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${contact.href ? 'cursor-pointer' : 'cursor-default'}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(249,115,22,0.15)] flex items-center justify-center text-[#F97316] flex-shrink-0">
                      <contact.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#94A3B8] mb-1">{contact.title}</p>
                      {contact.lines.map((line, j) => (
                        <p key={j} className="text-white font-medium">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Map */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-[#334155]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=1190558680"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full min-h-[400px]"
                title="Офис НеоСтрой"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
