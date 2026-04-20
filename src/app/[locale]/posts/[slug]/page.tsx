import { notFound } from 'next/navigation'
import { sanityFetch } from '@/sanity/lib/live'
import { POST_QUERY } from '@/sanity/lib/queries'
import PortableText from '@/components/PortableText'
import SanityImage from '@/components/SanityImage'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params
  const { data: post } = await sanityFetch({ 
    query: POST_QUERY, 
    params: { language: locale, slug } 
  })

  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [{ url: post.mainImage.asset?._ref }] : [],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  
  const { data: post } = await sanityFetch({ 
    query: POST_QUERY, 
    params: { language: locale, slug },
    tags: [`post:${slug}`, 'post']
  })

  if (!post) {
    return notFound()
  }

  // JSON-LD for Search Engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name,
    },
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories?.map((category: any) => (
            <span key={category.slug.current} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold italic">
              #{category.title}
            </span>
          ))}
        </div>
        
        <h1 className="text-5xl font-black mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 mb-10">
          {post.author?.image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
              <SanityImage
                asset={post.author.image}
                alt={post.author.name}
              />
            </div>
          )}
          <div>
            <p className="font-bold text-lg">{post.author?.name}</p>
            <p className="text-muted-foreground text-sm">
              Published on {new Date(post.publishedAt).toLocaleDateString(locale, { dateStyle: 'long' })}
            </p>
          </div>
        </div>

        {post.mainImage && (
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
            <SanityImage
              asset={post.mainImage}
              alt={post.mainImage.alt || post.title}
              priority
            />
          </div>
        )}
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={post.body} />
      </div>
      
      <footer className="mt-20 pt-10 border-t border-muted">
        <div className="flex items-center gap-6 p-8 bg-muted/30 rounded-3xl">
          {post.author?.image && (
            <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg shrink-0">
               <SanityImage
                asset={post.author.image}
                alt={post.author.name}
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold mb-2">About {post.author?.name}</h3>
            <div className="text-muted-foreground">
              <PortableText value={post.author?.bio} />
            </div>
          </div>
        </div>
      </footer>
    </article>
  )
}
