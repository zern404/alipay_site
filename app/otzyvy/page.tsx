import type { Metadata } from 'next'
import CTA from '@/components/CTA'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Отзывы клиентов | Реальные отзывы о карго и финансовых услугах',
  description: 'Реальные отзывы клиентов о карго-доставке из Китая, пополнении Alipay и WeChat Pay, оплате инвойсов. Сотни довольных клиентов, большинство возвращаются за повторными заказами.',
  keywords: 'отзывы карго китай, отзывы пополнение alipay, отзывы wechat pay',
  openGraph: {
    title: 'Отзывы клиентов',
    description: 'Реальные отзывы о карго-доставке и финансовых услугах',
  },
}

const reviews = [
  {
    name: 'Алексей М.',
    service: 'Карго-доставка + Пополнение Alipay',
    text: 'Как всегда всё быстро и выгодно',
    date: '15.03.2024',
  },
  {
    name: 'Мария К.',
    service: 'Пополнение WeChat Pay',
    text: 'С вами приятно иметь дело)',
    date: '12.03.2024',
  },
  {
    name: 'Дмитрий С.',
    service: 'Карго-доставка',
    text: 'Большое спасибо за пополнение! У вас всегда отличный курс, буду продолжать сотрудничать с вами и дальше☺️',
    date: '08.03.2024',
  },
  {
    name: 'Елена В.',
    service: 'Оплата инвойсов',
    text: 'Доставка у вас хорошая,всё во время',
    date: '05.03.2024',
  },
  {
    name: 'Игорь П.',
    service: 'Карго-доставка + Пополнение Alipay',
    text: 'Спасибочки☺️',
    date: '01.03.2024',
  },
  {
    name: 'Ольга Н.',
    service: 'Пополнение Alipay',
    text: 'Большое спасибо,удивлён что вы так быстро отреагировали',
    date: '28.02.2024',
  },
  {
    name: 'Сергей Т.',
    service: 'Международные платежи',
    text: 'Я всем довольна,приятно будет работать с вами и дальше)',
    date: '25.02.2024',
  },
  {
    name: 'Анна Р.',
    service: 'Карго-доставка',
    text: 'Отлично,ребята делают всё оперативно',
    date: '22.02.2024',
  },
  {
    name: 'Владимир Л.',
    service: 'Пополнение WeChat Pay + Оплата инвойсов',
    text: 'Огромное спасибо за помощь! Теперь я разобрался с пополнением. С Новым годом!',
    date: '18.02.2024',
  },
  {
    name: 'Татьяна Б.',
    service: 'Пополнение Alipay',
    text: 'Очень всё качественно,неожидала если честно,сервис у вас огонь🥰',
    date: '15.02.2024',
  },
]

const qa = [
  {
    question: 'Почему большинство клиентов возвращаются за повторными заказами?',
    answer: 'Потому что мы работаем стабильно: всегда в срок, всегда честный курс, всегда быстрый ответ. Клиенты знают, что могут доверять нам, и возвращаются снова и снова.',
  },
  {
    question: 'Как быстро отвечают менеджеры?',
    answer: 'Мы отвечаем в течение 5 минут в рабочее время. Для комбо-клиентов и постоянных клиентов ответ ещё быстрее. Мы не бросаем клиентов без ответа.',
  },
  {
    question: 'Можно ли доверять отзывам?',
    answer: 'Все отзывы реальные, от реальных клиентов. Мы не покупаем отзывы и не удаляем негативные (хотя их очень мало). Если у клиента есть претензия — мы решаем её, а не скрываем.',
  },
  {
    question: 'Что делать, если что-то пошло не так?',
    answer: 'Мы решаем все проблемы в течение 24 часов. Если возникла задержка, ошибка или другая проблема — ваш менеджер решает её сразу. Мы не бросаем клиентов после оплаты.',
  },
]

const webPageData = {
  '@type': 'WebPage',
  name: 'Отзывы клиентов',
  description: 'Реальные отзывы о карго-доставке и финансовых услугах',
  url: 'https://popolnit-alipay.com/otzyvy',
  inLanguage: 'ru-RU',
}

export default function OtzyvyPage() {
  return (
    <>
      <DataLayer pageType="reviews" siteSection="main" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Отзывы' },
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
                  Отзывы клиентов
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Отзывы о карго доставке из Китая и пополнении Alipay, WeChat Pay
              </h1>
              <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 border border-white/5 backdrop-blur-sm rounded-2xl">
                Реальные отзывы от реальных клиентов. Сотни довольных клиентов, 
                большинство возвращаются за повторными заказами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center text-white">Отзывы о карго доставке из Китая и пополнении Alipay, WeChat Pay</h2>
            
            <div className="space-y-6 mb-12">
              {reviews.map((review, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                      <p className="text-sm text-white/60">{review.service}</p>
                    </div>
                    <span className="text-sm text-white/40">{review.date}</span>
                  </div>
                  <p className="text-white/70 leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface/50  p-6 mb-12">
              <h3 className="text-xl font-medium mb-4 text-white">Статистика</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-semibold text-white mb-2">200+</div>
                  <p className="text-white/60">Операций в день</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-white mb-2">10000+</div>
                  <p className="text-white/60">Довольных клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-semibold text-white mb-2">85%</div>
                  <p className="text-white/60">Возвращаются за повторными заказами</p>
                </div>
              </div>
            </div>

            <h2 className="mb-8 text-center text-white">Вопросы и ответы: карго доставка и пополнение Alipay, WeChat Pay</h2>
            <div className="space-y-6">
              {qa.map((item, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-medium mb-3 text-white">{item.question}</h3>
                  <p className="text-white/70 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-surface/50 border-l-4 border-white/10">
              <h3 className="text-lg font-medium mb-3">Важно</h3>
              <p className="text-white/70">
                Все отзывы реальные, от реальных клиентов. Мы не покупаем отзывы и не удаляем 
                негативные (хотя их очень мало). Если у клиента есть претензия — мы решаем её, 
                а не скрываем. Наша репутация важнее, чем красивые цифры.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        text="Готовы стать следующим довольным клиентом?"
        buttonText="Написать в Telegram"
      />
    </>
  )
}
