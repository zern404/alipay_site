import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Пополнение Alipay (Алипей) из России | Быстро и надёжно за минуты',
  description: 'Пополнение Alipay и пополнение алипей за минуты. Курс 1 ¥ = 11.40 ₽. Без скрытых комиссий. Безопасное пополнение для оплаты поставщиков в Китае. 800+ операций в день.',
  keywords: 'пополнение alipay, пополнить alipay, alipay россия, alipay из россии, как пополнить alipay',
  alternates: {
    canonical: 'https://popolnit-alipay.com/popolnenie-alipay',
    languages: {
      'ru-RU': 'https://popolnit-alipay.com/popolnenie-alipay',
      'x-default': 'https://popolnit-alipay.com/popolnenie-alipay',
    },
  },
  openGraph: {
    title: 'Пополнение Alipay из России',
    description: 'Пополнение Alipay за минуты с прозрачными курсами',
    url: 'https://popolnit-alipay.com/popolnenie-alipay',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Пополнение Alipay из России',
    description: 'Пополнение Alipay за минуты с прозрачными курсами',
  },
}

const faqItems = [
  {
    question: 'Что такое Alipay и зачем его пополнять?',
    answer: 'Alipay — это китайская платёжная система, которую используют большинство поставщиков в Китае. Если вы закупаете товары в Китае, вам нужно пополнять Alipay для оплаты поставщиков. Мы помогаем пополнять Alipay из России быстро и безопасно.',
  },
  {
    question: 'Сколько стоит пополнение Alipay?',
    answer: 'Курс: 1 ¥ (юань) = 11.40 ₽ (рубль). Это фиксированный курс без скрытых комиссий. Вы видите финальную сумму до оплаты. Например, если нужно пополнить на 1000 юаней, вы заплатите 11 400 рублей.',
  },
  {
    question: 'Как быстро происходит пополнение?',
    answer: 'Пополнение происходит за минуты, не часы и тем более не сутки. Обычно это 5-15 минут после подтверждения оплаты. Мы обрабатываем 800+ операций в день, поэтому скорость — наш приоритет.',
  },
  {
    question: 'Есть ли лимиты на пополнение?',
    answer: 'Лимиты зависят от суммы и частоты операций. Для новых клиентов обычно до 50 000 юаней за операцию. Для постоянных клиентов лимиты выше. Точные лимиты уточняйте у менеджера при запросе.',
  },
  {
    question: 'Безопасно ли пополнение?',
    answer: 'Да, мы работаем с проверенными каналами и прямыми агентами в Китае. Все операции подтверждаются скриншотами. Мы не храним ваши данные и не требуем доступ к вашему аккаунту Alipay. Вы просто получаете пополнение на указанный аккаунт.',
  },
  {
    question: 'Как происходит пополнение?',
    answer: 'Вы пишете в Telegram, указываете сумму в юанях и номер аккаунта Alipay. Мы рассчитываем стоимость в рублях по курсу 1 ¥ = 11.40 ₽. Вы оплачиваете в рублях, мы пополняем ваш Alipay. Всё занимает 5-15 минут.',
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
  name: 'Пополнение Alipay',
  description: 'Пополнение Alipay из России за минуты',
  url: 'https://popolnit-alipay.com/popolnenie-alipay',
  inLanguage: 'ru-RU',
}

export default function AlipayPage() {
  return (
    <>
      <DataLayer pageType="service" siteSection="alipay" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Пополнение Alipay' },
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
                  Пополнение Alipay
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight animate-fade-in-up stagger-1">
                Пополнение Alipay (Алипей) — быстрые и надёжные переводы
              </h1>
              
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl animate-fade-in-up stagger-2">
                Пополнение Alipay из России: курс 1 ¥ = 11.40 ₽, пополнение за минуты, 
                без скрытых комиссий. Как пополнить Alipay быстро и безопасно.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up stagger-3">
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  За минуты
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  1 ¥ = 11.40 ₽
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  800+ операций в день
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                <a
                  href="https://t.me/Dmitriy_kargo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary hover-lift hover-glow"
                >
                  Пополнить Alipay
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
            <h2 className="mb-6 text-white">Как работает пополнение Alipay</h2>
            <p>
              Пополнение Alipay — это услуга для тех, кто работает с китайскими поставщиками. 
              Alipay (также известный как Алипей) — крупнейшая платёжная система Китая, которую 
              используют миллионы поставщиков и продавцов. Если вы закупаете товары в Китае, 
              вам наверняка встречались поставщики, которые принимают оплату только через Alipay.
            </p>
            <p>
              Проблема в том, что пополнить Alipay из России напрямую практически невозможно. 
              Банки не работают с Alipay, а альтернативные способы либо очень медленные, 
              либо дорогие, либо ненадёжные.
            </p>
            <p>
              Мы решаем эту проблему: пополняем Alipay за минуты по прозрачному курсу, 
              без скрытых комиссий и задержек.
            </p>

            <h2 className="mt-12 mb-6 text-white">Пополнение алипей для оплаты товаров и услуг в Китае</h2>
            <p>
              Пополнение Alipay нужно, если вы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li><strong>Закупаете товары в Китае</strong> — большинство поставщиков принимают оплату через Alipay</li>
              <li><strong>Работаете с китайскими продавцами</strong> на маркетплейсах (1688, Taobao, Alibaba)</li>
              <li><strong>Оплачиваете услуги в Китае</strong> — логистика, производство, дизайн</li>
              <li><strong>Ведёте бизнес с Китаем</strong> — регулярные платежи поставщикам</li>
            </ul>
            <p>
              Без Alipay вы не сможете оплатить большинство поставщиков в Китае. Мы помогаем 
              решить эту проблему быстро и безопасно.
            </p>

            <h2 className="mt-12 mb-6 text-white">Кому подходит пополнение Alipay из России</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card card-animated hover-lift">
                <h3 className="text-lg font-medium mb-3 text-white">Предприниматели</h3>
                <p className="text-white/60 text-sm">
                  Кто закупает товары в Китае для продажи в России. Нужен быстрый и надёжный 
                  способ оплаты поставщиков.
                </p>
              </div>
              <div className="card card-animated hover-lift">
                <h3 className="text-lg font-medium mb-3 text-white">Пополнение Alipay для селлеров маркетплейсов</h3>
                <p className="text-white/60 text-sm">
                  Кто работает с Wildberries, Ozon и другими платформами. Регулярно закупают 
                  товары и нуждаются в быстрой оплате.
                </p>
              </div>
              <div className="card card-animated hover-lift">
                <h3 className="text-lg font-medium mb-3 text-white">Пополнение Alipay для компаний</h3>
                <p className="text-white/60 text-sm">
                  С постоянными поставщиками в Китае. Нужны регулярные пополнения для оплаты 
                  инвойсов и заказов.
                </p>
              </div>
              <div className="card card-animated hover-lift">
                <h3 className="text-lg font-medium mb-3 text-white">Пополнение Alipay для байеров</h3>
                <p className="text-white/60 text-sm">
                  Кто закупает товары оптом. Нужна возможность быстро оплатить поставщика, 
                  чтобы не упустить выгодное предложение.
                </p>
              </div>
            </div>

            <h2 className="mt-12 mb-6 text-white">Скорость пополнения Alipay</h2>
            <p>
              <strong>Пополнение происходит за минуты, не часы и тем более не сутки.</strong>
            </p>
            <p>
              Обычно это 5-15 минут после подтверждения оплаты. Мы обрабатываем 800+ операций 
              в день — для нас это обычный ритм. Поэтому мы можем гарантировать скорость.
            </p>
            <p>
              Процесс простой:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li>Вы пишете в Telegram, указываете сумму в юанях</li>
              <li>Мы рассчитываем стоимость в рублях (курс 1 ¥ = 11.40 ₽)</li>
              <li>Вы оплачиваете в рублях</li>
              <li>Мы пополняем ваш Alipay (5-15 минут)</li>
              <li>Вы получаете подтверждение со скриншотом</li>
            </ol>

            <h2 className="mt-12 mb-6 text-white">Курсы и тарифы</h2>
            <div className="card mb-6 bg-surface/50 border-l-4 border-white/10">
              <h3 className="text-lg font-medium mb-4">Курс пополнения Alipay из России</h3>
              <p className="text-xl font-medium text-white mb-2">1 ¥ = 11.40 ₽</p>
              <p className="text-white/70 text-sm">
                Это фиксированный курс без скрытых комиссий. Вы видите финальную сумму до оплаты. 
                Например, если нужно пополнить на 1000 юаней, вы заплатите 11 400 рублей — и это всё, 
                никаких дополнительных платежей.
              </p>
            </div>
            <p>
              Мы работаем с прямыми агентами в Китае, поэтому можем предложить выгодный курс. 
              Не нужно искать посредников или переплачивать за «удобство» — мы даём реальный курс.
            </p>

            <h2 className="mt-12 mb-6 text-white">Лимиты</h2>
            <p>
              Лимиты зависят от суммы и частоты операций:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li><strong>Новые клиенты:</strong> до 50 000 юаней за операцию</li>
              <li><strong>Постоянные клиенты:</strong> до 200 000 юаней за операцию</li>
              <li><strong>VIP-клиенты:</strong> индивидуальные лимиты</li>
            </ul>
            <p>
              Если вам нужно пополнить больше лимита, мы можем разбить операцию на несколько 
              частей или увеличить лимит после проверки. Точные лимиты уточняйте у менеджера 
              при запросе.
            </p>

            <h2 className="mt-12 mb-6 text-white">Безопасность пополнения Alipay</h2>
            <p>
              Мы работаем с проверенными каналами и прямыми агентами в Китае. Все операции 
              подтверждаются скриншотами — вы видите, что деньги действительно поступили на 
              ваш аккаунт Alipay.
            </p>
            <p>
              Мы не храним ваши данные и не требуем доступ к вашему аккаунту Alipay. Вы просто 
              указываете номер аккаунта (телефон или email), мы пополняем — и всё. Никаких 
              дополнительных действий с вашей стороны не требуется.
            </p>
            <p>
              Если возникают вопросы или проблемы — ваш менеджер решает их в течение часа. 
              Мы не бросаем клиентов после оплаты.
            </p>

            <h2 className="mt-12 mb-6 text-white">Как происходит пополнение (пошагово)</h2>
            <div className="space-y-4 mb-8">
              <div className="card card-animated hover-lift">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">1</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Пополнение Alipay: запрос</h3>
                    <p className="text-white/60">Напишите в Telegram: сумму в юанях и номер аккаунта Alipay (телефон или email).</p>
                  </div>
                </div>
              </div>
              <div className="card card-animated hover-lift">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">2</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Пополнение Alipay: расчёт стоимости</h3>
                    <p className="text-white/60">Мы рассчитываем стоимость в рублях по курсу 1 ¥ = 11.40 ₽ и отправляем вам счёт.</p>
                  </div>
                </div>
              </div>
              <div className="card card-animated hover-lift">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">3</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Пополнение Alipay: оплата</h3>
                    <p className="text-white/60">Вы оплачиваете в рублях удобным способом (карта, перевод, криптовалюта).</p>
                  </div>
                </div>
              </div>
              <div className="card card-animated hover-lift">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">4</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Пополнение Alipay: выполнение</h3>
                    <p className="text-white/60">Мы пополняем ваш Alipay (5-15 минут) и отправляем подтверждение со скриншотом.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-surface/50 border-l-4 border-white/10">
              <h3 className="text-lg font-medium mb-3">Комбо-услуги: пополнение Alipay + карго доставка</h3>
              <p className="text-white/70 mb-4 text-sm">
                Заказываете пополнение Alipay? Добавьте карго-доставку из Китая — получите 
                приоритетную обработку и одного менеджера для всех услуг.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kargo-dostavka-iz-kitaya" className="btn-text">
                  Карго-доставка
                </Link>
                <Link href="/popolnenie-wechat-pay" className="btn-text">
                  Пополнение WeChat Pay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA 
        text="Готовы пополнить Alipay?"
        buttonText="Пополнить Alipay в Telegram"
      />
    </>
  )
}
