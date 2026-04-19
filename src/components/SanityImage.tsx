import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface SanityImageProps extends Omit<NextImageProps, 'src'> {
  asset: any
}

export default function SanityImage({ asset, alt, ...props }: SanityImageProps) {
  if (!asset) return null

  // Extract dimensions from asset ref (e.g., "image-abcd-1200x800-jpg")
  const ref = asset.asset?._ref || asset._ref
  const dimensions = ref?.split('-')[2]?.split('x')
  
  if (!dimensions) {
    return <NextImage src={urlFor(asset).url()} alt={alt || ''} {...props} />
  }

  const [width, height] = dimensions.map(Number)
  const isPriority = props.priority

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ 
        aspectRatio: `${width} / ${height}`,
        backgroundColor: asset.metadata?.palette?.dominant?.background || '#f3f4f6' 
      }}
    >
      <NextImage
        src={urlFor(asset).width(isPriority ? 1600 : 800).auto('format').url()}
        alt={alt || ''}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        {...props}
      />
    </div>
  )
}
