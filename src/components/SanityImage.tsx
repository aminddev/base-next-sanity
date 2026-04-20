'use client'

import NextImage, { ImageProps as NextImageProps, ImageLoaderProps } from 'next/image'
import { urlFor } from '@/sanity/lib/image'

interface SanityImageProps extends Omit<NextImageProps, 'src'> {
  asset: any
}

export default function SanityImage({ asset, alt, ...props }: SanityImageProps) {
  if (!asset) return null

  // Extract dimensions from asset ref (e.g., "image-abcd-1200x800-jpg")
  const ref = asset.asset?._ref || asset._ref
  const dimensions = ref?.split('-')[2]?.split('x')
  
  // Custom loader to bypass Vercel Image Optimization and use Sanity CDN natively
  const customLoader = ({ width, quality }: ImageLoaderProps) => {
    return urlFor(asset).width(width).quality(quality || 80).auto('format').url()
  }

  if (!dimensions) {
    return <NextImage loader={customLoader} src={ref || ''} alt={alt || ''} {...props} />
  }

  const [width, height] = dimensions.map(Number)

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ 
        aspectRatio: `${width} / ${height}`,
        backgroundColor: asset.metadata?.palette?.dominant?.background || '#f3f4f6' 
      }}
    >
      <NextImage
        loader={customLoader}
        src={ref}
        alt={alt || ''}
        fill
        sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        className="object-cover"
        {...props}
      />
    </div>
  )
}
