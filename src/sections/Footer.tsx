import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Услуги', href: '#services' },
  { label: 'О компании', href: '#about' },
  { label: 'Клиенты', href: '#clients' },
  { label: 'Оборудование', href: '#equipment' },
  { label: 'Контакты', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0E17] border-t border-[#334155]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white mb-3">НЕОСТРОЙ</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              Промышленные полы для любых задач. Работаем по всей России и СНГ.
            </p>
          </div>

          {/* Col 2 - Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Навигация
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#94A3B8] hover:text-[#F97316] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link
                  to="/articles"
                  className="text-[#94A3B8] hover:text-[#F97316] transition-colors"
                >
                  Статьи
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 - Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Контакты
            </h4>
            <ul className="space-y-3 text-[#94A3B8]">
              <li>
                <a href="tel:+79185314302" className="hover:text-[#F97316] transition-colors">
                  +7 (918) 531-43-02
                </a>
              </li>
              <li>
                <a href="tel:+78632624015" className="hover:text-[#F97316] transition-colors">
                  (863) 262-40-15
                </a>
              </li>
              <li>
                <a
                  href="mailto:neostroy.rostov@mail.ru"
                  className="hover:text-[#F97316] transition-colors"
                >
                  neostroy.rostov@mail.ru
                </a>
              </li>
              <li>Ростов-на-Дону, ул. Темерницкая, 41 Б</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#94A3B8]">
            © {new Date().getFullYear()} ООО «Нео Строй». Все права защищены.
          </p>
          <p className="text-sm text-[#94A3B8]">Ростов-на-Дону</p>
        </div>
      </div>
    </footer>
  );
}
