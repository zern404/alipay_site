import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Пополнение WeChat — переводы и оплата без блокировок',
  description: 'Пополнение WeChat за минуты. Курс 1 ¥ = 11.40 ₽. Без скрытых комиссий. Для оплаты поставщиков в Китае через WeChat Pay. Быстро и безопасно.',
  keywords: 'пополнение wechat pay, wechat pay россия, пополнить wechat pay, wechat pay из россии',
  openGraph: {
    title: 'Пополнение WeChat Pay из России',
    description: 'Пополнение WeChat Pay за минуты с прозрачными курсами',
  },
}

const faqItems = [
  {
    question: 'Что такое WeChat Pay и чем он отличается от Alipay?',
    answer: 'WeChat Pay — это платёжная система внутри мессенджера WeChat. Многие китайские поставщики используют именно WeChat Pay, особенно те, кто работает через WeChat. Основное отличие от Alipay — это интеграция с мессенджером, но функционал похож. Мы пополняем оба сервиса одинаково быстро.',
  },
  {
    question: 'Какой курс для пополнения WeChat Pay?',
    answer: 'Курс такой же, как для Alipay: 1 ¥ (юань) = 11.40 ₽ (рубль). Фиксированный курс без скрытых комиссий. Вы видите финальную сумму до оплаты.',
  },
  {
    question: 'Как быстро происходит пополнение?',
    answer: 'Пополнение WeChat Pay происходит так же быстро, как Alipay — за 5-15 минут после подтверждения оплаты. Мы обрабатываем сотни операций в день, поэтому скорость гарантирована.',
  },
  {
    question: 'Какие поставщики принимают WeChat Pay?',
    answer: 'WeChat Pay популярен среди поставщиков, которые работают через WeChat (мессенджер). Это особенно актуально для небольших и средних поставщиков, которые общаются с клиентами через WeChat. Если ваш поставщик просит оплату через WeChat — мы поможем пополнить.',
  },
  {
    question: 'Можно ли пополнить и Alipay, и WeChat Pay одновременно?',
    answer: 'Да, конечно. Многие клиенты пополняют оба кошелька для работы с разными поставщиками. Мы можем обработать обе операции одновременно. Для комбо-клиентов это особенно удобно — один менеджер, одна оплата, два пополнения.',
  },
]

const webPageData = {
  '@type': 'WebPage',
  name: 'Пополнение WeChat Pay',
  description: 'Пополнение WeChat Pay из России за минуты',
  url: 'https://popolnit-alipay.com/popolnenie-wechat-pay',
  inLanguage: 'ru-RU',
}

