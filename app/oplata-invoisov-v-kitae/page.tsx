import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Оплата инвойсов в Китае | Оплатить инвойс поставщику быстро',
  description: 'Оплата инвойсов поставщикам в Китае. Подтверждение оплаты, прозрачные курсы, быстрая обработка. Для компаний и предпринимателей, работающих с китайскими поставщиками.',
  keywords: 'оплата инвойсов китай, оплатить инвойс поставщику, оплата инвойсов в китае, оплата поставщиков китай',
  openGraph: {
    title: 'Оплата инвойсов в Китае',
    description: 'Оплата инвойсов поставщикам в Китае быстро и безопасно',
  },
}

const faqItems = [
  {
    question: 'Что такое инвойс и зачем его оплачивать?',
    answer: 'Инвойс (invoice) — это счёт на оплату от поставщика. Если вы закупаете товары в Китае, поставщик выставляет инвойс с указанием суммы, товара и реквизитов для оплаты. Оплата инвойса подтверждает заказ и запускает производство или отправку товара.',
  },
  {
    question: 'Почему сложно оплатить инвойс напрямую?',
    answer: 'Большинство китайских поставщиков принимают оплату только через Alipay, WeChat Pay или китайские банки. Российские банки не работают напрямую с китайскими платёжными системами, поэтому оплатить инвойс из России практически невозможно без посредников.',
  },
  {
    question: 'Как мы решаем проблему оплаты инвойсов?',
    answer: 'Мы оплачиваем инвойсы через наши прямые каналы в Китае. Вы отправляете инвойс, мы рассчитываем стоимость в рублях, вы оплачиваете нам, мы оплачиваем поставщику и отправляем подтверждение. Всё занимает 1-2 часа.',
  },
  {
    question: 'В каких валютах можно оплатить инвойс?',
    answer: 'Большинство инвойсов в Китае выставляются в юанях (¥). Мы конвертируем сумму по курсу 1 ¥ = 11.40 ₽. Если инвойс в долларах — курс уточняется индивидуально. Мы работаем с юанями, долларами и другими валютами.',
  },
  {
    question: 'Как быстро происходит оплата инвойса?',
    answer: 'Оплата инвойса занимает 1-2 часа после подтверждения оплаты от вас. Мы обрабатываем платежи в рабочее время (по московскому времени), но для срочных платежей можем ускорить процесс.',
  },
  {
    question: 'Получу ли я подтверждение оплаты?',
    answer: 'Да, мы отправляем подтверждение оплаты со скриншотом или документом от поставщика. Вы видите, что инвойс действительно оплачен, и можете показать это поставщику при необходимости.',
  },
]

const webPageData = {
  '@type': 'WebPage',
  name: 'Оплата инвойсов в Китае',
  description: 'Оплата инвойсов поставщикам в Китае быстро и безопасно',
  url: 'https://popolnit-alipay.com/oplata-invoisov-v-kitae',
  inLanguage: 'ru-RU',
}

