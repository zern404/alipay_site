'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
}

/**
 * Базовый переиспользуемый компонент модального окна
 * 
 * Features:
 * - Закрытие по ESC
 * - Закрытие по клику на overlay
 * - Focus trap
 * - Блокировка скролла фона
 * - Accessibility (aria-modal, role="dialog")
 * - Плавные анимации появления и исчезновения
 */
export default function Modal({ isOpen, onClose, children, title, className = '' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  // Управление рендерингом и анимацией
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      // Небольшая задержка для запуска анимации появления
      requestAnimationFrame(() => {
        setIsAnimating(true)
      })
    } else {
      // Запускаем анимацию исчезновения
      setIsAnimating(false)
      // Удаляем из DOM после завершения анимации
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 300) // Длительность анимации
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Блокировка скролла фона
  useEffect(() => {
    if (shouldRender) {
      // Сохраняем текущий активный элемент
      previousActiveElement.current = document.activeElement as HTMLElement
      
      // Блокируем скролл
      document.body.style.overflow = 'hidden'
      
      // Фокус на модалке после анимации появления
      if (isAnimating && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        }
      }
    } else {
      // Восстанавливаем скролл
      document.body.style.overflow = ''
      
      // Возвращаем фокус
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [shouldRender, isAnimating])

  // Обработка ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (!shouldRender || !isAnimating || !modalRef.current) return

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusableElements = Array.from(
        modalRef.current!.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => !el.hasAttribute('disabled'))

      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [shouldRender, isAnimating])

  if (!shouldRender) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative z-10 w-full max-w-md mx-4 bg-surface/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isAnimating
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4'
        } ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
