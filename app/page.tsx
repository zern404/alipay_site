import Link from 'next/link'
import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'
import TelegramPromptModal from '@/components/TelegramPromptModal'

export const metadata: Metadata = {
  title: 'Пополнение Alipay, WeChat и карго доставка из Китая | Быстро и надёжно',
  description: 'Пополнение Alipay (пополнение алипей), пополнение WeChat за минуты. Карго-доставка из Китая за 10 дней, оплата инвойсов поставщикам. Прямые агенты в Китае, Турции, ОАЭ.',
  keywords: 'карго из китая, доставка грузов из китая, пополнение alipay, wechat pay россия, оплата инвойсов китай, международные платежи',
  alternates: {
    canonical: 'https://popolnit-alipay.com',
    languages: {
      'ru-RU': 'https://popolnit-alipay.com',
      'x-default': 'https://popolnit-alipay.com',
    },
  },
  openGraph: {
    title: 'Карго и платежи в Китае под ключ',
    description: 'Пополнение Alipay и WeChat Pay, оплата инвойсов, карго-доставка без задержек',
    url: 'https://popolnit-alipay.com',
    siteName: 'Kargo By Kim',
    images: [
      {
        url: 'https://popolnit-alipay.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kargo By Kim - Карго и платежи в Китае',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Карго и платежи в Китае под ключ',
    description: 'Пополнение Alipay и WeChat Pay, оплата инвойсов, карго-доставка без задержек',
    images: ['https://popolnit-alipay.com/og-image.jpg'],
  },
}

const serviceData = {
  name: 'Kargo By Kim - Карго и платежи в Китае',
  description: 'Карго-доставка из Китая, пополнение Alipay и WeChat Pay, оплата инвойсов поставщикам',
  provider: {
    '@type': 'Organization',
    name: 'Kargo By Kim',
    url: 'https://popolnit-alipay.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Россия',
  },
  serviceType: ['Карго-доставка', 'Пополнение кошельков', 'Международные платежи'],
}

const itemListData = {
  name: 'Услуги Kargo By Kim',
  description: 'Полный список услуг по карго-доставке и финансовым услугам',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Карго-доставка из Китая',
      url: 'https://popolnit-alipay.com/kargo-dostavka-iz-kitaya',
      description: 'Гарантированная доставка за 10 дней',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Пополнение Alipay',
      url: 'https://popolnit-alipay.com/popolnenie-alipay',
      description: 'Пополнение за минуты, курс 1 ¥ = 11.40 ₽',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'Пополнение WeChat Pay',
      url: 'https://popolnit-alipay.com/popolnenie-wechat-pay',
      description: 'Пополнение за минуты для работы с поставщиками',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'Оплата инвойсов в Китае',
      url: 'https://popolnit-alipay.com/oplata-invoisov-v-kitae',
      description: 'Оплата инвойсов поставщикам быстро и безопасно',
    },
    {
      '@type': 'Service',
      position: 5,
      name: 'Международные платежи',
      url: 'https://popolnit-alipay.com/mezhdunarodnye-platezhi',
      description: 'Пополнение PayPal, Binance, Wise и других кошельков',
    },
  ],
}

const howToData = {
  name: 'Как заказать услуги Kargo By Kim',
  description: 'Пошаговая инструкция по заказу карго-доставки и финансовых услуг',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Запрос',
      text: 'Напишите в Telegram слово «Комбо» или укажите нужную услугу. Мы ответим в течение 5 минут.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Расчёт',
      text: 'Получите детальный расчёт с финальной стоимостью. Без скрытых платежей, всё прозрачно.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Выполнение',
      text: 'Мы выполняем заказ: отправляем груз, пополняем кошелёк или оплачиваем инвойс.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Подтверждение',
      text: 'Вы получаете подтверждение: трек-номер для груза, скриншот пополнения или оплаты.',
    },
  ],
}

