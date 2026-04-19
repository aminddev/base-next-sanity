import { defineLive } from 'next-sanity'
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ 
    // Live fetches must always use the latest perspective
    useCdn: false 
  }),
  serverToken: token,
  browserToken: token,
  // Safety net: revalidate every hour in case webhooks fail
  fetchOptions: {
    revalidate: 3600
  }
})
