import { MetadataRoute } from 'next'
import { sanityFetch } from '@/sanity/lib/live'
import { groq } from 'next-sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Fetch all post slugs
  const { data: posts } = await sanityFetch({
    query: groq`*[_type == "post" && defined(slug.current)] { "slug": slug.current, _updatedAt }`,
  })

  const postEntries: MetadataRoute.Sitemap = (posts || []).map((post: any) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]

  return [...staticEntries, ...postEntries]
}
