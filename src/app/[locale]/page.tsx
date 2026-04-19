import { sanityFetch } from '@/sanity/lib/live'
import { POSTS_QUERY } from '@/sanity/lib/queries'
import SanityImage from '@/components/SanityImage'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  
  const t = useTranslations('Home')

  const { data: posts } = await sanityFetch({ 
    query: POSTS_QUERY,
    params: { language: locale },
    next: { 
      tags: ['post'],
      revalidate: 3600 // 1-hour safety net
    }
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <header className="mb-16 text-center">
        <LanguageSwitcher />
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-muted-foreground">
          {t('description')}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts?.map((post: any, index: number) => (
          <article key={post._id} className="group cursor-pointer">
            <Link href={`/posts/${post.slug.current}`}>
              <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-2xl bg-muted transition-all group-hover:shadow-2xl">
                {post.mainImage && (
                  <SanityImage
                    asset={post.mainImage}
                    alt={post.mainImage.alt || post.title}
                    priority={index < 2}
                  />
                )}
              </div>
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3">
                {post.author?.image && (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <SanityImage
                      asset={post.author.image}
                      alt={post.author.name}
                    />
                  </div>
                )}
                <span className="text-sm font-medium">
                  {post.author?.name}
                </span>
                <span className="text-sm text-muted-foreground px-2">•</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString(locale)}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      {!posts?.length && (
        <div className="text-center py-20 border-2 border-dashed rounded-3xl">
          <p className="text-muted-foreground">{t('noPosts')}</p>
        </div>
      )}
    </div>
  )
}