export default function WeChatPayPage() {
  return (
    <>
      <DataLayer pageType="service" siteSection="wechat-pay" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Пополнение WeChat Pay' },
      ]} />
      <StructuredDataGenerator type="WebPage" data={webPageData} />
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding-sm bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="relative rounded-3xl border border-white/5 bg-surface/50 p-8 sm:p-20 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6 animate-fade-in-down">
                <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md rounded-2xl hover-lift">
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Пополнение WeChat Pay
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight animate-fade-in-up stagger-1">
                Пополнение WeChat — переводы и оплата без блокировок
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl animate-fade-in-up stagger-2">
                Пополнение за минуты. Курс 1 ¥ = 11.40 ₽. Для поставщиков, работающих через WeChat.
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
                  Безопасно
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
                <a href="https://t.me/Dmitriy_kargo" target="_blank" rel="noopener noreferrer" className="btn-primary hover-lift hover-glow">
                  Пополнить WeChat Pay
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
            <h2 className="mb-6 text-white">Что такое WeChat Pay</h2>
            <p>
              WeChat Pay — это платёжная система внутри мессенджера WeChat. Если вы работаете 
              с китайскими поставщиками, вы наверняка общались с ними через WeChat. Многие 
              поставщики принимают оплату именно через WeChat Pay, потому что это удобно 
              и быстро.
            </p>
            <p>
              Проблема та же, что и с Alipay: пополнить WeChat Pay из России напрямую практически 
              невозможно. Банки не работают с WeChat Pay, а альтернативные способы либо очень 
              медленные, либо дорогие.
            </p>
            <p>
              Мы решаем эту проблему: пополняем WeChat Pay за минуты по прозрачному курсу, 
              без скрытых комиссий.
            </p>

            <h2 className="mt-12 mb-6 text-white">Пополнение WeChat Pay и Alipay: отличия</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="text-lg font-medium mb-3 text-white">WeChat Pay</h3>
                <ul className="text-white/60 space-y-2">
                  <li>• Интегрирован в мессенджер WeChat</li>
                  <li>• Популярен среди поставщиков, работающих через WeChat</li>
                  <li>• Удобен для небольших и средних поставщиков</li>
                  <li>• Часто используется для быстрых платежей</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-lg font-medium mb-3 text-white">Пополнение Alipay из России</h3>
                <ul className="text-white/60 space-y-2">
                  <li>• Отдельная платёжная система</li>
                  <li>• Популярен среди крупных поставщиков и маркетплейсов</li>
                  <li>• Широко используется на Taobao, 1688, Alibaba</li>
                  <li>• Часто используется для крупных платежей</li>
                </ul>
              </div>
            </div>
            <p>
              В целом, функционал похож — оба сервиса позволяют оплачивать поставщиков в Китае. 
              Разница в том, что некоторые поставщики предпочитают WeChat Pay (особенно те, 
              кто работает через WeChat), а другие — Alipay.
            </p>
            <p>
              Мы пополняем оба сервиса одинаково быстро и по одному курсу. Если ваш поставщик 
              просит оплату через WeChat Pay — мы поможем.
            </p>

            <h2 className="mt-12 mb-6 text-white">Пополнение WeChat: сроки и условия</h2>
            <p>
              WeChat Pay особенно популярен среди:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li><strong>Поставщиков, работающих через WeChat</strong> — если вы общаетесь с поставщиком в WeChat, он, скорее всего, принимает оплату через WeChat Pay</li>
              <li><strong>Небольших и средних поставщиков</strong> — они часто используют WeChat для общения с клиентами и принимают оплату через WeChat Pay</li>
              <li><strong>Производителей и фабрик</strong> — многие фабрики в Китае работают через WeChat и принимают оплату через WeChat Pay</li>
              <li><strong>Поставщиков на маркетплейсах</strong> — некоторые продавцы на 1688 и Taobao также принимают WeChat Pay</li>
            </ul>
            <p>
              Если ваш поставщик просит оплату через WeChat Pay или вы видите QR-код для оплаты 
              в WeChat — мы поможем пополнить ваш кошелёк.
            </p>

            <h2 className="mt-12 mb-6 text-white">Скорость и курс пополнения WeChat Pay</h2>
            <p>
              <strong>Пополнение WeChat Pay происходит за 5-15 минут</strong> после подтверждения оплаты. 
              Это так же быстро, как пополнение Alipay.
            </p>
            <div className="card mb-6 bg-surface/50">
              <h3 className="text-xl font-medium mb-4 text-white">Курс пополнения WeChat Pay из России:</h3>
              <p className="text-2xl font-medium text-white mb-2">1 ¥ = 11.40 ₽</p>
              <p className="text-white/70">
                Фиксированный курс без скрытых комиссий. Вы видите финальную сумму до оплаты. 
                Например, если нужно пополнить на 1000 юаней, вы заплатите 11 400 рублей.
              </p>
            </div>
            <p>
              Мы работаем с прямыми агентами в Китае, поэтому можем предложить выгодный курс. 
              Не нужно искать посредников или переплачивать.
            </p>

            <h2 className="mt-12 mb-6 text-white">Как происходит пополнение WeChat Pay</h2>
            <p>
              Процесс такой же простой, как с Alipay:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-white/70 mb-6 ml-4">
              <li>Вы пишете в Telegram, указываете сумму в юанях и номер аккаунта WeChat Pay (телефон или email)</li>
              <li>Мы рассчитываем стоимость в рублях по курсу 1 ¥ = 11.40 ₽</li>
              <li>Вы оплачиваете в рублях удобным способом</li>
              <li>Мы пополняем ваш WeChat Pay (5-15 минут)</li>
              <li>Вы получаете подтверждение со скриншотом</li>
            </ol>
            <p>
              Всё занимает 5-15 минут. Мы обрабатываем сотни операций в день, поэтому скорость 
              гарантирована.
            </p>

            <h2 className="mt-12 mb-6 text-white">Безопасность пополнения WeChat Pay</h2>
            <p>
              Мы работаем с проверенными каналами и прямыми агентами в Китае. Все операции 
              подтверждаются скриншотами — вы видите, что деньги действительно поступили на 
              ваш аккаунт WeChat Pay.
            </p>
            <p>
              Мы не храним ваши данные и не требуем доступ к вашему аккаунту WeChat Pay. 
              Вы просто указываете номер аккаунта, мы пополняем — и всё.
            </p>
            <p>
              Если возникают вопросы или проблемы — ваш менеджер решает их в течение часа.
            </p>

            <h2 className="mt-12 mb-6 text-white">Alipay или WeChat Pay?</h2>
            <p>
              Если вы не знаете, какой кошелёк пополнить, спросите у поставщика. Большинство 
              поставщиков принимают оба способа оплаты, но некоторые предпочитают один из них.
            </p>
            <p>
              Мы пополняем оба кошелька одинаково быстро и по одному курсу. Если нужно пополнить 
              оба — мы можем обработать обе операции одновременно. Для комбо-клиентов это особенно 
              удобно — один менеджер, одна оплата, два пополнения.
            </p>

            <div className="mt-12 p-6 bg-surface/50  border-l-4 border-white/10">
              <h3 className="text-lg font-medium mb-3">Комбо-услуги: пополнение WeChat Pay + карго доставка</h3>
              <p className="text-white/70 mb-4">
                Заказываете пополнение WeChat Pay? Добавьте карго-доставку из Китая или пополнение 
                Alipay — получите приоритетную обработку и одного менеджера для всех услуг.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kargo-dostavka-iz-kitaya" className="text-white hover:underline font-semibold">
                  Карго-доставка →
                </Link>
                <Link href="/popolnenie-alipay" className="text-white hover:underline font-semibold">
                  Пополнение Alipay →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />

      <CTA 
        text="Готовы пополнить WeChat Pay?"
        buttonText="Пополнить WeChat Pay в Telegram"
      />
    </>
  )
}
