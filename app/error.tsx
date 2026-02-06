'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логируем ошибку для отладки
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-semibold text-white mb-4">
          Что-то пошло не так
        </h1>
        <p className="text-white/60 mb-6">
          Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте обновить страницу.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Попробовать снова
          </button>
          <Link href="/" className="btn-secondary text-center">
            На главную
          </Link>
        </div>
      </div>
    </div>
  )
}
