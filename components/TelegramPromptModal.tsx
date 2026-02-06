'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Modal from './Modal'
import { TELEGRAM_LINK } from '@/lib/constants'

const STORAGE_KEYS = {
  CLOSED: 'telegram_modal_closed',
  CLICKED: 'telegram_modal_clicked',
  SESSION_SHOWN: 'telegram_modal_session_shown',
} as const

const TIMEOUTS = {
  SHOW_DELAY: 5000, // 5 секунд
  CLOSED_DURATION: 7 * 24 * 60 * 60 * 1000, // 7 дней
  CLICKED_DURATION: 30 * 24 * 60 * 60 * 1000, // 30 дней
} as const

/**
 * Модальное окно с предложением перейти в Telegram
 * 
 * Показывается только на главной странице через 5 секунд после загрузки.
 */
export default function TelegramPromptModal() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Убеждаемся, что компонент загружен на клиенте
  useEffect(() => {
    setMounted(true)
  }, [])

  // Логика показа модалки
  useEffect(() => {
    if (!mounted) return
    
    // Только на главной странице
    if (pathname !== '/') {
      return
    }

    // Проверка sessionStorage (уже показывали в этой сессии)
    try {
      const sessionShown = sessionStorage.getItem(STORAGE_KEYS.SESSION_SHOWN)
      if (sessionShown === 'true') {
        return
      }
    } catch (e) {
      // Игнорируем ошибки
    }

    // Проверка localStorage (закрывали за последние 7 дней)
    try {
      const closedTimestamp = localStorage.getItem(STORAGE_KEYS.CLOSED)
      if (closedTimestamp) {
        const closedTime = parseInt(closedTimestamp, 10)
        const now = Date.now()
        if (!isNaN(closedTime) && now - closedTime < TIMEOUTS.CLOSED_DURATION) {
          return
        }
      }
    } catch (e) {
      // Игнорируем ошибки
    }

    // Проверка localStorage (нажимали кнопку за последние 30 дней)
    try {
      const clickedTimestamp = localStorage.getItem(STORAGE_KEYS.CLICKED)
      if (clickedTimestamp) {
        const clickedTime = parseInt(clickedTimestamp, 10)
        const now = Date.now()
        if (!isNaN(clickedTime) && now - clickedTime < TIMEOUTS.CLICKED_DURATION) {
          return
        }
      }
    } catch (e) {
      // Игнорируем ошибки
    }

    // Таймер на 5 секунд
    const timer = setTimeout(() => {
      // Дополнительная проверка, что мы всё ещё на главной
      if (pathname === '/') {
        setIsOpen(true)
        // Отмечаем в sessionStorage
        try {
          sessionStorage.setItem(STORAGE_KEYS.SESSION_SHOWN, 'true')
        } catch (e) {
          // Игнорируем ошибки
        }
      }
    }, TIMEOUTS.SHOW_DELAY)

    return () => clearTimeout(timer)
  }, [pathname, mounted])

  // Обработка закрытия
  const handleClose = () => {
    setIsOpen(false)
    try {
      localStorage.setItem(STORAGE_KEYS.CLOSED, Date.now().toString())
    } catch (e) {
      // Игнорируем ошибки
    }
  }

  // Обработка клика на "Перейти в Telegram"
  const handleTelegramClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(false)
    try {
      localStorage.setItem(STORAGE_KEYS.CLICKED, Date.now().toString())
    } catch (e) {
      // Игнорируем ошибки
    }
    window.open(TELEGRAM_LINK, '_blank', 'noopener,noreferrer')
  }

  // Не рендерим до монтирования или на других страницах
  if (!mounted || pathname !== '/') {
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6 sm:p-8 relative">
        {/* Кнопка закрытия */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors rounded-lg hover:bg-white/5 z-10"
          aria-label="Закрыть"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Контент */}
        <div className="pr-8">
          <h3 className="text-xl font-semibold text-white mb-4">
            Оперативная связь в Telegram
          </h3>
          
          <p className="text-white/70 mb-2 leading-relaxed">
            Ответим на вопросы по пополнению Alipay/WeChat и оплате инвойсов. 
            Напишите — подскажем сроки, условия и необходимые данные.
          </p>
          
          <p className="text-sm text-white/50 mb-6">
            Без спама. Только по вашему запросу.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleTelegramClick}
              className="btn-primary text-center"
            >
              Перейти в Telegram
            </a>
            
            <button onClick={handleClose} className="btn-secondary">
              Не сейчас
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
