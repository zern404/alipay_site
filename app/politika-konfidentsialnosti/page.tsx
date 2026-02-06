import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Kargo By Kim',
  description: 'Политика конфиденциальности Kargo By Kim. Как мы собираем, используем и защищаем ваши персональные данные.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://popolnit-alipay.com/politika-konfidentsialnosti',
  },
}

const webPageData = {
  '@type': 'WebPage',
  name: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности Kargo By Kim',
  url: 'https://popolnit-alipay.com/politika-konfidentsialnosti',
  inLanguage: 'ru-RU',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <DataLayer pageType="legal" siteSection="privacy" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Политика конфиденциальности' },
      ]} />
      <StructuredDataGenerator type="WebPage" data={webPageData} />
      
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1>Политика конфиденциальности</h1>
            <p className="text-white/60 mb-8">Последнее обновление: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="space-y-8">
              <div>
                <h2>Общие положения</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Эта политика конфиденциальности описывает, как мы обрабатываем ваши персональные данные 
                  при использовании сервиса Kargo By Kim. Она нужна, чтобы вы понимали, какие данные мы 
                  собираем и как их используем.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Политика распространяется на всех пользователей нашего сервиса — как на тех, кто просто 
                  просматривает сайт, так и на тех, кто пользуется нашими услугами.
                </p>
              </div>

              <div>
                <h2>Какие данные мы собираем</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы собираем только те данные, которые необходимы для оказания услуг:
                </p>
                <h3 className="text-lg font-medium text-white mb-3 mt-6">Данные, которые вы предоставляете добровольно:</h3>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li>Контактная информация: имя, номер телефона, адрес электронной почты, Telegram username</li>
                  <li>Информация о заказах: детали запросов, суммы операций, реквизиты для оплаты</li>
                  <li>Сообщения и обращения: переписка в мессенджерах и по электронной почте</li>
                </ul>
                <h3 className="text-lg font-medium text-white mb-3 mt-6">Технические данные:</h3>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li>IP-адрес, тип браузера, операционная система, устройство</li>
                  <li>Информация о посещении сайта: какие страницы просматривались, время на сайте</li>
                </ul>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы не собираем лишние данные. Если информация не нужна для оказания услуги, мы её не запрашиваем.
                </p>
              </div>

              <div>
                <h2>Как используются данные</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Собранные данные мы используем исключительно для:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li><strong>Оказания услуг:</strong> обработка заказов, выполнение операций, связь с вами по вопросам заказов</li>
                  <li><strong>Связи с пользователем:</strong> ответы на вопросы, уведомления о статусе заказов, важные обновления</li>
                  <li><strong>Улучшения сервиса:</strong> анализ работы сайта, исправление ошибок, добавление новых функций</li>
                </ul>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы не используем ваши данные для рекламы или передачи третьим лицам без необходимости.
                </p>
              </div>

              <div>
                <h2>Передача данных третьим лицам</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы не продаём и не передаём ваши персональные данные третьим лицам. Исключения:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li><strong>При оказании услуги:</strong> если для выполнения вашего заказа нужно передать данные партнёрам (например, логистическим компаниям), мы передаём только необходимый минимум</li>
                  <li><strong>По законному требованию:</strong> если этого требует законодательство или судебные органы</li>
                </ul>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Во всех остальных случаях ваши данные остаются у нас и не передаются никому.
                </p>
              </div>

              <div>
                <h2>Хранение и защита данных</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы применяем разумные меры безопасности для защиты ваших данных:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li>Используем защищённые протоколы передачи данных (HTTPS)</li>
                  <li>Ограничиваем доступ к персональным данным только сотрудникам, которым это необходимо для работы</li>
                  <li>Регулярно обновляем системы безопасности</li>
                </ul>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Данные хранятся столько, сколько необходимо для оказания услуг и выполнения обязательств. 
                  После этого они удаляются или обезличиваются.
                </p>
              </div>

              <div>
                <h2>Cookies и аналитика</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Наш сайт использует cookies — небольшие файлы, которые помогают сайту работать корректно 
                  и улучшают ваш опыт использования. Мы также можем использовать сервисы аналитики для 
                  понимания, как пользователи взаимодействуют с сайтом.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Подробнее о том, какие cookies мы используем и как вы можете ими управлять, читайте в 
                  нашей <Link href="/cookies" className="text-primary hover:underline">Политике использования cookies</Link>.
                </p>
              </div>

              <div>
                <h2>Права пользователя</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Вы имеете право:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li><strong>Запросить информацию:</strong> узнать, какие данные мы храним о вас</li>
                  <li><strong>Обновить данные:</strong> исправить неточную или устаревшую информацию</li>
                  <li><strong>Удалить данные:</strong> попросить удалить ваши персональные данные (если это не противоречит нашим обязательствам)</li>
                  <li><strong>Отказаться от коммуникаций:</strong> прекратить получение уведомлений и сообщений</li>
                </ul>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Чтобы воспользоваться этими правами, свяжитесь с нами через контакты, указанные ниже.
                </p>
              </div>

              <div>
                <h2>Контактная информация</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  <strong>Telegram:</strong>{' '}
                  <a href="https://t.me/Dmitriy_kargo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @Dmitriy_kargo
                  </a>
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы отвечаем на обращения в течение рабочего дня.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