export default function InvoisovPage() {
  return (
    <>
      <DataLayer pageType="service" siteSection="invoices" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Оплата инвойсов в Китае' },
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
                  Оплата инвойсов в Китае
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Оплата инвойсов в Китае — оплата инвойсов поставщикам через Alipay и WeChat Pay
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl">
                Оплата инвойсов поставщикам быстро и безопасно. Подтверждение оплаты, прозрачные курсы.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up stagger-3">
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  За 2 часа
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Подтверждение
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-white/90 hover-lift hover-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  Безопасно
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                <a href="https://t.me/Dmitriy_kargo" target="_blank" rel="noopener noreferrer" className="btn-primary hover-lift hover-glow">
                  Оплатить инвойс
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
            <h2 className="mb-6 text-white">Оплата инвойсов в Китае: что такое инвойс</h2>
            <p>
              Инвойс (invoice) — это счёт на оплату от поставщика. Если вы закупаете товары в Китае, 
              поставщик выставляет инвойс с указанием:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li>Суммы к оплате (обычно в юанях)</li>
              <li>Описания товара или услуги</li>
              <li>Реквизитов для оплаты (Alipay, WeChat Pay, банковский счёт)</li>
              <li>Сроков оплаты</li>
            </ul>
            <p>
              Оплата инвойса подтверждает заказ и запускает производство или отправку товара. 
              Без оплаты инвойса поставщик не начнёт работу.
            </p>

            <h2 className="mt-12 mb-6 text-white">Почему сложно оплатить инвойсы в Китае напрямую</h2>
            <p>
              Большинство китайских поставщиков принимают оплату только через:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li><strong>Alipay</strong> — крупнейшая платёжная система Китая</li>
              <li><strong>WeChat Pay</strong> — платёжная система внутри мессенджера WeChat</li>
              <li><strong>Китайские банки</strong> — прямые переводы на счета в Китае</li>
            </ul>
            <p>
              Проблема в том, что российские банки не работают напрямую с китайскими платёжными 
              системами. Вы не можете просто перевести деньги с российской карты на Alipay или 
              WeChat Pay — банки блокируют такие операции.
            </p>
            <p>
              Альтернативные способы (через посредников, криптовалюту, другие платёжные системы) 
              либо очень медленные, либо дорогие, либо ненадёжные. Мы решаем эту проблему.
            </p>

            <h2 className="mt-12 mb-6 text-white">Оплата инвойсов в Китае: как мы решаем проблему</h2>
            <p>
              Мы оплачиваем инвойсы через наши прямые каналы в Китае:
            </p>
            <div className="space-y-4 mb-8">
              <div className="card">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-background text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">1</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Отправка инвойса</h3>
                    <p className="text-white/60">Вы отправляете инвойс от поставщика (фото или PDF) в Telegram.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-background text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">2</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Оплата инвойсов: расчёт стоимости</h3>
                    <p className="text-white/60">Мы рассчитываем стоимость в рублях по актуальному курсу (1 ¥ = 11.40 ₽) и отправляем вам счёт.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-background text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">3</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Оплата инвойсов в Китае</h3>
                    <p className="text-white/60">Вы оплачиваете в рублях удобным способом (карта, перевод, криптовалюта).</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-background text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">4</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Оплата инвойсов поставщику в Китае</h3>
                    <p className="text-white/60">Мы оплачиваем инвойс поставщику через Alipay, WeChat Pay или банковский перевод (1-2 часа).</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-background text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">5</span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Оплата инвойсов: подтверждение оплаты</h3>
                    <p className="text-white/60">Вы получаете подтверждение оплаты со скриншотом или документом от поставщика.</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Всё занимает 1-2 часа. Мы работаем с прямыми агентами в Китае, поэтому можем 
              гарантировать скорость и надёжность.
            </p>

            <h2 className="mt-12 mb-6 text-white">Валюты для оплаты инвойсов в Китае</h2>
            <p>
              Большинство инвойсов в Китае выставляются в юанях (¥). Мы конвертируем сумму 
              по курсу <strong>1 ¥ = 11.40 ₽</strong>. Это фиксированный курс без скрытых комиссий.
            </p>
            <p>
              Если инвойс в долларах (USD) или другой валюте — курс уточняется индивидуально. 
              Мы работаем с юанями, долларами, евро и другими валютами.
            </p>
            <p>
              Вы всегда видите финальную сумму в рублях до оплаты. Никаких сюрпризов и скрытых платежей.
            </p>

            <h2 className="mt-12 mb-6 text-white">Подтверждение оплаты инвойсов в Китае</h2>
            <p>
              После оплаты инвойса вы получаете подтверждение:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li><strong>Скриншот оплаты</strong> — если оплата через Alipay или WeChat Pay</li>
              <li><strong>Банковская выписка</strong> — если оплата через банковский перевод</li>
              <li><strong>Подтверждение от поставщика</strong> — если поставщик подтверждает получение оплаты</li>
            </ul>
            <p>
              Вы можете показать подтверждение поставщику при необходимости. Мы не скрываем 
              детали оплаты — всё прозрачно и документировано.
            </p>

            <h2 className="mt-12 mb-6 text-white">Скорость оплаты инвойсов в Китае</h2>
            <p>
              <strong>Оплата инвойса занимает 1-2 часа</strong> после подтверждения оплаты от вас. 
              Это быстрее, чем у большинства посредников, которые могут затягивать процесс на дни.
            </p>
            <p>
              Мы обрабатываем платежи в рабочее время (по московскому времени), но для срочных 
              платежей можем ускорить процесс. Если инвойс нужно оплатить срочно — сообщите об 
              этом менеджеру, и мы приоритизируем ваш заказ.
            </p>
            <p>
              Для комбо-клиентов (тех, кто заказывает оплату инвойсов + карго или другие услуги) 
              действует приоритетная обработка — обрабатываем в первую очередь.
            </p>

            <h2 className="mt-12 mb-6 text-white">Кому подходит оплата инвойсов в Китае</h2>
            <p>
              Оплата инвойсов нужна, если вы:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li><strong>Закупаете товары в Китае</strong> — поставщики выставляют инвойсы на оплату</li>
              <li><strong>Работаете с производителями</strong> — фабрики требуют предоплату по инвойсу</li>
              <li><strong>Заказываете услуги в Китае</strong> — дизайн, производство, логистика</li>
              <li><strong>Ведёте бизнес с Китаем</strong> — регулярные платежи поставщикам</li>
            </ul>
            <p>
              Если вы регулярно оплачиваете инвойсы (хотя бы раз в месяц), наша услуга сэкономит 
              вам время и деньги по сравнению с поиском посредников или альтернативных способов оплаты.
            </p>

            <div className="mt-12 p-6 bg-surface/50  border-l-4 border-white/10">
              <h3 className="text-lg font-medium mb-3">Комбо-услуги: оплата инвойсов + карго доставка и пополнение Alipay</h3>
              <p className="text-white/70 mb-4">
                Оплачиваете инвойс? Добавьте карго-доставку из Китая — получите приоритетную 
                обработку и одного менеджера для всех услуг.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kargo-dostavka-iz-kitaya" className="text-white hover:underline font-semibold">
                  Карго-доставка →
                </Link>
                <Link href="/popolnenie-alipay" className="text-white hover:underline font-semibold">
                  Пополнение Alipay →
                </Link>
                <Link href="/popolnenie-wechat-pay" className="text-white hover:underline font-semibold">
                  Пополнение WeChat Pay →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA 
        text="Готовы оплатить инвойс?"
        buttonText="Оплатить инвойс в Telegram"
      />
    </>
  )
}
