import { groq } from 'next-sanity'

// Fetch all posts with author and category details
export const POSTS_QUERY = groq`*[_type == "post" && language == $language && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  author->{
    name,
    image
  },
  categories[]->{
    title,
    slug
  }
}`

// Fetch a single post by slug
export const POST_QUERY = groq`*[_type == "post" && language == $language && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  author->{
    name,
    image,
    bio
  },
  categories[]->{
    title,
    slug
  }
}`

// Fetch all categories
export const CATEGORIES_QUERY = groq`*[_type == "category"] {
  _id,
  title,
  slug,
  description
}`
