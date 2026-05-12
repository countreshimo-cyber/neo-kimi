import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../sections/Footer';

const articles = [
  {
    title: 'Бетонные полы',
    desc: 'Всё о бетонных промышленных полах: технологии устройства, виды упрочняющих покрытий, требования к основанию и этапы работ.',
  },
  {
    title: 'Полимерные полы',
    desc: 'Обзор полимерных покрытий: эпоксидные, полиуретановые, полиуретанцементные системы. Области применения и технические характеристики.',
  },
  {
    title: 'Наливные полы',
    desc: 'Технология устройства наливных полов: самовыравнивающиеся смеси, этапы подготовки и заливки, сроки эксплуатации.',
  },
  {
    title: 'Виды бетонных полов',
    desc: 'Классификация промышленных бетонных полов по типу нагрузок, покрытиям и назначению. Как выбрать оптимальное решение.',
  },
];

export default function ArticlesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px]">
        {/* Header */}
        <section className="py-16 bg-[#0A0E17]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#F97316] transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              На главную
            </Link>
            <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
              Полезная информация
            </p>
            <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight text-white">
              Статьи о полах
            </h1>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-[#111827]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((article, i) => (
                <div
                  key={i}
                  className="group p-8 bg-[#1E293B] border border-[#334155] rounded-2xl transition-all duration-300 hover:border-[#F97316] hover:glow-orange hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-[rgba(249,115,22,0.15)] flex items-center justify-center text-[#F97316] mb-5 group-hover:bg-[rgba(249,115,22,0.25)] transition-colors">
                    <BookOpen size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed">{article.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
