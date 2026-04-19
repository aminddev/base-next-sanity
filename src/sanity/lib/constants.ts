/**
 * Centralized Sanity type names to avoid magic strings and ensure consistency
 */
export const SANITY_TYPES = {
  POST: 'post',
  AUTHOR: 'author',
  CATEGORY: 'category',
} as const

/**
 * Revalidation intervals (in seconds)
 */
export const CACHE_REVALIDATE = {
  DEFAULT: 3600, // 1 hour safety net
  GALLERY: 86400, // 24 hours
} as const
