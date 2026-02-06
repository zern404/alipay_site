import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 text-sm">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-xl font-bold tracking-tighter text-white mb-4 block">Kargo By Kim</span>
            <p className="text-white/40 text-xs">Карго-доставка и финансовые услуги для бизнеса. Работаем с 2020 года.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link href="/kargo-dostavka-iz-kitaya" className="hover:text-primary transition-colors">
                  Карго-доставка
                </Link>
              </li>
              <li>
                <Link href="/popolnenie-alipay" className="hover:text-primary transition-colors">
                  Пополнение Alipay
                </Link>
              </li>
              <li>
                <Link href="/popolnenie-wechat-pay" className="hover:text-primary transition-colors">
                  Пополнение WeChat Pay
                </Link>
              </li>
              <li>
                <Link href="/oplata-invoisov-v-kitae" className="hover:text-primary transition-colors">
                  Оплата инвойсов
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Информация</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link href="/otzyvy" className="hover:text-primary transition-colors">
                  Отзывы клиентов
                </Link>
              </li>
              <li>
                <Link href="/kontakty" className="hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="/politika-konfidentsialnosti" className="hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  Политика cookies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="https://t.me/Dmitriy_kargo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Telegram: @Dmitriy_kargo
                </a>
              </li>
              <li className="text-xs text-white/40 mt-4">
                Ответ в течение 5 минут
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
            <p>Copyright by Kargo By Kim © {new Date().getFullYear()}.</p>
            <p className="mt-2 md:mt-0">Работаем с 2020 года</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
