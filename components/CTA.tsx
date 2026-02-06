interface CTAProps {
  text?: string
  buttonText?: string
  variant?: 'primary' | 'secondary'
}

export default function CTA({ 
  text = 'Готовы начать? Получите расчёт в течение 5 минут',
  buttonText = 'Запросить расчёт',
  variant = 'primary'
}: CTAProps) {
  return (
    <section className="section-padding-sm">
      <div className="container-custom">
          <div className="rounded-2xl border border-white/10 bg-surface/30 p-8 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl mb-6 text-white/70">{text}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/Dmitriy_kargo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {buttonText}
              </a>
              <a
                href="https://t.me/Dmitriy_kargo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Связаться в Telegram
              </a>
            </div>
            <p className="text-sm mt-6 text-white/50">
              Ответ в течение 5 минут в рабочее время
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