export default function Home() {
  return (
    <>
      <DataLayer pageType="home" siteSection="main" />
      <StructuredDataGenerator type="Service" data={serviceData} />
      <StructuredDataGenerator type="ItemList" data={itemListData} />
      <StructuredDataGenerator type="HowTo" data={howToData} />
      <TelegramPromptModal />
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding-sm bg-background">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="relative rounded-3xl border border-white/5 bg-surface/50 p-8 sm:p-20 shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Inner decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6 animate-fade-in-down">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md rounded-2xl hover-lift">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Логистика и финансовые услуги для бизнеса
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight animate-fade-in-up stagger-1">
                Пополнение Alipay, WeChat и оплата инвойсов для работы с Китаем
              </h1>
              
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl animate-fade-in-up stagger-2">
                Мы предоставляем услуги пополнения Alipay (пополнение алипей), пополнение WeChat, 
                а также сопровождаем оплату инвойсов и логистику. Работаем с предпринимателями 
                и компаниями, поставки и платежи ежедневно.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up stagger-3">
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Гарантированная доставка
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Прямые каналы
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Прозрачные тарифы
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                <a
                  href="https://t.me/Dmitriy_kargo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hover-lift hover-glow"
                >
                  Запросить расчёт
                </a>
                <a
                  href="https://t.me/Dmitriy_kargo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary hover-lift"
                >
                  Связаться в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Bar - Trust Signals */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <div className="rounded-2xl border border-white/5 bg-surface/30 p-6 backdrop-blur-sm animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/20 p-4 border border-white/5 hover:border-white/10 transition-all duration-300 rounded-xl hover-lift card-animated stagger-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Операции</h3>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  200+ в день
                </div>
              </div>
              <div className="bg-black/20 p-4 border border-white/5 hover:border-white/10 transition-all duration-300 rounded-xl hover-lift card-animated stagger-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Текущий статус</h3>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Всё работает
                </div>
              </div>
              <div className="bg-black/20 p-4 border border-white/5 hover:border-white/10 transition-all duration-300 rounded-xl hover-lift card-animated stagger-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">География</h3>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  Китай, Турция, ОАЭ
                </div>
              </div>
              <div className="bg-black/20 p-4 border border-white/5 hover:border-white/10 transition-all duration-300 rounded-xl hover-lift card-animated stagger-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Работаем</h3>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  С 2020 года
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Для кого сервис */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Для кого этот сервис</h2>
            <p className="text-white/60 text-lg">
              Решения для компаний и предпринимателей, которые работают с Китаем
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Предприниматели',
                description: 'Кто ведёт товарный бизнес и работает с поставщиками в Китае. Регулярные закупки требуют надёжной карго доставки из Китая и быстрого пополнения Alipay, WeChat Pay для оплаты поставщиков.',
              },
              {
                title: 'Селлеры маркетплейсов',
                description: 'Wildberries, Ozon, Яндекс.Маркет и другие платформы. Постоянные поставки товаров из Китая через карго доставку для пополнения складов. Пополнение Alipay и WeChat Pay для оплаты поставщиков.',
              },
              {
                title: 'Байеры и посредники',
                description: 'Кто закупает товары оптом и нуждается в быстрой карго доставке из Китая. Оптимизация сроков и стоимости логистики критична для бизнеса. Пополнение Alipay, WeChat Pay для быстрой оплаты.',
              },
              {
                title: 'Компании с поставщиками',
                description: 'Бизнесы, которые регулярно оплачивают инвойсы в Китае через пополнение Alipay и WeChat Pay. Нужны стабильные каналы платежей, карго доставка из Китая и предсказуемые сроки доставки.',
              },
            ].map((item, index) => (
              <div key={index} className="card-surface card-animated hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Пополнение Alipay и WeChat для работы с Китаем</h2>
            <p className="text-white/60 text-lg">
              Комплексные решения для финансовых операций и логистики с Китаем
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Карго-доставка из Китая',
                description: 'Гарантированная доставка автотранспортом за 10 дней от момента отправки, без задержек на границе. Мы используем приоритетные каналы и прямых агентов в Китае, поэтому груз идёт быстрее, чем у большинства перевозчиков. Предлагаем два варианта тарификации: фиксированная ставка для стандартных отправок или расчёт по весу контейнера для крупных партий. Отслеживание на каждом этапе: отправка из Китая, прохождение таможни, движение по России, доставка до вашего города. Автомобильная доставка подходит для большинства заказов (до 20 м³), контейнерная — для оптовых поставок (от 20 м³). Всё оформление документов, таможенное декларирование и логистику берём на себя.',
                link: '/kargo-dostavka-iz-kitaya',
              },
              {
                title: 'Пополнение Alipay',
                description: 'Пополнение Alipay за минуты, не часы и тем более не сутки. Курс 1 ¥ = 11.40 ₽ — фиксированный, без скрытых комиссий. Вы видите финальную сумму до оплаты. Обрабатываем 800+ операций в день — для нас это обычный ритм. Подходит предпринимателям, которые работают с поставщиками на Taobao, 1688, Alibaba и других китайских платформах. Селлерам маркетплейсов для регулярных закупок товаров. Компаниям, которым нужны стабильные каналы платежей. Процесс простой: напишите сумму в юанях и номер аккаунта Alipay (телефон или email), получите расчёт, оплатите, получите пополнение с подтверждением скриншотом. Безопасно, быстро, прозрачно.',
                link: '/popolnenie-alipay',
              },
              {
                title: 'Пополнение WeChat Pay',
                description: 'Быстрое пополнение WeChat Pay для работы с китайскими поставщиками, которые предпочитают этот платёжный метод. WeChat Pay интегрирован в мессенджер WeChat и удобен для небольших и средних поставщиков, часто используется для быстрых платежей. Те же условия, что и для Alipay: курс 1 ¥ = 11.40 ₽, пополнение за минуты, обработка 800+ операций в день. Подходит для тех, кто работает с поставщиками, принимающими только WeChat Pay, или для диверсификации платёжных каналов. Процесс идентичен Alipay: указываете сумму и номер WeChat Pay, получаете расчёт, оплачиваете, получаете пополнение с подтверждением. Один менеджер может обработать и карго, и пополнение кошелька — всё в комплексе.',
                link: '/popolnenie-wechat-pay',
              },
              {
                title: 'Оплата инвойсов поставщикам',
                description: 'Оплата инвойсов в юанях напрямую поставщикам в Китае. Многие поставщики требуют оплату по инвойсу, но напрямую из России это сложно или невозможно. Мы решаем эту проблему: принимаем инвойс, конвертируем рубли в юани по курсу 1 ¥ = 11.40 ₽, оплачиваем поставщику через Alipay, WeChat Pay или банковский перевод. Подтверждение оплаты отправляем в течение 1-2 часов после выполнения. Обработка за 1-2 часа в рабочее время. Работаем с любыми суммами, от небольших заказов до крупных контрактов. Подходит компаниям, которые регулярно оплачивают инвойсы в Китае и нуждаются в стабильных каналах платежей с предсказуемыми сроками. Для комбо-клиентов — приоритетная обработка и один менеджер для всех операций.',
                link: '/oplata-invoisov-v-kitae',
              },
              {
                title: 'Международные платежи',
                description: 'Пополнение PayPal, Binance, Wise и ещё 15+ кошельков. Работаем с Китаем, Турцией, ОАЭ и другими странами. Прямые агенты в ключевых странах обеспечивают скорость и контроль над процессом. Международные кошельки: PayPal, Binance, Wise, Revolut, Skrill, Neteller и другие. Китайские кошельки: Alipay, WeChat Pay. Для бизнеса: оплата поставщиков за границей, пополнение корпоративных кошельков, международные переводы. Для частных лиц: пополнение личных кошельков, переводы родственникам, оплата услуг. Скорость операций — минуты, не часы. Прозрачные тарифы без скрытых комиссий. Подтверждение каждой операции. Обрабатываем сотни операций ежедневно, стабильные сроки без исключений.',
                link: '/mezhdunarodnye-platezhi',
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative flex flex-col border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300 rounded-2xl card-animated hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                <div className="relative flex h-full flex-col justify-between bg-black/40 p-6 rounded-xl">
                  <div>
                    <h3 className="text-lg font-medium mb-4 text-white group-hover:text-white/90 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{service.description}</p>
                  </div>
                  <span className="btn-text text-white/70 hover:text-white">
                    Подробнее →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Почему нам доверяют */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-surface/50 p-8 shadow-2xl backdrop-blur-sm">
            <div className="max-w-3xl mb-8">
              <h2 className="mb-4">Почему доверяют карго доставке из Китая и пополнению Alipay, WeChat Pay</h2>
              <p className="text-white/60 text-lg">
                Стабильность, прозрачность и масштаб операций
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Скорость операций',
                  description: 'Карго доставка из Китая за 10 дней от момента отправки, пополнение Alipay и WeChat Pay за минуты, не часы и тем более не сутки. Обрабатываем 200+ операций ежедневно — для нас это обычный ритм. Стабильные сроки без исключений, приоритетные каналы и прямые агенты в Китае, Турции, ОАЭ обеспечивают максимальную скорость. Каждая операция контролируется на каждом этапе, от запроса до подтверждения.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Прозрачные тарифы',
                  description: 'Курс пополнения Alipay и WeChat Pay: 1 ¥ = 11.40 ₽ — фиксированный, без скрытых комиссий. Вы видите финальную сумму до оплаты, никаких сюрпризов. Фиксированные тарифы на карго доставку из Китая для стандартных отправок или расчёт по весу контейнера для крупных партий. Все условия прозрачны, подтверждение каждой операции скриншотами или документами. Для комбо-клиентов — специальные тарифы и приоритетная обработка.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Персональное сопровождение',
                  description: 'Один менеджер для карго доставки из Китая и пополнения Alipay, WeChat Pay — логистика и финансы в одном лице. Прямая связь в Telegram, без автоматических ответов и долгих ожиданий. Решение вопросов в течение часа в рабочее время, приоритетная обработка для постоянных клиентов. Персональный подход к каждому заказу, консультации по товарному бизнесу и сопровождение до первой прибыли.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Прямые каналы',
                  description: 'Собственные агенты в Китае, Турции, ОАЭ — работа без посредников обеспечивает скорость карго доставки из Китая и пополнения Alipay, WeChat Pay. Прямые каналы означают отсутствие лишних складов, приоритетное оформление и отслеживание на каждом этапе. Груз идёт быстрее, чем у большинства перевозчиков, платежи обрабатываются напрямую, без задержек. География работы расширяется, но качество остаётся на высшем уровне.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  ),
                },
                {
                  title: 'Репутация',
                  description: 'Сотни клиентов, большинство возвращаются за повторными заказами карго доставки из Китая и пополнения Alipay, WeChat Pay — это лучший показатель качества. Работаем с 2020 года, ежедневные операции, сотни отзывов от довольных клиентов. Репутация строится на стабильности, прозрачности и скорости. Мы не обещаем невозможного, но выполняем то, что обещаем. Каждый клиент важен, каждая операция контролируется.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ),
                },
                {
                  title: 'Надёжность',
                  description: 'Гарантированная карго доставка из Китая без задержек на границе благодаря приоритетным каналам и прямым агентам. Надёжное пополнение Alipay и WeChat Pay с подтверждением каждой операции. Приоритетное оформление для постоянных клиентов, решение проблем в течение 24 часов. Если всё же возникла задержка — решаем вопрос оперативно. Для комбо-клиентов действует приоритетная обработка заказов и платежей. Надёжность — это не просто слова, это ежедневная работа и контроль качества.',
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-4 p-4 hover:bg-white/5 transition-all duration-300 rounded-xl hover-lift card-animated" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary rounded-lg hover-glow">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Как мы работаем */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Как мы работаем: карго доставка и пополнение Alipay, WeChat Pay</h2>
            <p className="text-white/60 text-lg">
              Процесс от запроса до подтверждения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Запрос',
                description: 'Оставьте запрос в Telegram или укажите нужную услугу. Ответ в течение 5 минут в рабочее время.',
              },
              {
                step: '02',
                title: 'Расчёт',
                description: 'Получаете детальный расчёт с финальной стоимостью. Без скрытых платежей, все условия прозрачны.',
              },
              {
                step: '03',
                title: 'Выполнение',
                description: 'Выполняем заказ: отправляем груз, пополняем кошелёк или оплачиваем инвойс. Контроль на каждом этапе.',
              },
              {
                step: '04',
                title: 'Подтверждение',
                description: 'Получаете подтверждение: трек-номер для груза, скриншот пополнения или документ об оплате.',
              },
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-white/10 pl-6 rounded-l-lg card-animated hover-lift" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-white/40 text-sm font-mono mb-2">{item.step}</div>
                <h3 className="text-lg font-medium mb-3 text-white">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* География и направления */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">География карго доставки и пополнения Alipay, WeChat Pay</h2>
            <p className="text-white/60 text-lg">
              Прямые каналы в ключевых странах для логистики и финансовых операций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                country: 'Китай',
                services: ['Карго доставка из Китая', 'Пополнение Alipay из России', 'Пополнение WeChat Pay', 'Оплата инвойсов в Китае', 'Прямые агенты'],
              },
              {
                country: 'Турция',
                services: ['Международные платежи', 'Пополнение кошельков', 'Карго доставка через Турцию', 'Логистические каналы'],
              },
              {
                country: 'ОАЭ',
                services: ['Международные переводы', 'Пополнение PayPal, Binance, Wise', 'Финансовые операции', 'Логистика'],
              },
            ].map((item, index) => (
              <div key={index} className="card-surface card-animated hover-lift" style={{ animationDelay: `${index * 0.15}s` }}>
                <h3 className="text-lg font-medium mb-4 text-white">{item.country}</h3>
                <ul className="space-y-2">
                  {item.services.map((service, idx) => (
                    <li key={idx} className="text-white/60 text-sm flex items-start animate-fade-in" style={{ animationDelay: `${(index * 0.15) + (idx * 0.05)}s` }}>
                      <span className="text-white/40 mr-2">—</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Комбо-услуги */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="mb-4">Комбо-услуги: пополнение Alipay, WeChat Pay и карго доставка</h2>
              <p className="text-white/60 text-lg">
                Комплексное обслуживание для постоянных клиентов
              </p>
            </div>
            <div className="border border-white/10 bg-surface/50 p-8 backdrop-blur-sm rounded-2xl mb-12">
              <h3 className="text-xl font-semibold mb-4 text-white">Карго-доставка и логистика из Китая</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Карго доставка из Китая гарантированно за 10 дней от момента отправки, без задержек на границе. 
                Мы используем приоритетные каналы и прямых агентов в Китае. Карго из Китая — это дополнительная 
                услуга для тех, кто закупает товары и нуждается в быстрой логистике. Предлагаем автомобильную 
                доставку для стандартных отправок и контейнерную для крупных партий.
              </p>
            </div>
            <div className="border border-white/10 bg-surface/50 p-8 backdrop-blur-sm rounded-2xl">
              <h3 className="text-lg font-medium mb-6 text-white">Условия для комбо-клиентов</h3>
              <ul className="space-y-4">
                {[
                  'Приоритетная обработка заказов и платежей',
                  'Один менеджер для всех операций — логистика и финансы',
                  'Бесплатный выкуп товара и доставка по Китаю',
                  'Международный обмен валют и пополнение зарубежных кошельков',
                  'Консультации по товарному бизнесу и сопровождение',
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-white/70">
                    <span className="text-white/40 mr-3 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
