import StructuredData from './StructuredData'

interface StructuredDataGeneratorProps {
  type: 'WebSite' | 'WebPage' | 'FAQPage' | 'HowTo' | 'ItemList' | 'Organization' | 'Service'
  data: any
}

export default function StructuredDataGenerator({ type, data }: StructuredDataGeneratorProps) {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return <StructuredData data={baseStructure} />
}
