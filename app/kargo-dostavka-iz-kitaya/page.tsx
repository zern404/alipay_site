import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Карго доставка из Китая за 10 дней | Гарантированная доставка грузов',
  description: 'Карго из Китая с гарантией 10 дней. Доставка авто и контейнерами, отслеживание на каждом этапе. Фиксированные тарифы или по весу. Без задержек на границе.',
  keywords: 'карго из китая, доставка грузов из китая, карго доставка китай, доставка из китая, карго китай россия',
  alternates: {
    canonical: 'https://popolnit-alipay.com/kargo-dostavka-iz-kitaya',
    languages: {
      'ru-RU': 'https://popolnit-alipay.com/kargo-dostavka-iz-kitaya',
      'x-default': 'https://popolnit-alipay.com/kargo-dostavka-iz-kitaya',
    },
  },
  openGraph: {
    title: 'Карго доставка из Китая за 10 дней',
    description: 'Гарантированная доставка грузов из Китая без задержек на границе',
    url: 'https://popolnit-alipay.com/kargo-dostavka-iz-kitaya',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Карго доставка из Китая за 10 дней',
    description: 'Гарантированная доставка грузов из Китая без задержек на границе',
  },
}

const faqItems = [
  {
    question: 'Сколько стоит карго-доставка из Китая?',
    answer: 'Стоимость зависит от веса, объёма и выбранного тарифа. Мы предлагаем фиксированные ставки для стандартных отправок или расчёт по весу контейнера. Точную стоимость рассчитаем после получения данных о грузе. Обычно это 15-25% от стоимости товара, но может варьироваться.',
  },
  {
    question: 'Как долго идёт доставка?',
    answer: 'Гарантированная доставка авто — 10 дней от момента отправки. Это реальные сроки, без «задержек на границе». Мы используем приоритетные каналы и прямых агентов в Китае, поэтому груз идёт быстрее, чем у большинства перевозчиков.',
  },
  {
    question: 'Можно ли отследить груз?',
    answer: 'Да, мы предоставляем трек-номер и отслеживание на каждом этапе: отправка из Китая, прохождение таможни, движение по России, доставка до вашего города. Вы всегда знаете, где находится ваш груз.',
  },
  {
    question: 'Что делать, если груз задержали на границе?',
    answer: 'Мы работаем с приоритетными каналами и прямыми агентами, поэтому такие ситуации крайне редки. Если всё же возникла задержка, мы решаем вопрос в течение 24 часов. Для комбо-клиентов действует приоритетное оформление.',
  },
  {
    question: 'Какие форматы доставки доступны?',
    answer: 'Автомобильная доставка (до 10 дней) и контейнерная (для крупных партий). Выбирайте формат в зависимости от объёма и срочности. Авто подходит для большинства заказов, контейнеры — для оптовых поставок.',
  },
  {
    question: 'Нужно ли оформлять документы самостоятельно?',
    answer: 'Нет, мы берём всё на себя: оформление документов, таможенное декларирование, логистику. Вам нужно только предоставить данные о товаре и адрес доставки. Всё остальное делаем мы.',
  },
]

const faqStructuredData = {
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const webPageData = {
  '@type': 'WebPage',
  name: 'Карго-доставка из Китая',
  description: 'Гарантированная доставка грузов из Китая за 10 дней',
  url: 'https://popolnit-alipay.com/kargo-dostavka-iz-kitaya',
  inLanguage: 'ru-RU',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Kargo By Kim',
    url: 'https://popolnit-alipay.com',
  },
}

