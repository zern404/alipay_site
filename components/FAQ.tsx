'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <section className="section-padding bg-background" aria-label="Часто задаваемые вопросы">
      <div className="container-custom">
        <div className="bg-black/20 rounded-3xl border border-white/10 p-8">
          <div className="max-w-3xl mb-8">
            <h2 className="mb-4 text-white">Часто задаваемые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4" role="list">
            {items.map((item, index) => {
              const isOpen = openIndex === index
              const itemId = `faq-item-${index}`
              const contentId = `faq-content-${index}`
              
              return (
                <div
                  key={itemId}
                  className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
                  role="listitem"
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      id={itemId}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => handleToggle(index)}
                      className="w-full flex items-center justify-between font-medium text-white text-left gap-4 p-4 cursor-pointer hover:bg-white/5 transition-colors duration-200 bg-transparent border-0 outline-none"
                    >
                      <span className="flex-1">{item.question}</span>
                      <span
                        className={`h-5 w-5 transition-transform duration-300 text-white/50 flex items-center justify-center flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      >
                        ▼
                      </span>
                    </button>
                  </h3>
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={itemId}
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: isOpen ? '1000px' : '0',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-4 pb-4 pt-4 border-t border-white/10 text-sm text-white/70 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
