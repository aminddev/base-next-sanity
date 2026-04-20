import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-04-20',
  useCdn: false, // Must be false for Stega/Live editing
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || '/studio',
    // Disable Stega by default to prevent HTML payload bloat
    // next-sanity/live will auto-enable it during Draft Mode
    enabled: false,
  },
})
