import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import StructuredDataGenerator from '@/components/StructuredDataGenerator'
import DataLayer from '@/components/DataLayer'

export const metadata: Metadata = {
  title: 'Политика использования cookies | Kargo By Kim',
  description: 'Политика использования cookies на сайте Kargo By Kim. Какие cookies мы используем и как вы можете управлять ими.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://popolnit-alipay.com/cookies',
  },
}

const webPageData = {
  '@type': 'WebPage',
  name: 'Политика использования cookies',
  description: 'Политика использования cookies на сайте Kargo By Kim',
  url: 'https://popolnit-alipay.com/cookies',
  inLanguage: 'ru-RU',
}

export default function CookiesPage() {
  return (
    <>
      <DataLayer pageType="legal" siteSection="cookies" />
      <Breadcrumbs items={[
        { label: 'Главная', href: '/' },
        { label: 'Политика использования cookies' },
      ]} />
      <StructuredDataGenerator type="WebPage" data={webPageData} />
      
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1>Политика использования cookies</h1>
            <p className="text-white/60 mb-8">Последнее обновление: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="space-y-8">
              <div>
                <h2>Что такое cookies</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Cookies — это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
                  (компьютере, планшете или телефоне) при посещении веб-сайта. Они помогают сайту 
                  запоминать ваши настройки и предпочтения, чтобы вам было удобнее пользоваться сайтом.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Например, cookies могут запомнить, что вы уже видели определённое уведомление, 
                  или сохранить ваши языковые настройки. Это обычная практика для большинства современных сайтов.
                </p>
              </div>

              <div>
                <h2>Какие cookies мы используем</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы используем несколько типов cookies:
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-medium text-white mb-3">Обязательные cookies</h3>
                  <p className="text-white/70 leading-relaxed">
                    Эти cookies необходимы для корректной работы сайта. Они обеспечивают базовую 
                    функциональность: навигацию, безопасность, загрузку страниц. Без этих cookies 
                    сайт не сможет работать должным образом, поэтому их нельзя отключить.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-medium text-white mb-3">Аналитические cookies</h3>
                  <p className="text-white/70 leading-relaxed">
                    Эти cookies помогают нам понять, как посетители используют сайт: какие страницы 
                    просматривают, сколько времени проводят на сайте, откуда приходят. Вся информация 
                    обезличена — мы не знаем, кто именно посещал сайт, только общую статистику. 
                    Это помогает нам улучшать интерфейс и делать сайт удобнее.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-medium text-white mb-3">Функциональные cookies</h3>
                  <p className="text-white/70 leading-relaxed">
                    Эти cookies запоминают ваши предпочтения и настройки, чтобы при следующем визите 
                    сайт работал так, как вам удобно. Например, они могут сохранить выбранный язык 
                    интерфейса или другие пользовательские настройки.
                  </p>
                </div>
              </div>

              <div>
                <h2>Для чего используются cookies</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы используем cookies для:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li><strong>Корректной работы сайта:</strong> обеспечение базовой функциональности, безопасность, загрузка контента</li>
                  <li><strong>Аналитики и улучшения интерфейса:</strong> понимание, как пользователи взаимодействуют с сайтом, какие разделы наиболее популярны, где возникают проблемы</li>
                  <li><strong>Удобства пользователя:</strong> сохранение настроек и предпочтений, чтобы не настраивать всё заново при каждом визите</li>
                </ul>
              </div>

              <div>
                <h2>Cookies третьих сторон</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы можем использовать сервисы аналитики и другие инструменты от сторонних компаний 
                  (например, Google Analytics). Эти сервисы также устанавливают cookies на вашем устройстве.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Такие cookies собирают обезличенную информацию и помогают нам улучшать сайт. 
                  Мы не передаём ваши персональные данные этим сервисам — только анонимную статистику.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Использование cookies третьих сторон регулируется политиками конфиденциальности 
                  соответствующих компаний.
                </p>
              </div>

              <div>
                <h2>Управление cookies</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Вы можете управлять cookies через настройки вашего браузера. Большинство браузеров 
                  позволяют:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li>Просматривать список установленных cookies</li>
                  <li>Удалять отдельные cookies или все сразу</li>
                  <li>Блокировать установку новых cookies</li>
                  <li>Настроить автоматическое удаление cookies при закрытии браузера</li>
                </ul>
                <p className="text-white/70 mb-4 leading-relaxed">
                  <strong>Важно:</strong> если вы отключите cookies, некоторые функции сайта могут 
                  работать некорректно или не работать вообще. Например, сайт может не запомнить ваши 
                  настройки или не загрузить некоторые элементы интерфейса.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Инструкции по управлению cookies в популярных браузерах:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70 mb-6 ml-4 leading-relaxed">
                  <li><strong>Chrome:</strong> Настройки → Конфиденциальность и безопасность → Файлы cookie и другие данные сайтов</li>
                  <li><strong>Firefox:</strong> Настройки → Приватность и защита → Файлы cookie и данные сайтов</li>
                  <li><strong>Safari:</strong> Настройки → Конфиденциальность → Управлять данными веб-сайтов</li>
                  <li><strong>Edge:</strong> Настройки → Файлы cookie и разрешения сайтов → Файлы cookie и данные сайтов</li>
                </ul>
              </div>

              <div>
                <h2>Изменения в политике cookies</h2>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Мы можем периодически обновлять эту политику, чтобы отражать изменения в том, 
                  как мы используем cookies, или по другим операционным, юридическим или нормативным причинам.
                </p>
                <p className="text-white/70 mb-4 leading-relaxed">
                  Актуальная версия политики всегда доступна на этой странице. Дата последнего 
                  обновления указана в начале документа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
