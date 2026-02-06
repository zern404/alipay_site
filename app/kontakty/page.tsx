import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Контакты | Связь с нами в Telegram',
  description: 'Свяжитесь с нами в Telegram для расчёта стоимости услуг. Ответим в течение 5 минут. Работаем с 2020 года.',
  keywords: 'контакты карго китай, связь telegram, контакты пополнение alipay',
  openGraph: {
    title: 'Контакты',
    description: 'Свяжитесь с нами в Telegram для расчёта стоимости услуг',
  },
}

const webPageData = {
  '@type': 'WebPage',
  name: 'Контакты',
  description: 'Свяжитесь с нами в Telegram для расчёта стоимости услуг',
  url: 'https://popolnit-alipay.com/kontakty',
  inLanguage: 'ru-RU',
}

export default function KontaktyPage() {
  return (
    <>
      <DataLayer pageType="contacts" siteSection="main" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Контакты' },
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
                  Контакты
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Контакты: карго доставка из Китая и пополнение Alipay, WeChat Pay
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl">
                Свяжитесь с нами в Telegram. Ответим в течение 5 минут.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://t.me/Dmitriy_kargo" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-4 text-white">Telegram</h3>
                <a
                  href="https://t.me/Dmitriy_kargo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-semibold text-lg"
                >
                  @Dmitriy_kargo
                </a>
                <p className="text-white/60 mt-4">
                  Основной канал связи. Напишите «Комбо» для быстрого ответа.
                </p>
              </div>

              <div className="card text-center">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-xl font-medium mb-4 text-white">Время ответа</h3>
                <p className="text-xl font-medium text-white mb-2">5 минут</p>
                <p className="text-white/60">
                  Мы отвечаем в течение 5 минут в рабочее время (МСК). 
                  Для комбо-клиентов ответ ещё быстрее.
                </p>
              </div>
            </div>

            <div className="card mb-8">
              <h2 className="text-xl font-medium mb-4 text-white">Формат работы: карго доставка и пополнение Alipay, WeChat Pay</h2>
              <p className="text-white/70 mb-4">
                Мы работаем через Telegram — это быстрее и удобнее, чем email или телефон. 
                Вы пишете нам, мы отвечаем в течение 5 минут, рассчитываем стоимость, 
                вы оплачиваете, мы выполняем заказ.
              </p>
              <p className="text-white/70 mb-4">
                Для быстрого ответа напишите слово <strong>«Комбо»</strong> — мы сразу поймём, 
                что вам нужен расчёт, и ответим с подробным планом.
              </p>
              <p className="text-white/70">
                Если у вас есть вопросы или нужна консультация — просто напишите. 
                Мы не продаём «воздух» и не навязываем услуги. Если мы не можем помочь — 
                честно скажем об этом.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-xl font-medium mb-4 text-white">Что написать в Telegram для карго доставки и пополнения Alipay, WeChat Pay</h2>
              <div className="space-y-4">
                <div className="bg-surface/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Для быстрого ответа:</p>
                  <p className="text-white/70">«Комбо»</p>
                  <p className="text-sm text-white/40 mt-2">
                    Мы ответим с подробным планом в течение 5 минут
                  </p>
                </div>
                <div className="bg-surface/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Для конкретной услуги:</p>
                  <p className="text-white/70">«Нужна карго-доставка из Китая»</p>
                  <p className="text-white/70">«Пополнить Alipay на 5000 юаней»</p>
                  <p className="text-white/70">«Оплатить инвойс поставщику»</p>
                  <p className="text-sm text-white/40 mt-2">
                    Укажите детали, и мы рассчитаем стоимость
                  </p>
                </div>
                <div className="bg-surface/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Для вопросов:</p>
                  <p className="text-white/70">Просто задайте вопрос — мы ответим</p>
                  <p className="text-sm text-white/40 mt-2">
                    Мы не игнорируем вопросы и не отправляем автоматические ответы
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-surface/50">
              <h2 className="text-xl font-medium mb-4 text-white">О нас: карго доставка из Китая и пополнение Alipay, WeChat Pay</h2>
              <p className="text-white/70 mb-4">
                Мы работаем с 2020 года. За это время помогли сотням предпринимателей и компаний 
                с карго-доставкой и финансовыми услугами. Большинство клиентов возвращаются за 
                повторными заказами — это лучший показатель качества.
              </p>
              <p className="text-white/70 mb-4">
                Мы не обещаем «100% без риска» — это нечестно. Но мы обещаем работать честно, 
                быстро и профессионально. Если что-то идёт не так — мы решаем проблему, 
                а не скрываем её.
              </p>
              <p className="text-white/70">
                Наша репутация важнее, чем быстрая прибыль. Поэтому мы работаем так, чтобы 
                клиенты возвращались снова и рекомендовали нас друзьям.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        text="Готовы начать? Напишите нам в Telegram"
        buttonText="Написать в Telegram"
      />
    </>
  )
}
