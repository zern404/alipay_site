import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-semibold text-white mb-4">404</h1>
        <h2 className="text-xl font-medium text-white mb-4">
          Страница не найдена
        </h2>
        <p className="text-white/60 mb-6">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Link href="/" className="btn-primary inline-block">
          На главную
        </Link>
      </div>
    </div>
  )
}