export default function KargoPage() {
  return (
    <>
      <DataLayer pageType="service" siteSection="cargo" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Карго-доставка из Китая' },
      ]} />
      <StructuredDataGenerator type="WebPage" data={webPageData} />
      <StructuredDataGenerator type="FAQPage" data={faqStructuredData} />
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
                  Карго-доставка из Китая
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight animate-fade-in-up stagger-1">
                Карго доставка из Китая — гарантированная доставка грузов за 10 дней
              </h1>
              
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl animate-fade-in-up stagger-2">
                Автомобильная и контейнерная доставка грузов из Китая в Россию. 
                Без задержек на границе, отслеживание на каждом этапе, фиксированные тарифы.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up stagger-3">
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  10 дней гарантия
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Отслеживание груза
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Прямые каналы
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                <a
                  href="https://t.me/Dmitriy_kargo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hover-lift hover-glow"
                >
                  Рассчитать доставку
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

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-white">Карго доставка из Китая: что это такое</h2>
            <p className="text-white/70">
              Карго — это доставка грузов из Китая в Россию без посредников и лишних задержек. 
              Мы работаем напрямую с агентами в Китае, поэтому можем гарантировать сроки и 
              контролировать процесс на каждом этапе.
            </p>
            <p>
              В отличие от обычной почты или курьерских служб, карго-доставка оптимизирована 
              для бизнеса: быстрее, дешевле и надёжнее. Мы перевозим товары для предпринимателей, 
              селлеров маркетплейсов и компаний, которые регулярно закупают в Китае.
            </p>

            <h2 className="mt-12 mb-6 text-white">Сроки карго доставки из Китая</h2>
            <p>
              <strong>Гарантированная доставка авто — 10 дней</strong> от момента отправки из Китая. 
              Это не обещание «от 7 до 30 дней», а реальный срок, который мы соблюдаем.
            </p>
            <p>
              Почему мы можем гарантировать сроки? Потому что работаем с приоритетными каналами 
              и прямыми агентами. Груз не задерживается на границе, не теряется на складах 
              посредников — идёт напрямую от поставщика к вам.
            </p>
            <p>
              Для срочных заказов возможна экспресс-доставка за 7 дней (дополнительная плата). 
              Для крупных партий — контейнерная доставка с индивидуальным расчётом сроков.
            </p>

            <h2 className="mt-12 mb-6 text-white">Форматы карго доставки из Китая</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="group relative flex flex-col border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300 rounded-2xl card-animated hover-lift">
                <div className="relative z-10 bg-surface/50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3 text-white">Автомобильная карго доставка из Китая</h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    Подходит для большинства заказов. Груз идёт автотранспортом через Казахстан 
                    или другие приграничные пункты. Оптимальное соотношение скорости и стоимости.
                  </p>
                  <ul className="text-sm text-white/60 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Срок: 10 дней
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Объём: до 20 м³
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Вес: до 5 тонн
                    </li>
                  </ul>
                </div>
              </div>
              <div className="group relative flex flex-col border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300 rounded-2xl card-animated hover-lift">
                <div className="relative z-10 bg-surface/50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-3 text-white">Контейнерная карго доставка из Китая</h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    Для крупных партий и оптовых закупок. Контейнеры 20 или 40 футов. 
                    Индивидуальный расчёт сроков и стоимости.
                  </p>
                  <ul className="text-sm text-white/60 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Срок: от 14 дней
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Объём: от 20 м³
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      Вес: от 5 тонн
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="mt-12 mb-6 text-white">Тарифы на карго доставку из Китая</h2>
            <p>
              Мы предлагаем два варианта тарификации:
            </p>
            <div className="group relative flex flex-col border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300 rounded-2xl mb-6">
              <div className="relative z-10 bg-surface/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-white">Тарифы карго доставки: фиксированная ставка</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Подходит для стандартных отправок. Вы знаете точную стоимость доставки заранее, 
                  без сюрпризов. Фиксированная ставка зависит от объёма и веса, но не меняется 
                  в процессе доставки.
                </p>
              </div>
            </div>
            <div className="group relative flex flex-col border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300 rounded-2xl mb-6">
              <div className="relative z-10 bg-surface/50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-white">Тарифы карго доставки: расчёт по весу контейнера</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Для крупных партий и контейнерных отправок. Стоимость рассчитывается исходя 
                  из фактического веса груза. Прозрачный расчёт, без скрытых платежей.
                </p>
              </div>
            </div>
            <p>
              Точную стоимость рассчитаем после получения данных о вашем грузе. Напишите в 
              Telegram — ответим в течение 5 минут с детальным расчётом.
            </p>

            <h2 className="mt-12 mb-6 text-white">Отслеживание карго доставки из Китая</h2>
            <p>
              Вы получаете трек-номер сразу после отправки груза из Китая. Отслеживание доступно 
              на каждом этапе:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/60 mb-6 ml-4 text-sm">
              <li>Отправка из Китая — подтверждение от нашего агента</li>
              <li>Движение до границы — обновления каждые 2-3 дня</li>
              <li>Прохождение таможни — уведомление о прохождении</li>
              <li>Движение по России — трекинг до вашего города</li>
              <li>Доставка — подтверждение получения</li>
            </ul>
            <p>
              Мы не бросаем груз «в пути» и не оставляем вас без информации. Если возникают 
              вопросы — ваш менеджер ответит в течение часа.
            </p>

            <h2 className="mt-12 mb-6 text-white">Карго доставка из Китая: почему без задержек на границе</h2>
            <p>
              Большинство перевозчиков не могут гарантировать сроки, потому что работают через 
              посредников. Груз может застрять на складе, в очереди на таможне или потеряться 
              в логистической цепочке.
            </p>
            <p>
              Мы работаем иначе:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/60 mb-6 ml-4 text-sm">
              <li><strong>Прямые агенты в Китае</strong> — груз отправляется напрямую, без лишних складов</li>
              <li><strong>Приоритетные каналы</strong> — используем проверенные маршруты с минимальными задержками</li>
              <li><strong>Профессиональное оформление</strong> — документы готовятся заранее, таможня проходит быстро</li>
              <li><strong>Контроль на каждом этапе</strong> — мы знаем, где груз, и решаем проблемы до их возникновения</li>
            </ul>
            <p>
              Для комбо-клиентов (тех, кто заказывает карго + финансовые услуги) действует 
              приоритетное оформление — обрабатываем в первую очередь.
            </p>

            <h2 className="mt-12 mb-6 text-white">Кому подходит карго доставка из Китая</h2>
            <p>
              Карго-доставка идеальна для:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/60 mb-6 ml-4 text-sm">
              <li><strong>Предпринимателей</strong>, которые закупают товары в Китае для продажи в России</li>
              <li><strong>Селлеров маркетплейсов</strong> (Wildberries, Ozon, Яндекс.Маркет) — регулярные поставки</li>
              <li><strong>Байеров и посредников</strong> — оптовые закупки с быстрой доставкой</li>
              <li><strong>Компаний</strong> с постоянными поставщиками в Китае</li>
              <li><strong>Частных лиц</strong>, которые заказывают крупные партии товаров</li>
            </ul>
            <p>
              Если вы заказываете товары в Китае регулярно (хотя бы раз в месяц), карго-доставка 
              сэкономит вам время и деньги по сравнению с почтой или курьерскими службами.
            </p>

            <div className="mt-12 relative rounded-2xl border border-white/10 bg-surface/50 p-8 shadow-2xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">Комбо-услуги: карго доставка + пополнение Alipay и WeChat Pay</h3>
              <p className="text-white/70 mb-6 text-sm leading-relaxed">
                Заказываете карго? Добавьте пополнение Alipay или WeChat Pay для оплаты поставщика — 
                получите приоритетную обработку и одного менеджера для всех услуг.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/popolnenie-alipay" className="btn-text">
                  Пополнение Alipay →
                </Link>
                <Link href="/popolnenie-wechat-pay" className="btn-text">
                  Пополнение WeChat Pay →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA 
        text="Готовы рассчитать стоимость доставки?"
        buttonText="Рассчитать доставку в Telegram"
      />
    </>
  )
}
