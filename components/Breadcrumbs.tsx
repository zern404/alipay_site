import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://popolnit-alipay.com${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Хлебные крошки" className="py-4 bg-background border-b border-white/5">
        <div className="container-custom">
          <ol className="flex flex-wrap items-center text-sm">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-3 text-white/30" aria-hidden="true">
                    /
                  </span>
                )}
                {item.href && index < items.length - 1 ? (
                  <Link 
                    href={item.href} 
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
