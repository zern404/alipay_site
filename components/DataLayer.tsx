'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface DataLayerProps {
  pageType: string
  siteSection: string
  industry?: string
}

export default function DataLayer({ pageType, siteSection, industry = 'logistics' }: DataLayerProps) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') {
      return
    }

    try {
      // Initialize dataLayer if it doesn't exist
      if (!(window as any).dataLayer) {
        ;(window as any).dataLayer = []
      }
      
      // Push page view event
      ;(window as any).dataLayer.push({
        event: 'page_view',
        page: {
          type: pageType,
          siteSection: siteSection,
          industry: industry,
          path: pathname || window.location.pathname,
        },
      })
    } catch (error) {
      // Silently fail if dataLayer is not available
    }
  }, [mounted, pathname, pageType, siteSection, industry])

  return null
}
