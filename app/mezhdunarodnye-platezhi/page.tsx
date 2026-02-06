import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Международные платежи | Пополнение PayPal, Binance, Wise',
  description: 'Международные платежи и пополнение зарубежных кошельков: PayPal, Binance, Wise, Alipay, WeChat Pay и другие. Для бизнеса и частных лиц. Быстро и безопасно.',
  keywords: 'международные платежи, пополнение paypal, пополнение binance, пополнение wise, международные переводы',
  openGraph: {
    title: 'Международные платежи',
    description: 'Пополнение PayPal, Binance, Wise и других зарубежных кошельков',
  },
}

const faqItems = [
  {
    question: 'Какие кошельки можно пополнить?',
    answer: 'Мы пополняем Alipay, WeChat Pay, PayPal, Binance, Wise и ещё 15+ кошельков. Полный список уточняйте у менеджера. Если нужного кошелька нет в списке — мы можем найти решение.',
  },
  {
    question: 'В каких странах доступны платежи?',
    answer: 'Мы работаем с Китаем, Турцией, ОАЭ и другими странами через наших прямых агентов. Если вам нужно пополнить кошелёк или оплатить поставщика в другой стране — уточняйте у менеджера.',
  },
  {
    question: 'Какие валюты поддерживаются?',
    answer: 'Мы работаем с юанями (¥), долларами ($), евро (€), тенге (₸) и другими валютами. Курс уточняется индивидуально в зависимости от валюты и суммы. Для юаней курс: 1 ¥ = 11.40 ₽.',
  },
  {
    question: 'Как быстро происходит пополнение?',
    answer: 'Скорость зависит от кошелька. Alipay и WeChat Pay — 5-15 минут. PayPal, Binance, Wise — 1-3 часа. Точные сроки уточняйте у менеджера при запросе.',
  },
  {
    question: 'Можно ли пополнить несколько кошельков одновременно?',
    answer: 'Да, конечно. Мы можем обработать несколько пополнений одновременно. Для комбо-клиентов это особенно удобно — один менеджер, одна оплата, несколько пополнений.',
  },
  {
    question: 'Подходит ли услуга для частных лиц?',
    answer: 'Да, мы работаем и с бизнесом, и с частными лицами. Если вам нужно пополнить личный кошелёк для оплаты услуг или покупок — мы поможем.',
  },
]

const webPageData = {
  '@type': 'WebPage',
  name: 'Международные платежи',
  description: 'Пополнение PayPal, Binance, Wise и других зарубежных кошельков',
  url: 'https://popolnit-alipay.com/mezhdunarodnye-platezhi',
  inLanguage: 'ru-RU',
}

