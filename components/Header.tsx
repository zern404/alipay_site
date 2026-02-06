'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background" 
      style={{ backgroundColor: '#080808', backdropFilter: 'none' }}
      suppressHydrationWarning
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 gap-3 min-w-0 w-full">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold text-white hover:text-primary transition-colors tracking-tighter flex-shrink-0"
            suppressHydrationWarning
            onClick={() => setMobileMenuOpen(false)}
          >
            Kargo By Kim
          </Link>
          
          <nav className="hidden md:flex items-center flex-1 justify-center max-w-2xl mx-4 gap-3 min-w-0">
            <Link href="/kargo-dostavka-iz-kitaya" className="rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap flex-shrink-0">
              Карго
            </Link>
            <Link href="/popolnenie-alipay" className="rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap flex-shrink-0">
              Alipay
            </Link>
            <Link href="/popolnenie-wechat-pay" className="rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap flex-shrink-0">
              WeChat Pay
            </Link>
            <Link href="/oplata-invoisov-v-kitae" className="rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap flex-shrink-0">
              Инвойсы
            </Link>
            <Link href="/otzyvy" className="rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap flex-shrink-0">
              Отзывы
            </Link>
            <Link href="/kontakty" className="rounded-md px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all whitespace-nowrap flex-shrink-0">
              Контакты
            </Link>
          </nav>
          
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="https://t.me/Dmitriy_kargo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm whitespace-nowrap hidden sm:inline-flex"
            >
              Запросить расчёт
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex-shrink-0"
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Мобильное меню с плавной анимацией */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-white/10 py-6 bg-background">
            <div className="space-y-2">
              <Link 
                href="/kargo-dostavka-iz-kitaya" 
                className="flex items-center px-5 py-4 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-base font-medium rounded-xl mx-2 border border-transparent hover:border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex-1">Карго</span>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/popolnenie-alipay" 
                className="flex items-center px-5 py-4 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-base font-medium rounded-xl mx-2 border border-transparent hover:border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex-1">Alipay</span>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/popolnenie-wechat-pay" 
                className="flex items-center px-5 py-4 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-base font-medium rounded-xl mx-2 border border-transparent hover:border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex-1">WeChat Pay</span>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/oplata-invoisov-v-kitae" 
                className="flex items-center px-5 py-4 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-base font-medium rounded-xl mx-2 border border-transparent hover:border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex-1">Инвойсы</span>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/otzyvy" 
                className="flex items-center px-5 py-4 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-base font-medium rounded-xl mx-2 border border-transparent hover:border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex-1">Отзывы</span>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/kontakty" 
                className="flex items-center px-5 py-4 text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 text-base font-medium rounded-xl mx-2 border border-transparent hover:border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex-1">Контакты</span>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="px-2 mt-6">
              <a
                href="https://t.me/Dmitriy_kargo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-4 bg-primary text-white text-center hover:bg-primary/90 transition-all duration-200 text-base font-semibold rounded-xl shadow-lg shadow-primary/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
                Запросить расчёт
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
