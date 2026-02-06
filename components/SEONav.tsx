import Link from 'next/link'

/**
 * Скрытая SEO-навигация для поисковых роботов
 * Создает плотную внутреннюю сеть ссылок для лучшей индексации
 */
export default function SEONav() {
  const pages = [
    { href: '/', label: 'Главная страница' },
    { href: '/kargo-dostavka-iz-kitaya', label: 'Карго-доставка из Китая' },
    { href: '/popolnenie-alipay', label: 'Пополнение Alipay' },
    { href: '/popolnenie-wechat-pay', label: 'Пополнение WeChat Pay' },
    { href: '/oplata-invoisov-v-kitae', label: 'Оплата инвойсов в Китае' },
    { href: '/mezhdunarodnye-platezhi', label: 'Международные платежи' },
    { href: '/otzyvy', label: 'Отзывы клиентов' },
    { href: '/kontakty', label: 'Контакты' },
    { href: '/politika-konfidentsialnosti', label: 'Политика конфиденциальности' },
    { href: '/cookies', label: 'Политика использования cookies' },
  ]

  return (
    <nav className="seo-nav" aria-label="SEO навигация" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
      <ul>
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href} aria-label={page.label}>
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