export default function MezhdunarodnyePlatezhiPage() {
  return (
    <>
      <DataLayer pageType="service" siteSection="international-payments" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Международные платежи' },
      ]} />
      <StructuredDataGenerator type="WebPage" data={webPageData} />
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding-sm bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="relative rounded-3xl border border-white/5 bg-surface/50 p-8 sm:p-20 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md rounded-2xl">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Международные платежи
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Международные платежи — пополнение PayPal, Binance, Wise и других кошельков
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl">
                Пополнение PayPal, Binance, Wise и других зарубежных кошельков. 
                Для бизнеса и частных лиц.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up stagger-3">
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  PayPal, Binance, Wise
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Для бизнеса
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Быстро и безопасно
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                <a href="https://t.me/Dmitriy_kargo" target="_blank" rel="noopener noreferrer" className="btn-primary hover-lift hover-glow">
                  Пополнить кошелёк
                </a>
                <a href="https://t.me/Dmitriy_kargo" target="_blank" rel="noopener noreferrer" className="btn-secondary hover-lift">
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
            <h2 className="mb-6 text-white">Международные платежи: пополнение PayPal, Binance, Wise и других кошельков</h2>
            <p>
              Если вам нужно пополнить зарубежный кошелёк или оплатить поставщика в другой стране, 
              мы поможем. Мы работаем с прямыми агентами в Китае, Турции, ОАЭ и других странах, 
              поэтому можем предложить быстрые и выгодные решения.
            </p>
            <p>
              Не нужно искать посредников, переплачивать за «удобство» или ждать дни — мы обрабатываем 
              платежи за часы, а некоторые — за минуты.
            </p>

            <h2 className="mt-12 mb-6 text-white">Международные платежи: в какие страны</h2>
            <p>
              Мы работаем с:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card text-center">
                <h3 className="text-lg font-medium mb-2 text-white">Китай</h3>
                <p className="text-white/60 text-sm">
                  Прямые агенты в Китае. Alipay, WeChat Pay, банковские переводы.
                </p>
              </div>
              <div className="card text-center">
                <h3 className="text-lg font-medium mb-2 text-white">Турция</h3>
                <p className="text-white/60 text-sm">
                  Прямые агенты в Турции. Пополнение кошельков, оплата поставщиков.
                </p>
              </div>
              <div className="card text-center">
                <h3 className="text-lg font-medium mb-2 text-white">ОАЭ</h3>
                <p className="text-white/60 text-sm">
                  Прямые агенты в ОАЭ. Международные переводы, пополнение кошельков.
                </p>
              </div>
            </div>
            <p>
              Если вам нужно пополнить кошелёк или оплатить поставщика в другой стране — уточняйте 
              у менеджера. Мы постоянно расширяем географию и можем найти решение для большинства стран.
            </p>

            <h2 className="mt-12 mb-6 text-white">Международные платежи: какие валюты</h2>
            <p>
              Мы работаем с основными валютами:
            </p>
            <div className="card mb-6">
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  <span><strong>Юани (¥)</strong> — курс 1 ¥ = 11.40 ₽</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  <span><strong>Доллары ($)</strong> — курс уточняется индивидуально</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  <span><strong>Евро (€)</strong> — курс уточняется индивидуально</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  <span><strong>Тенге (₸)</strong> — курс 1 ¥ = 59 ₸ (через юани)</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span>
                  <span><strong>Другие валюты</strong> — курс уточняется индивидуально</span>
                </li>
              </ul>
            </div>
            <p>
              Курс зависит от валюты, суммы и способа пополнения. Вы всегда видите финальную сумму 
              в рублях до оплаты. Никаких скрытых комиссий.
            </p>

            <h2 className="mt-12 mb-6 text-white">Международные платежи: пополнение каких кошельков</h2>
            <p>
              Мы пополняем более 20 кошельков и платёжных систем:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="text-lg font-medium mb-3 text-white">Китайские кошельки</h3>
                <ul className="text-white/60 space-y-2">
                  <li>• Alipay</li>
                  <li>• WeChat Pay</li>
                  <li>• Китайские банки</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-lg font-medium mb-3 text-white">Международные платежи: пополнение PayPal, Binance, Wise</h3>
                <ul className="text-white/60 space-y-2">
                  <li>• PayPal</li>
                  <li>• Binance</li>
                  <li>• Wise (бывший TransferWise)</li>
                  <li>• И ещё 15+ кошельков</li>
                </ul>
              </div>
            </div>
            <p>
              Полный список кошельков уточняйте у менеджера. Если нужного кошелька нет в списке — 
              мы можем найти решение. Мы постоянно расширяем список поддерживаемых кошельков.
            </p>

            <h2 className="mt-12 mb-6 text-white">Международные платежи для бизнеса и частных лиц</h2>
            <p>
              Мы работаем и с бизнесом, и с частными лицами:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="text-lg font-medium mb-3 text-white">Международные платежи для бизнеса</h3>
                <ul className="text-white/60 space-y-2">
                  <li>• Оплата поставщиков за границей</li>
                  <li>• Пополнение корпоративных кошельков</li>
                  <li>• Регулярные платежи</li>
                  <li>• Крупные суммы</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-lg font-medium mb-3 text-white">Международные платежи для частных лиц</h3>
                <ul className="text-white/60 space-y-2">
                  <li>• Пополнение личных кошельков</li>
                  <li>• Оплата услуг за границей</li>
                  <li>• Покупки на зарубежных площадках</li>
                  <li>• Разовые платежи</li>
                </ul>
              </div>
            </div>
            <p>
              Независимо от того, бизнес вы или частное лицо, мы поможем пополнить нужный кошелёк 
              или оплатить поставщика. Процесс одинаковый: вы пишете в Telegram, мы рассчитываем 
              стоимость, вы оплачиваете, мы пополняем.
            </p>

            <h2 className="mt-12 mb-6 text-white">Скорость международных платежей и пополнения кошельков</h2>
            <p>
              Скорость зависит от кошелька:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li><strong>Alipay, WeChat Pay</strong> — 5-15 минут</li>
              <li><strong>PayPal, Binance, Wise</strong> — 1-3 часа</li>
              <li><strong>Банковские переводы</strong> — 1-2 рабочих дня</li>
              <li><strong>Другие кошельки</strong> — уточняется индивидуально</li>
            </ul>
            <p>
              Точные сроки уточняйте у менеджера при запросе. Для срочных платежей можем ускорить 
              процесс. Для комбо-клиентов действует приоритетная обработка.
            </p>

            <h2 className="mt-12 mb-6 text-white">Как происходит пополнение международных кошельков</h2>
            <p>
              Процесс простой:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li>Вы пишете в Telegram, указываете кошелёк, сумму и валюту</li>
              <li>Мы рассчитываем стоимость в рублях по актуальному курсу</li>
              <li>Вы оплачиваете в рублях удобным способом</li>
              <li>Мы пополняем кошелёк (срок зависит от кошелька)</li>
              <li>Вы получаете подтверждение со скриншотом</li>
            </ol>
            <p>
              Всё прозрачно и документировано. Вы всегда знаете, сколько заплатите и когда получите 
              пополнение.
            </p>

            <div className="mt-12 p-6 bg-surface/50  border-l-4 border-white/10">
              <h3 className="text-lg font-medium mb-3">Комбо-услуги: международные платежи + карго доставка</h3>
              <p className="text-white/70 mb-4">
                Пополняете кошелёк? Добавьте карго-доставку из Китая или оплату инвойсов — получите 
                приоритетную обработку и одного менеджера для всех услуг.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kargo-dostavka-iz-kitaya" className="text-white hover:underline font-semibold">
                  Карго-доставка →
                </Link>
                <Link href="/oplata-invoisov-v-kitae" className="text-white hover:underline font-semibold">
                  Оплата инвойсов →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA 
        text="Готовы пополнить кошелёк или оплатить поставщика?"
        buttonText="Связаться в Telegram"
      />
    </>
  )
}
