import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

const stats = [
  { value: 68000, suffix: ' м²', label: 'ООО «Евродон» — крупнейший объект' },
  { value: 46000, suffix: ' м²', label: 'ООО «ТагАЗ» — цеховые площади' },
  { value: 50, suffix: '+', label: 'Крупных объектов' },
  { value: 15, suffix: '+', label: 'Регионов присутствия' },
];

const clients = [
  { name: 'ООО «Евродон»', area: '68 000 м²', type: 'комплекс работ' },
  { name: 'ООО «ТагАЗ»', area: '46 000 м²', type: 'топпинг, цеха' },
  { name: 'ООО «УМС Минераловодское»', area: '25 000 м²', type: 'топпинг, полимер, ДЭПО' },
  { name: 'Минераловодское вагоноремонтное ДЭПО', area: '20 000 м²', type: 'комплекс работ' },
  { name: 'ООО «МеталлДон»', area: '12 000 м²', type: 'топпинг, завод' },
  { name: 'Мебельная фабрика «ЯНА»', area: '11 000 м²', type: 'топпинг, склад' },
  { name: 'ТЦ «Лента»', area: '11 000 м²', type: 'топпинг, гипермаркет' },
  { name: 'ООО «Славяне»', area: '20 000 м²', type: 'парковка' },
  { name: 'ОАО «ТКЗ Красный котельщик»', area: '7 800 м²', type: 'реконструкция, полимер' },
  { name: 'ООО «Русский Свет»', area: '7 000 м²', type: 'топпинг, склад' },
  { name: 'ООО «Мегаполис»', area: '6 000 м²', type: 'комплекс работ' },
  { name: 'ООО «Еврохим»', area: '4 000 м²', type: 'комплекс работ' },
  { name: 'ООО «Ника»', area: '4 000 м²', type: 'топпинг, цех' },
  { name: 'ООО «Градиент-Юг»', area: '4 100 м²', type: 'топпинг, склад' },
  { name: 'ОАО «Энергопроект Високоградня»', area: '4 100 м²', type: 'комплекс работ' },
];

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(value, 2000, '');
  return (
    <div ref={ref} className="text-center">
      <p className="text-[clamp(32px,4vw,48px)] font-extrabold text-[#F97316]">
        {count}{suffix}
      </p>
      <p className="text-sm text-[#94A3B8] mt-1">{label}</p>
    </div>
  );
}

export default function Clients() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: tableRef, isVisible: tableVisible } = useScrollReveal(0.05);

  return (
    <section id="clients" className="py-28 bg-[#0A0E17]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#F97316] text-xs font-medium tracking-[3px] uppercase mb-4">
            Наши клиенты
          </p>
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-tight tracking-tight text-white mb-4">
            Более 300 000 м² выполненных работ
          </h2>
          <p className="text-lg text-[#94A3B8]">Нам доверяют крупнейшие компании России</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>

        {/* Table */}
        <div
          ref={tableRef}
          className={`glass rounded-2xl overflow-hidden transition-all duration-700 ${
            tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#334155]">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#94A3B8] uppercase tracking-wider">
                    Компания
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#94A3B8] uppercase tracking-wider">
                    Площадь
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#94A3B8] uppercase tracking-wider">
                    Тип работ
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#334155]/50 transition-colors hover:bg-[rgba(249,115,22,0.05)] ${
                      i % 2 === 0 ? 'bg-[rgba(17,24,39,0.4)]' : ''
                    }`}
                  >
                    <td className="px-6 py-3.5 text-white font-medium">{client.name}</td>
                    <td className="px-6 py-3.5 text-[#F97316] font-semibold">{client.area}</td>
                    <td className="px-6 py-3.5 text-[#94A3B8]">{client.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
